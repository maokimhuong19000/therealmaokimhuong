"use client";
// SVG-filter liquid blob — used on contact page
export default function LiquidBackground() {
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="liquid">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="3" seed="5">
              <animate attributeName="baseFrequency" values="0.012 0.008;0.016 0.012;0.012 0.008" dur="18s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="60" />
          </filter>
        </defs>
      </svg>

      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          width: "60vw", height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          top: "10%", left: "20%",
          filter: "url(#liquid)",
          animation: "blob 20s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(40px,-30px) scale(1.05); }
          66%       { transform: translate(-20px,20px) scale(0.97); }
        }
      `}</style>
    </>
  );
}
