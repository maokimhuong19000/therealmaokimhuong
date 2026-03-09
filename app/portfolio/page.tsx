"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "../components/Nav";
import TransitionWrapper from "../components/TransitionWrapper";

const PROJECTS = [
  { id: "01", name: "Laravel API Platform",   type: "backend",  year: "2024", desc: "Scalable RESTful API — auth, roles, Firebase integration, optimized MySQL queries.", tags: ["PHP","Laravel","MySQL","REST API","Firebase"], url: "#" },
  { id: "02", name: "Flutter Mobile App",     type: "mobile",   year: "2024", desc: "Cross-platform iOS & Android app with Firebase backend and real-time data sync.",      tags: ["Flutter","Firebase","Dart"],                  url: "#" },
  { id: "03", name: "Web Admin Dashboard",    type: "fullstack",year: "2023", desc: "Full-featured admin panel — React frontend, Laravel backend, MySQL database.",          tags: ["React.js","Laravel","MySQL","JavaScript"],     url: "#" },
  { id: "04", name: "E-Commerce Platform",    type: "fullstack",year: "2023", desc: "Complete e-commerce system — catalog, cart, payment integration, order management.",    tags: ["PHP","Laravel","JavaScript","MySQL"],          url: "#" },
  { id: "05", name: "Company Management App", type: "backend",  year: "2023", desc: "Internal ERP-style system with role-based access, reporting, and SQL Server backend.",   tags: ["PHP","SQL Server",".NET","REST API"],          url: "#" },
  { id: "06", name: "UI/UX Design System",    type: "design",   year: "2022", desc: "End-to-end design system — wireframes, components, and prototypes built in Figma.",    tags: ["Figma","Adobe XD","UI/UX"],                   url: "#" },
  { id: "07", name: "Spring Boot Service",    type: "backend",  year: "2022", desc: "Java microservice with Spring Boot — REST endpoints, MySQL, deployed on Linux server.", tags: ["Java","Spring Boot","MySQL","REST API"],       url: "#" },
  { id: "08", name: "CI/CD Deployment Setup", type: "tooling",  year: "2022", desc: "Automated deployment pipeline with GitHub Actions, server config, and web hosting.",    tags: ["Git","GitHub Actions","CI/CD","Linux"],        url: "#" },
];

const FILTERS = ["All", "Fullstack", "Backend", "Mobile", "Design", "Tooling"];

export default function PortfolioPage(): ReactNode {
  const [active, setActive] = useState("All");
  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === active.toLowerCase());

  return (
    <main style={{ background: "#f4edd8", minHeight: "100vh" }}>
      <Nav />
      <TransitionWrapper>
        <div style={{ padding: "14vh 6vw 12vh" }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{
              fontFamily: "var(--font-label)", fontSize: 9,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#a8966e", marginBottom: 12,
            }}>
              Selected work
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 12vw, 160px)",
              lineHeight: 0.88, letterSpacing: "0.02em",
              color: "#1e1608", marginBottom: "6vh",
            }}>
              All Projects
            </h1>
          </motion.div>

          {/* Filter row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            style={{
              display: "flex", gap: 0,
              borderTop: "1px solid #cfc4a0",
              borderBottom: "1px solid #cfc4a0",
              marginBottom: "6vh",
            }}
          >
            {FILTERS.map((f, i) => (
              <button
                key={f}
                data-cursor
                onClick={() => setActive(f)}
                style={{
                  fontFamily: "var(--font-label)", fontSize: 9,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "14px 20px",
                  borderRight: i < FILTERS.length - 1 ? "1px solid #cfc4a0" : "none",
                  background: active === f ? "#100e04" : "transparent",
                  color: active === f ? "#f4edd8" : "#a8966e",
                  cursor: "none", transition: "all 0.18s",
                }}
              >
                {f}
              </button>
            ))}
            <span style={{
              marginLeft: "auto",
              fontFamily: "var(--font-mono)", fontSize: 9,
              color: "#a8966e", alignSelf: "center",
              padding: "0 16px",
            }}>
              {filtered.length} projects
            </span>
          </motion.div>

          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr 180px 60px",
            gap: "2vw", paddingBottom: 10,
            borderBottom: "1px solid #cfc4a0",
            marginBottom: 0,
          }}>
            {["No.", "Project", "Stack", "Year"].map((h) => (
              <span key={h} style={{
                fontFamily: "var(--font-label)", fontSize: 8,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "#a8966e",
              }}>
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{ borderBottom: "1px solid #cfc4a0" }}
                >
                  <Link href={p.url} data-cursor>
                    <motion.div
                      whileHover={{ background: "#ede4cc" }}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "48px 1fr 180px 60px",
                        gap: "2vw",
                        padding: "22px 0",
                        alignItems: "center",
                        cursor: "none",
                        transition: "background 0.15s",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#a8966e" }}>{p.id}</span>
                      <div>
                        <p style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(18px, 1.8vw, 24px)",
                          letterSpacing: "0.04em", color: "#1e1608",
                          marginBottom: 4, lineHeight: 1,
                        }}>
                          {p.name}
                        </p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#6b5c3e", lineHeight: 1.6 }}>
                          {p.desc}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                        {p.tags.slice(0, 2).map((t) => (
                          <span key={t} style={{
                            fontFamily: "var(--font-mono)", fontSize: 8,
                            color: "#a8966e", padding: "2px 6px",
                            border: "1px solid #cfc4a0", background: "#ede4cc",
                          }}>{t}</span>
                        ))}
                      </div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#a8966e" }}>{p.year}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </TransitionWrapper>
    </main>
  );
}
