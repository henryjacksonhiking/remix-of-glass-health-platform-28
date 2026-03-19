"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  opacity?: number;
  color?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  targetOpacity: number;
  fadeSpeed: number;
}

const resolveColor = (input: string): string => {
  if (typeof window === "undefined") return input;
  if (!input.startsWith("var(")) return input;

  const varName = input.slice(4, -1).trim();
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

  if (!value) return "#ffffff";
  if (value.includes(" ") && !value.startsWith("rgb") && !value.startsWith("hsl")) {
    return `hsl(${value})`;
  }

  return value;
};

const createParticle = (
  width: number,
  height: number,
  size: number,
  minSize: number,
  speed: number,
  opacity: number
): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: minSize + Math.random() * (size - minSize),
  speedX: (Math.random() - 0.5) * speed,
  speedY: (Math.random() - 0.5) * speed,
  opacity: Math.random() * opacity,
  targetOpacity: Math.random() * opacity,
  fadeSpeed: 0.005 + Math.random() * 0.015,
});

export function Sparkles({
  className,
  size = 1.2,
  minSize = 0.4,
  density = 400,
  speed = 0.8,
  opacity = 0.6,
  color = "#ffffff",
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fillColor = resolveColor(color);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const count = Math.max(60, Math.floor((rect.width * rect.height) / (1000000 / density)));
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(rect.width, rect.height, size, minSize, speed, opacity)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const particle of particlesRef.current) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        if (particle.opacity < particle.targetOpacity) particle.opacity += particle.fadeSpeed;
        else particle.opacity -= particle.fadeSpeed;

        if (Math.abs(particle.opacity - particle.targetOpacity) < 0.02) {
          particle.targetOpacity = Math.random() * opacity;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = fillColor;
        ctx.globalAlpha = Math.max(0.08, Math.min(1, particle.opacity));
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [size, minSize, density, speed, opacity, color]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} />;
}
