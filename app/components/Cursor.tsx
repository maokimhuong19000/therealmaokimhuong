"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setDot({ x: e.clientX, y: e.clientY });
      setRing(prev => ({
        x: prev.x + (e.clientX - prev.x) * 0.12,
        y: prev.y + (e.clientY - prev.y) * 0.12,
      }));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 h-2 w-2
                   rounded-full bg-white"
        style={{
          transform: `translate(${dot.x - 4}px, ${dot.y - 4}px)`,
        }}
      />

      <div
        className="pointer-events-none fixed z-40 h-10 w-10
                   rounded-full border border-white/40"
        style={{
          transform: `translate(${ring.x - 20}px, ${ring.y - 20}px)`,
        }}
      />
    </>
  );
}
