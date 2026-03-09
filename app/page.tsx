"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageLoader from "./components/PageLoader";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

/* ── Data ─────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: "01", name: "Laravel API Platform",
    desc: "Scalable RESTful API with Laravel — auth, caching, role management, Firebase integration.",
    tags: ["PHP", "Laravel", "MySQL", "REST API"],
    year: "2024", url: "#",
  },
  {
    id: "02", name: "Flutter Mobile App",
    desc: "Cross-platform mobile application with Firebase backend, real-time data sync, clean UI.",
    tags: ["Flutter", "Firebase", "Dart"],
    year: "2024", url: "#",
  },
  {
    id: "03", name: "Web Admin Dashboard",
    desc: "Full-featured admin panel with React frontend and Laravel backend, MySQL database.",
    tags: ["React.js", "Laravel", "MySQL", "JavaScript"],
    year: "2023", url: "#",
  },
  {
    id: "04", name: "E-Commerce Platform",
    desc: "Complete e-commerce system — product catalog, cart, payment integration, order management.",
    tags: ["PHP", "Laravel", "JavaScript", "MySQL"],
    year: "2023", url: "#",
  },
];

const TICKER_ITEMS = [
  "PHP", "·", "Laravel", "·", "MySQL", "·", "JavaScript", "·",
  "React.js", "·", "Flutter", "·", "Java", "·", "Spring Boot", "·",
  "REST APIs", "·", "Firebase", "·", "Figma", "·", "Git", "·",
  "HTML5", "·", "CSS3", "·", "SQL Server", "·", ".NET", "·",
];

/* ── Section label ─────────────────────────────────────────────────────── */
function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 20,
      borderBottom: "1px solid #cfc4a0",
      paddingBottom: 16, marginBottom: 48,
    }}>
      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 10, color: "#a8966e", letterSpacing: "0.12em",
      }}>
        {num}
      </span>
      <h2 style={{
        fontFamily: "var(--font-display, sans-serif)",
        fontSize: "clamp(32px, 5vw, 64px)",
        letterSpacing: "0.04em",
        color: "#100e04", lineHeight: 1,
        flex: 1,
      }}>
        {title}
      </h2>
      <div style={{
        width: 6, height: 6, background: "#111d2e",
        alignSelf: "center",
      }} />
    </div>
  );
}

