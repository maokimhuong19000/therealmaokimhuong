"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Purple orb */}
      <motion.div
        animate={{ x: [0, 200, 0], y: [0, -150, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Blue orb */}
      <motion.div
        animate={{ x: [0, -200, 0], y: [0, 150, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />
    </div>
  );
}
