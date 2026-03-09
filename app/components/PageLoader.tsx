"use client";

import { useState, useEffect, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps { onDone: () => void; }

const PageLoader: FC<PageLoaderProps> = ({ onDone }) => {
  const [pct, setPct]   = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 8 + 3;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 700);
        }, 300);
      }
      setPct(Math.floor(v));
    }, 80);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed", inset: 0,
            background: "#d8e8f4",
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "6vh 6vw",
            zIndex: 9999,
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-label, sans-serif)",
                fontSize: 9, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#a8c0d8",
              }}
            >
              Portfolio — Loading
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "var(--font-label, sans-serif)",
                fontSize: 9, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#a8c0d8",
              }}
            >
              PHP / Laravel Dev
            </motion.p>
          </div>

          {/* Giant counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ position: "relative" }}
          >
            <div style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(120px, 22vw, 280px)",
              lineHeight: 0.85,
              color: "#0d1520",
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}>
              {String(pct).padStart(2, "0")}
            </div>
            <div style={{
              position: "absolute", bottom: -2, left: 0, right: 0,
              height: 1, background: "#0d1520",
              transformOrigin: "left",
              transform: `scaleX(${pct / 100})`,
              transition: "transform 0.1s linear",
            }} />
          </motion.div>

          {/* Bottom */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "var(--font-body, serif)",
                fontStyle: "italic",
                fontSize: 13, color: "#a8c0d8",
              }}
            >
              PHP · Laravel · React · Flutter · MySQL · Figma
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9, letterSpacing: "0.12em",
                color: "#a8c0d8",
              }}
            >
              {pct === 100 ? "READY" : "INITIALIZING"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