/* ── Project card ─────────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.7 }}
      viewport={{ once: true, margin: "-40px" }}
      style={{
        borderBottom: "1px solid #cfc4a0",
        padding: "28px 0",
        display: "grid",
        gridTemplateColumns: "48px 1fr auto",
        gap: "2vw",
        alignItems: "start",
        cursor: "none",
      }}
    >
      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 10, color: "#a8966e", letterSpacing: "0.1em",
        paddingTop: 4,
      }}>
        {project.id}
      </span>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <motion.h3
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(20px, 2.2vw, 30px)",
              letterSpacing: "0.04em",
              color: hovered ? "#b87333" : "#100e04",
              transition: "color 0.2s",
              lineHeight: 1,
            }}
          >
            {project.name}
          </motion.h3>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            style={{
              fontFamily: "var(--font-label, sans-serif)",
              fontSize: 9, letterSpacing: "0.15em",
              color: "#b87333", textTransform: "uppercase",
            }}
          >
            View →
          </motion.span>
        </div>
        <p style={{
          fontFamily: "var(--font-body, serif)",
          fontSize: 13, color: "#6b5c3e", lineHeight: 1.7,
          marginBottom: 12,
        }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "var(--font-mono, monospace)", fontSize: 9,
              color: "#a8966e", padding: "2px 8px",
              border: "1px solid #cfc4a0",
              background: "#ede4cc",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 10, color: "#a8966e",
        paddingTop: 4,
      }}>
        {project.year}
      </span>
    </motion.div>
  );
}

/* ── Home ─────────────────────────────────────────────────────────────── */
export default function Home(): ReactNode {
  const [loaded, setLoaded] = useState(false);

  return (
    <main style={{ background: "#f4edd8", minHeight: "100vh" }}>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          >
            <PageLoader onDone={() => setLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {loaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Nav />
          <Hero />

          {/* ── Ticker ── */}
          <div style={{
            borderBottom: "1px solid #cfc4a0",
            background: "#0d1520",
            overflow: "hidden", height: 40,
            display: "flex", alignItems: "center",
          }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              style={{ display: "flex", gap: 28, whiteSpace: "nowrap" }}
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-label, sans-serif)",
                  fontSize: 9, letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: item === "·" ? "#b87333" : "#3d3020",
                }}>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Projects ── */}
          <section style={{ padding: "10vh 6vw" }}>
            <SectionHead num="01" title="SELECTED WORK" />
            <div>
              {PROJECTS.map((p, i) => (
                <Link key={p.id} href={p.url} data-cursor>
                  <ProjectCard project={p} index={i} />
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 40, display: "flex", justifyContent: "flex-end" }}>
              <Link href="/portfolio" data-cursor>
                <motion.span
                  whileHover={{ background: "#111d2e", color: "#d8e8f4", borderColor: "#b87333" }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "10px 24px",
                    border: "1px solid #100e04",
                    fontFamily: "var(--font-label, sans-serif)",
                    fontSize: 9, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#100e04",
                    transition: "all 0.2s",
                  }}
                >
                  All Projects →
                </motion.span>
              </Link>
            </div>
          </section>

          {/* ── Stats ── */}
          <section style={{
            padding: "8vh 6vw",
            background: "#0d1520",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
          }}>
            {[
              { val: "4+",   label: "Years experience" },
              { val: "60+",  label: "Repositories" },
              { val: "1M+",  label: "Lines shipped" },
              { val: "99%",  label: "Uptime SLA" },
            ].map(({ val, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                style={{
                  padding: "40px 32px",
                  borderRight: i < 3 ? "1px solid #1e1608" : "none",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "clamp(48px, 5vw, 72px)",
                  color: "#d8e8f4", lineHeight: 0.9,
                  letterSpacing: "0.02em",
                  marginBottom: 12,
                }}>
                  {val}
                </p>
                <p style={{
                  fontFamily: "var(--font-label, sans-serif)",
                  fontSize: 9, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "#3d3020",
                }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </section>

          {/* ── Services preview ── */}
          <section style={{ padding: "10vh 6vw" }}>
            <SectionHead num="02" title="WHAT I BUILD" />
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 1, background: "#cfc4a0",
            }}>
              {[
                { title: "Backend & APIs",    desc: "PHP, Laravel, MySQL. RESTful APIs, auth, database architecture." },
                { title: "Frontend & UI",    desc: "React.js, HTML5/CSS3/JS. Pixel-perfect, responsive interfaces." },
                { title: "Mobile Apps",      desc: "Flutter cross-platform apps for iOS & Android with Firebase." },
                { title: "UI/UX Design",     desc: "Figma, Sketch, Adobe XD. Wireframes to polished design systems." },
              ].map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    background: "#f4edd8",
                    padding: "32px 28px",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-label, sans-serif)",
                    fontSize: 9, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#a8966e",
                    marginBottom: 8,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    color: "#100e04", letterSpacing: "0.04em",
                    marginBottom: 12, lineHeight: 1,
                  }}>
                    {title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body, serif)",
                    fontSize: 12, color: "#6b5c3e", lineHeight: 1.7,
                  }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 2 }}>
              <Link href="/service" data-cursor>
                <motion.div
                  whileHover={{ background: "#0d1520" }}
                  style={{
                    padding: "20px 28px",
                    background: "#ede4cc",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-label, sans-serif)",
                    fontSize: 9, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#6b5c3e",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#f4edd8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#6b5c3e"; }}
                  >
                    View all services
                  </span>
                  <span style={{ color: "#b87333", fontSize: 18 }}>→</span>
                </motion.div>
              </Link>
            </div>
          </section>

          {/* ── CTA ── */}
          <section style={{
            padding: "12vh 6vw",
            background: "#111d2e",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "4vw",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-label, sans-serif)",
                fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(245,242,237,0.5)",
                marginBottom: 16,
              }}>
                Open to work
              </p>
              <h2 style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 0.88, letterSpacing: "0.02em",
                color: "#d8e8f4",
              }}>
                Let's Build<br />Something.
              </h2>
            </div>
            <Link href="/contact" data-cursor>
              <motion.span
                whileHover={{ background: "#b87333", color: "#f4edd8" }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "14px 32px",
                  border: "1px solid rgba(245,242,237,0.4)",
                  fontFamily: "var(--font-label, sans-serif)",
                  fontSize: 9, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "#d8e8f4",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                Get In Touch
              </motion.span>
            </Link>
          </section>

          {/* ── Footer ── */}
          <footer style={{
            padding: "24px 6vw",
            borderTop: "1px solid #cfc4a0",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 9, color: "#a8966e",
            }}>
              © {new Date().getFullYear()} — All rights reserved
            </span>
            <div style={{ display: "flex", gap: 32 }}>
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <motion.a
                  key={s} href="#" data-cursor
                  whileHover={{ color: "#b87333" }}
                  style={{
                    fontFamily: "var(--font-label, sans-serif)",
                    fontSize: 9, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#a8966e",
                    transition: "color 0.2s",
                  }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
