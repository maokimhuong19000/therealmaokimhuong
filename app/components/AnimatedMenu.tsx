"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function AnimatedMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full 
                   bg-gray-600 text-white text-xl flex items-center 
                   justify-center shadow-lg"
      >
        {open ? "×" : "≡"}
      </button>

      {/* Menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col 
                       items-center justify-center backdrop-blur-md"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                className="mb-6"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-4xl md:text-6xl font-bold 
                             uppercase text-white cursor-pointer 
                             hover:scale-110 hover:text-gray-400 
                             transition-all almendra-regular"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
