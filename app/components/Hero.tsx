"use client";

import { FC, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const STACK = ["PHP", "Laravel", "MySQL", "JavaScript", "React.js", "Flutter", "Java", "Git", "Figma", "REST APIs", "Firebase", "SQL Server"];

const Hero: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const [year] = useState(new Date().getFullYear());
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "14vh 6vw 8vh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #cfc4a0",
      }}
    >
      {/* Top meta row */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            position: "absolute", top: "14vh", left: "6vw", right: "6vw",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}
        >
          <span style={{
            fontFamily: "var(--font-label, sans-serif)",
            fontSize: 9, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#3a5880",
          }}>
            PHP · Laravel · React · Flutter Developer
          </span>
          <span style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 9, color: "#3a5880", letterSpacing: "0.12em",
          }}>
            {year} — Continue Journeys
          </span>
        </motion.div>
      )}

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* Giant headline */}
        <div style={{ overflow: "hidden", marginBottom: 0 }}>
          <motion.h1
            style={{ y: headY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(80px, 15vw, 220px)",
              lineHeight: 0.88,
              letterSpacing: "0.01em",
              color: "#100e04",
              display: "block",
            }}>
              Building
            </span>
            <span style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(80px, 15vw, 220px)",
              lineHeight: 0.88,
              letterSpacing: "0.01em",
              color: "#100e04",
              display: "flex",
              alignItems: "baseline",
              gap: "0.12em",
            }}>
              The
              <span style={{ color: "#b87333" }}>.</span>
            </span>
            <span style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(80px, 15vw, 220px)",
              lineHeight: 0.88,
              letterSpacing: "0.01em",
              color: "#100e04",
              display: "block",
            }}>
              Web
            </span>
          </motion.h1>
        </div>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6vw",
            marginTop: "6vh",
            paddingTop: "4vh",
            borderTop: "1px solid #cfc4a0",
          }}
        >
          <p style={{
            fontFamily: "var(--font-body, serif)",
            fontStyle: "italic",
            fontSize: "clamp(15px, 1.5vw, 19px)",
            color: "#6a88a8",
            lineHeight: 1.75,
            maxWidth: 400,
          }}>
            PHP & Laravel specialist with 4+ years building robust backends, RESTful APIs, and polished interfaces — from database design to Flutter mobile apps.
          </p>
          <div>
            <p style={{
              fontFamily: "var(--font-label, sans-serif)",
              fontSize: 9, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#3a5880",
              marginBottom: 12,
            }}>
              Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {STACK.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 10, letterSpacing: "0.06em",
                    color: "#6a88a8",
                    padding: "3px 10px",
                    border: "1px solid #cfc4a0",
                    background: "#111d2e",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "4vh", borderTop: "1px solid #cfc4a0",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/portfolio" data-cursor>
            <motion.span
              whileHover={{ background: "#100e04", color: "#f4edd8" }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "10px 24px",
                background: "#b87333",
                fontFamily: "var(--font-label, sans-serif)",
                fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#f4edd8",
                transition: "all 0.2s",
              }}
            >
              View Work
            </motion.span>
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor>
            <motion.span
              whileHover={{ borderColor: "#100e04", color: "#100e04" }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "10px 24px",
                border: "1px solid #cfc4a0",
                fontFamily: "var(--font-label, sans-serif)",
                fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6a88a8",
                transition: "all 0.2s",
              }}
            >
              Resume PDF
            </motion.span>
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: 1, height: 28, background: "#a8966e",
            }}
          />
          <span style={{
            fontFamily: "var(--font-label, sans-serif)",
            fontSize: 8, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#3a5880",
            writingMode: "vertical-rl",
          }}>
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
