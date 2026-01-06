"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8}}
        className="text-xs uppercase tracking-widest text-white-500 mb-6 almendra-regular"
      >
        Introduction
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-6xl md:text-8xl font-semibold leading-[0.95] almendra-bold"
      >
        MAO KIMHUONG
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-4xl md:text-6xl font-medium text-gray-500 mt-4 almendra-regular"
      >
        
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="max-w-2xl mt-8 text-white-400 text-lg almendra-regular"
      >
        Experienced Web Developer with strong knowledge in web programming,
        frameworks, and modern technologies. Skilled in both front-end and
        back-end development, with the ability to design and implement
        responsive, user-friendly solutions. Committed to writing clean,
        high-quality code and following best practices to deliver projects
        efficiently.
      </motion.p>
    </section>
  );
}
