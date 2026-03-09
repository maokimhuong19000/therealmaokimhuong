"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/",          label: "Home",      num: "01" },
  { href: "/portfolio", label: "Work",      num: "02" },
  { href: "/about",     label: "About",     num: "03" },
  { href: "/service",   label: "Services",  num: "04" },
  { href: "/contact",   label: "Contact",   num: "05" },
];

export default function AnimatedMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nav bar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 1000, padding: "28px 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        mixBlendMode: "normal",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 300,
          color: "var(--ivory)", textDecoration: "none", letterSpacing: "0.06em",
        }}>
          AM
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(o => !o)}
          data-cursor="hover"
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", cursor: "none",
            display: "flex", flexDirection: "column",
            gap: 5, padding: 4,
          }}
        >
          {[0, 1].map(i => (
            <motion.span
              key={i}
              animate={open
                ? { rotate: i === 0 ? 45 : -45, y: i === 0 ? 7 : -7 }
                : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block", width: 28, height: 1,
                background: "var(--ivory)", transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              background: "var(--surface)",
              display: "flex", alignItems: "center",
              padding: "0 8vw",
            }}
          >
            {/* Links */}
            <div style={{ flex: 1 }}>
              {LINKS.map((link, i) => (
                <div key={link.href} style={{ overflow: "hidden", marginBottom: 8 }}>
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      data-cursor="hover"
                      style={{ display: "flex", alignItems: "baseline", gap: 20, textDecoration: "none" }}
                    >
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 10,
                        color: "var(--gold)", letterSpacing: "0.2em",
                        minWidth: 28,
                      }}>
                        {link.num}
                      </span>
                      <motion.span
                        whileHover={{ x: 14, color: "var(--gold)" }}
                        transition={{ duration: 0.3 }}
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(40px, 7vw, 96px)",
                          fontWeight: 300, color: "var(--ivory)",
                          lineHeight: 1.05, letterSpacing: "-0.02em",
                          display: "block",
                        }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Side info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: "flex", flexDirection: "column", gap: 24,
                alignSelf: "flex-end", paddingBottom: "8vh",
              }}
            >
              {["Twitter", "Instagram", "LinkedIn"].map(s => (
                <a key={s} href="#" data-cursor="hover"
                  style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    letterSpacing: "0.25em", color: "var(--subtle)",
                    textDecoration: "none", textTransform: "uppercase",
                  }}
                >
                  {s}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
