import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.15, staggerDelay = 100) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.querySelectorAll(".animate-on-scroll").forEach((child) => {
        child.classList.add("animate-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".animate-on-scroll");
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add("animate-in"), i * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, staggerDelay]);

  return ref;
}
