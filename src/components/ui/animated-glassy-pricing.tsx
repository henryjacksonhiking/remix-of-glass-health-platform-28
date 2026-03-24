import React, { useRef, useEffect, useState, Component, type ErrorInfo, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Error boundary – catches any WebGL runtime crash                  */
/* ------------------------------------------------------------------ */
class ShaderErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("ShaderCanvas error caught:", error, info);
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/* ------------------------------------------------------------------ */
/*  CSS-only fallback (used when WebGL unavailable or crashes)        */
/* ------------------------------------------------------------------ */
const CSSFallbackRing = () => (
  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden" aria-hidden="true">
    {/* Animated spinning ring via CSS */}
    <div
      className="absolute w-[32rem] h-[32rem] rounded-full opacity-30"
      style={{
        background:
          "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(170 80% 55%), hsl(var(--primary)))",
        filter: "blur(40px)",
        animation: "orbit-spin 8s linear infinite",
      }}
    />
    <div
      className="absolute w-[28rem] h-[28rem] rounded-full bg-background"
      style={{ filter: "blur(2px)" }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/*  WebGL animated ring (original shader)                             */
/* ------------------------------------------------------------------ */
const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl");
    } catch {
      setFailed(true);
      return;
    }
    if (!gl) {
      setFailed(true);
      return;
    }

    // Detect dark mode for bg color
    const isDark = document.documentElement.classList.contains("dark");
    // --background: 226 60% 12% → approx rgb(12, 20, 49)
    const bgColor = [0.047, 0.078, 0.192];

    const vertSrc = `attribute vec2 aPosition; void main(){ gl_Position=vec4(aPosition,0.,1.); }`;
    const fragSrc = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBg;
      mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
      float vary(vec2 v1,vec2 v2,float str,float spd){return sin(dot(normalize(v1),normalize(v2))*str+iTime*spd)/100.;}
      vec3 ring(vec2 uv,vec2 ctr,float r,float w){
        vec2 d=ctr-uv;float l=length(d);
        l+=vary(d,vec2(0.,1.),5.,2.);
        l-=vary(d,vec2(1.,0.),5.,2.);
        return vec3(smoothstep(r-w,r,l)-smoothstep(r,r+w,l));
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv.x*=1.5;uv.x-=0.25;
        float m=0.;vec2 c=vec2(.5);float r=.35;
        m+=ring(uv,c,r,.035).r;
        m+=ring(uv,c,r-.018,.01).r;
        m+=ring(uv,c,r+.018,.005).r;
        vec2 v=rot(iTime)*uv;
        vec3 fg=vec3(v.x,v.y,.7-v.y*v.x);
        vec3 col=mix(uBg,fg,m);
        col=mix(col,vec3(1.),ring(uv,c,r,.003).r);
        gl_FragColor=vec4(col,1.);
      }`;

    const compile = (type: number, src: string) => {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.warn("Shader error:", gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const prog = gl.createProgram();
    if (!prog) { setFailed(true); return; }
    const vs = compile(gl.VERTEX_SHADER, vertSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) { setFailed(true); return; }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { setFailed(true); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "iTime");
    const uRes = gl.getUniformLocation(prog, "iResolution");
    const uBg = gl.getUniformLocation(prog, "uBg");
    gl.uniform3fv(uBg, new Float32Array(bgColor));

    let raf: number;
    const resize = () => {
      canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1);
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };
    const render = (t: number) => {
      gl!.uniform1f(uTime, t * 0.001);
      gl!.uniform2f(uRes, canvas.width, canvas.height);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (failed) return <CSSFallbackRing />;

  return <canvas ref={canvasRef} className="absolute bottom-0 left-0 right-0 w-full h-[80%]" />;
};

/* ------------------------------------------------------------------ */
/*  Animated background wrapper                                       */
/* ------------------------------------------------------------------ */
const AnimatedBackground = () => (
  <div className="hidden md:block">
    <ShaderErrorBoundary fallback={<CSSFallbackRing />}>
      <ShaderCanvas />
    </ShaderErrorBoundary>
  </div>
);

/* ------------------------------------------------------------------ */
/*  CheckIcon                                                         */
/* ------------------------------------------------------------------ */
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Pricing Card                                                      */
/* ------------------------------------------------------------------ */
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceLabel?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
  badge?: string;
  onClick?: () => void;
}

export const PricingCard = ({
  planName, description, price, priceLabel, features, buttonText,
  isPopular = false, buttonVariant = "primary", badge, onClick,
}: PricingCardProps) => (
  <div className={cn(
    "backdrop-blur-xl bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-sm w-full px-7 py-8 flex flex-col transition-all duration-300",
    "from-background/80 to-background/40 border border-border/30",
    isPopular && "relative ring-2 ring-primary/20 from-background/90 to-background/50 border-primary/30 shadow-2xl",
  )}>
    {badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-xs font-semibold text-primary whitespace-nowrap">
        {badge}
      </span>
    )}
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-foreground">{planName}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
    <div className="mb-6">
      <span className="text-3xl font-bold text-foreground">{price}</span>
      {priceLabel && <span className="text-sm font-normal text-muted-foreground ml-1">{priceLabel}</span>}
    </div>
    <hr className="border-border/20 mb-6" />
    <ul className="space-y-3 mb-8 flex-1">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <CheckIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={onClick}
      className={cn(
        "mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all",
        buttonVariant === "primary"
          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
          : "bg-muted hover:bg-muted/80 text-foreground border border-border/30",
      )}
    >
      {buttonText}
    </button>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main pricing section                                              */
/* ------------------------------------------------------------------ */
interface ModernPricingPageProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title, subtitle, plans, showAnimatedBackground = true,
}: ModernPricingPageProps) => (
  <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {showAnimatedBackground && <AnimatedBackground />}
    <div className="relative z-10 w-full py-20 px-4 md:px-6">
      <div className="text-center mb-32">
        <h1 className="hero-headline text-foreground mb-4">{title}</h1>
        <p className="body-text mx-auto max-w-xl">{subtitle}</p>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
      </div>
    </div>
  </div>
);
