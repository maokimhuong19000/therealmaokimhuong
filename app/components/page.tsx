"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "../components/Nav";
import TransitionWrapper from "../components/TransitionWrapper";

const SKILL_GROUPS = [
  {
    label: "The Logic",
    color: "#b87333",
    skills: [
      { name: "PHP",               level: "Advanced",     pct: 95 },
      { name: "Laravel",           level: "Advanced",     pct: 95 },
      { name: "Java / Spring Boot",level: "Intermediate", pct: 65 },
      { name: ".NET Framework",    level: "Intermediate", pct: 60 },
      { name: "Problem Solving",   level: "Advanced",     pct: 95 },
    ],
  },
  {
    label: "The Interface",
    color: "#1a5c9a",
    skills: [
      { name: "HTML5",         level: "Advanced",     pct: 95 },
      { name: "CSS3",          level: "Advanced",     pct: 90 },
      { name: "JavaScript",    level: "Advanced",     pct: 88 },
      { name: "jQuery / AJAX", level: "Advanced",     pct: 85 },
      { name: "React.js",      level: "Intermediate", pct: 70 },
      { name: "UI/UX Design",  level: "Advanced",     pct: 90 },
    ],
  },
  {
    label: "Mobile",
    color: "#2a7a5a",
    skills: [
      { name: "Flutter", level: "Intermediate", pct: 65 },
    ],
  },
  {
    label: "Databases",
    color: "#7a5520",
    skills: [
      { name: "MySQL",      level: "Advanced", pct: 90 },
      { name: "SQL Server", level: "Advanced", pct: 85 },
    ],
  },
  {
    label: "APIs & Services",
    color: "#5a3090",
    skills: [
      { name: "RESTful APIs", level: "Advanced",     pct: 95 },
      { name: "Firebase",     level: "Intermediate", pct: 70 },
    ],
  },
  {
    label: "Tools & Flow",
    color: "#3d3020",
    skills: [
      { name: "Git / GitHub",   level: "Advanced",     pct: 90 },
      { name: "CI/CD",          level: "Intermediate", pct: 65 },
      { name: "Web Deployment", level: "Advanced",     pct: 85 },
      { name: "Figma",          level: "Advanced",     pct: 90 },
      { name: "Sketch",         level: "Intermediate", pct: 70 },
      { name: "Adobe XD",       level: "Intermediate", pct: 70 },
    ],
  },
];

export default function AboutPage(): ReactNode {
  return (
    <main style={{ background: "#f4edd8", minHeight: "100vh" }}>
      <Nav />
      <TransitionWrapper>
        <div style={{ padding: "14vh 0 12vh" }}>

          {/* Header */}
          <div style={{ padding: "0 6vw 8vh", marginBottom: "8vh", borderBottom: "1px solid #cfc4a0" }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontFamily: "var(--font-label)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a8966e", marginBottom: 16 }}
            >
              Skills & Background
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 10vw, 148px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "#1e1608" }}
            >
              15<span style={{ color: "#b87333" }}>+</span> Skills<span style={{ color: "#b87333" }}>.</span><br />
              4<span style={{ color: "#b87333" }}>+</span> Years<span style={{ color: "#b87333" }}>.</span>
            </motion.h1>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ padding: "0 6vw", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#cfc4a0", marginBottom: "8vh" }}
          >
            {[
              { val: "4+",  label: "Years Journey" },
              { val: "15+", label: "Tech Skills" },
              { val: "6",   label: "Skill Categories" },
            ].map(({ val, label }) => (
              <div key={label} style={{ background: "#f4edd8", padding: "32px 24px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 64px)", color: "#1e1608", lineHeight: 0.9, marginBottom: 8 }}>{val}</p>
                <p style={{ fontFamily: "var(--font-label)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a8966e" }}>{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Skill groups grid */}
          <div style={{ padding: "0 6vw", marginBottom: "10vh" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 36, borderBottom: "1px solid #cfc4a0", paddingBottom: 16 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "0.04em", color: "#1e1608" }}>Technical Skills</h2>
              <div style={{ width: 6, height: 6, background: "#b87333", alignSelf: "center" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 1, background: "#cfc4a0" }}>
              {SKILL_GROUPS.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.07 }}
                  viewport={{ once: true }}
                  style={{ background: "#f4edd8", padding: "28px 24px" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 8, height: 8, background: group.color }} />
                    <p style={{ fontFamily: "var(--font-label)", fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: group.color }}>
                      {group.label}
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {group.skills.map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: gi * 0.04 + si * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, color: "#1e1608" }}>{skill.name}</span>
                          <span style={{ fontFamily: "var(--font-label)", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: skill.level === "Advanced" ? group.color : "#a8966e" }}>
                            {skill.level}
                          </span>
                        </div>
                        <div style={{ height: 2, background: "#e4d8b8", position: "relative" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.pct}%` }}
                            transition={{ delay: gi * 0.04 + si * 0.05 + 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{ position: "absolute", top: 0, left: 0, height: "100%", background: group.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ padding: "0 6vw", textAlign: "center" }}>
            <Link href="/contact" data-cursor>
              <motion.span
                whileHover={{ background: "#0d1520", color: "#f4edd8" }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  padding: "14px 40px", background: "#b87333",
                  fontFamily: "var(--font-label)", fontSize: 9,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#f4edd8", transition: "all 0.2s",
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
