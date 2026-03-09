"use client";
import { useEffect, useRef } from "react";

// Slow-moving radial gradient mesh — pure CSS-in-canvas, no libs
export default function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let raf: number;

    const tick = () => {
      frame++;
      const t = frame * 0.003;
      const x1 = 50 + Math.sin(t * 0.7) * 20;
      const y1 = 50 + Math.cos(t * 0.5) * 20;
      const x2 = 50 + Math.sin(t * 0.4 + 2) * 25;
      const y2 = 50 + Math.cos(t * 0.6 + 1) * 15;

      el.style.background = `
        radial-gradient(ellipse 60% 40% at ${x1}% ${y1}%, rgba(201,169,110,0.04) 0%, transparent 70%),
        radial-gradient(ellipse 50% 60% at ${x2}% ${y2}%, rgba(138,100,180,0.03) 0%, transparent 70%),
        var(--bg)
      `;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed", inset: 0,
        zIndex: 0, pointerEvents: "none",
        transition: "background 0.5s ease",
      }}
    />
  );
}
