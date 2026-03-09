"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "../components/Nav";
import TransitionWrapper from "../components/TransitionWrapper";

const TIMELINE = [
  {
    year: "2025-Present",
    role: "Fullstack Web Developer",
    co: "iOne Cambodia",
    note: "Building core product 0→1",
  },
  {
    year: "2024-2025",
    role: "Fullstack Web Developer",
    co: "BluePrint Technology Company",
    note: "10+ client projects",
  },
  {
    year: "2023-2024",
    role: "Web Developer Intern",
    co: "INKLUSIVITY TECHNOLOGY",
    note: "React, TypeScript, design systems",
  },
  {
    year: "2022-2023",
    role: "Junior Graphic Designer",
    co: "THE FLORA",
    note: "First 15 paid sites",
  },
];

const BELIEFS = [
  [
    "Ship early, iterate fast",
    "Working software beats perfect plans every time.",
  ],
  ["Code is communication", "Write for humans. Machines are flexible."],
  ["Full ownership", "I care about the whole product — not just my slice."],
  ["Performance is UX", "Slow apps lose users. Every ms counts."],
];

export default function AboutPage(): ReactNode {
  return (
    <main style={{ background: "#f5f2ed", minHeight: "100vh" }}>
      <Nav />
      <TransitionWrapper>
        <div style={{ padding: "14vh 0 12vh" }}>
          {/* Hero */}
          <div
            style={{
              padding: "0 6vw 8vh",
              marginBottom: "8vh",
              borderBottom: "1px solid #d4cfc6",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#b8b2a8",
                marginBottom: 16,
              }}
            >
              About
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(72px, 13vw, 180px)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "#0e0c0a",
              }}
            >
              Hello<span style={{ color: "#c8291a" }}>,</span>
              <br />
              World<span style={{ color: "#c8291a" }}>.</span>
            </motion.h1>
          </div>

          {/* Two-col: photo + bio */}
          <div
            style={{
              padding: "0 6vw",
              display: "grid",
              gridTemplateColumns: "340px 1fr",
              gap: "6vw",
              marginBottom: "10vh",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <img
                src="/profile.png"
                alt="Profile"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  filter: "grayscale(20%)",
                  border: "1px solid #d4cfc6",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#0e0c0a",
                  padding: "14px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#3d3935",
                  }}
                >
                  Status
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "#c8291a",
                    letterSpacing: "0.1em",
                  }}
                >
                  Open to work
                </span>
              </div>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  color: "#3d3935",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                I'm a fullstack engineer who cares equally about clean
                architecture and great user experience. 4+ years building
                products end-to-end.
              </motion.p>

              <div style={{ borderTop: "1px solid #d4cfc6", paddingTop: 28 }}>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#b8b2a8",
                    marginBottom: 20,
                  }}
                >
                  What I believe
                </p>
                {BELIEFS.map(([title, desc], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "3vw",
                      padding: "14px 0",
                      borderBottom: "1px solid #e8e3da",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontStyle: "italic",
                        fontSize: 13,
                        color: "#0e0c0a",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: "#6b6560",
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <a href="/resume.pdf" target="_blank" data-cursor>
                  <motion.span
                    whileHover={{ background: "#0e0c0a", color: "#f5f2ed" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 24px",
                      border: "1px solid #0e0c0a",
                      fontFamily: "var(--font-label)",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#0e0c0a",
                      transition: "all 0.2s",
                    }}
                  >
                    Download Resume
                  </motion.span>
                </a>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ padding: "0 6vw" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3vw, 44px)",
                  letterSpacing: "0.04em",
                  color: "#0e0c0a",
                }}
              >
                Experience
              </h2>
              <div style={{ flex: 1, height: 1, background: "#d4cfc6" }} />
            </div>

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                style={{
                  borderTop: "1px solid #d4cfc6",
                  padding: "22px 0",
                  display: "grid",
                  gridTemplateColumns: "72px 1fr 1fr",
                  gap: "3vw",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#c8291a",
                  }}
                >
                  {item.year}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(16px, 1.8vw, 22px)",
                    letterSpacing: "0.04em",
                    color: "#0e0c0a",
                  }}
                >
                  {item.role}
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontStyle: "italic",
                      fontSize: 13,
                      color: "#3d3935",
                      marginBottom: 2,
                    }}
                  >
                    {item.co}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 9,
                      color: "#b8b2a8",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid #d4cfc6" }} />
          </div>

          {/* CTA */}
          <div style={{ padding: "8vh 6vw 0", textAlign: "center" }}>
            <Link href="/contact" data-cursor>
              <motion.span
                whileHover={{ background: "#0e0c0a", color: "#f5f2ed" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 40px",
                  background: "#c8291a",
                  fontFamily: "var(--font-label)",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#f5f2ed",
                  transition: "all 0.2s",
                }}
              >
                Start a project
              </motion.span>
            </Link>
          </div>
        </div>
      </TransitionWrapper>
    </main>
  );
}
