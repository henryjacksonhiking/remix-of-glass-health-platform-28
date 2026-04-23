import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Global mouse tracking for glass-card spotlight effect.
// Approximates the SpotlightCard component on every .glass-panel / .glass-card
// site-wide without requiring per-page JSX changes.
if (typeof window !== "undefined") {
  let raf = 0;
  window.addEventListener(
    "pointermove",
    (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const card = target.closest<HTMLElement>(
          ".glass-panel, .glass-card, [class*='glass-panel']"
        );
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    },
    { passive: true }
  );
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
