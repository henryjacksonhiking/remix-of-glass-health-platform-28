"use client";
import React, { useEffect, useRef } from "react";

interface DataStreamVisualProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  progress: number;
  speed: number;
  pathIndex: number;
  size: number;
  opacity: number;
  direction: "in" | "out";
}

interface PathPoint {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
}

const DataStreamVisual: React.FC<DataStreamVisualProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    const teal = { r: 0, g: 222, b: 196 };

    const getPathPoints = (w: number, h: number): { inputs: PathPoint[]; outputs: PathPoint[] } => {
      const cx = w / 2;
      const cy = h / 2;
      const inputs: PathPoint[] = [
        { sx: 0, sy: h * 0.18, ex: cx, ey: cy },          // PMS
        { sx: 0, sy: h * 0.82, ex: cx, ey: cy },          // Comms
        { sx: w * 0.25, sy: 0, ex: cx, ey: cy },           // Custom
        { sx: w * 0.75, sy: 0, ex: cx, ey: cy },           // EHR
      ];
      const outputs: PathPoint[] = [
        { sx: cx, sy: cy, ex: w, ey: h * 0.25 },           // Analytics
        { sx: cx, sy: cy, ex: w, ey: h * 0.75 },           // Payments
        { sx: cx, sy: cy, ex: w * 0.5, ey: h },            // Insights
      ];
      return { inputs, outputs };
    };

    const labels = {
      inputs: ["PMS", "Comms", "Custom", "EHR"],
      outputs: ["Analytics", "Payments", "Insights"],
    };

    const spawnParticle = (pathIndex: number, direction: "in" | "out"): Particle => ({
      x: 0, y: 0,
      progress: 0,
      speed: 0.003 + Math.random() * 0.004,
      pathIndex,
      size: 1.5 + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5,
      direction,
    });

    const init = () => {
      particles = [];
      const { inputs, outputs } = getPathPoints(canvas.offsetWidth, canvas.offsetHeight);
      for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < 6; j++) {
          const p = spawnParticle(i, "in");
          p.progress = Math.random();
          particles.push(p);
        }
      }
      for (let i = 0; i < outputs.length; i++) {
        for (let j = 0; j < 5; j++) {
          const p = spawnParticle(i, "out");
          p.progress = Math.random();
          particles.push(p);
        }
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w * 3, h * 3);
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);

      const { inputs, outputs } = getPathPoints(w, h);
      const cx = w / 2;
      const cy = h / 2;
      const allPaths = [...inputs, ...outputs];

      // Draw paths (glowing lines)
      allPaths.forEach((p) => {
        ctx.beginPath();
        ctx.moveTo(p.sx, p.sy);
        // Curved path through control point
        const cpx = (p.sx + p.ex) / 2;
        const cpy = (p.sy + p.ey) / 2;
        ctx.quadraticCurveTo(cpx + (Math.random() * 0.01 - 0.005), cpy, p.ex, p.ey);
        ctx.strokeStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.08)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach((particle) => {
        const paths = particle.direction === "in" ? inputs : outputs;
        const path = paths[particle.pathIndex];
        if (!path) return;

        particle.progress += particle.speed;
        if (particle.progress > 1) particle.progress = 0;

        const t = particle.progress;
        const cpx = (path.sx + path.ex) / 2;
        const cpy = (path.sy + path.ey) / 2;
        // Quadratic bezier
        const mt = 1 - t;
        particle.x = mt * mt * path.sx + 2 * mt * t * cpx + t * t * path.ex;
        particle.y = mt * mt * path.sy + 2 * mt * t * cpy + t * t * path.ey;

        // Fade in/out at edges
        const edgeFade = Math.min(t * 4, (1 - t) * 4, 1);

        // Glow
        const grad = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 4);
        grad.addColorStop(0, `rgba(${teal.r}, ${teal.g}, ${teal.b}, ${particle.opacity * edgeFade * 0.6})`);
        grad.addColorStop(1, `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0)`);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, ${particle.opacity * edgeFade})`;
        ctx.fill();
      });

      // Center node - Borna hub
      const coreRadius = Math.min(w, h) * 0.09;

      // Glow behind center
      const cGrad = ctx.createRadialGradient(cx, cy, coreRadius * 0.3, cx, cy, coreRadius * 2.5);
      cGrad.addColorStop(0, `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.15)`);
      cGrad.addColorStop(1, `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = cGrad;
      ctx.fill();

      // Core circle with gradient fill
      const coreFill = ctx.createRadialGradient(cx, cy - coreRadius * 0.3, 0, cx, cy, coreRadius);
      coreFill.addColorStop(0, `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.2)`);
      coreFill.addColorStop(1, `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.05)`);
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreFill;
      ctx.fill();
      ctx.strokeStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.6)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Center text
      ctx.fillStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.9)`;
      ctx.font = `600 ${Math.max(12, coreRadius * 0.5)}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Borna", cx, cy);

      // Input labels
      inputs.forEach((p, i) => {
        ctx.fillStyle = `rgba(180, 200, 220, 0.7)`;
        ctx.font = `500 ${Math.max(10, Math.min(w, h) * 0.032)}px Inter, sans-serif`;
        ctx.textAlign = p.sx < cx ? "left" : "center";
        const lx = p.sx < cx ? p.sx + 8 : p.sx;
        const ly = p.sy < cy ? p.sy + 14 : p.sy - 8;
        ctx.fillText(labels.inputs[i], lx, ly);
      });

      // Output labels
      outputs.forEach((p, i) => {
        ctx.fillStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.6)`;
        ctx.font = `500 ${Math.max(10, Math.min(w, h) * 0.032)}px Inter, sans-serif`;
        ctx.textAlign = p.ex > cx ? "right" : "center";
        const lx = p.ex > cx ? p.ex - 8 : p.ex;
        const ly = p.ey > cy ? p.ey - 8 : p.ey + 14;
        ctx.fillText(labels.outputs[i], lx, ly);
      });

      // Small endpoint dots
      [...inputs, ...outputs].forEach((p) => {
        [{ x: p.sx, y: p.sy }, { x: p.ex, y: p.ey }].forEach(pt => {
          if (Math.abs(pt.x - cx) < 5 && Math.abs(pt.y - cy) < 5) return;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${teal.r}, ${teal.g}, ${teal.b}, 0.4)`;
          ctx.fill();
        });
      });

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas.parentElement!);
    resize();
    init();
    draw();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={`relative w-full ${className}`} style={{ height: 320 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default DataStreamVisual;
