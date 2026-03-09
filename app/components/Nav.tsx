"use client";

import { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Work",     href: "/portfolio" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

const Nav: FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: `1px solid ${scrolled ? "#cfc4a0" : "transparent"}`,
        background: scrolled ? "rgba(13,21,32,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        padding: "0 6vw",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        height: 52,
      }}
    >
      {/* Logo */}
      <Link href="/" data-cursor>
        <span style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: 22, letterSpacing: "0.06em",
          color: "#100e04",
          lineHeight: 1,
        }}>
          DEV<span style={{ color: "#b87333" }}>.</span>
        </span>
      </Link>

      {/* Links */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        {LINKS.map((link, i) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} data-cursor>
              <motion.span
                whileHover={{ color: "#b87333" }}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-label, sans-serif)",
                  fontSize: 9, letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: active ? "#f4edd8" : "#3a5880",
                  padding: "0 16px",
                  borderLeft: i === 0 ? "1px solid #cfc4a0" : "none",
                  borderRight: "1px solid #cfc4a0",
                  height: 52,
                  transition: "color 0.2s",
                }}
              >
                {active && (
                  <span style={{
                    width: 4, height: 4,
                    background: "#b87333",
                    flexShrink: 0,
                  }} />
                )}
                {link.label}
              </motion.span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Nav;
