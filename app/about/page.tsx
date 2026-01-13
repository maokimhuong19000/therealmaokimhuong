"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6 py-32">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          About
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          I don’t just build interfaces.
          <br />
          I design systems that move, respond, and feel intentional.
        </motion.p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 mt-28">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-lg leading-relaxed text-white/75"
          >
            <p>
              I’m Mao Kim Huong, a web developer working across frontend and
              backend. I focus on building products that are clear, responsive,
              and reliable.
            </p>

            <p>
              My background in design shapes how I write code. I pay attention
              to structure, spacing, motion, and how users feel while using a
              product.
            </p>

            <p>
              I enjoy turning complex ideas into simple, usable systems.
              Clean code and thoughtful interaction matter to me.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="space-y-12 text-white/75"
          >
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">
                What I care about
              </h3>
              <ul className="space-y-3 text-base leading-relaxed">
                <li>Clear and maintainable systems</li>
                <li>Frontend and backend working together</li>
                <li>Performance and scalability</li>
                <li>Design-driven development</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">
                Mindset
              </h3>
              <p className="text-base leading-relaxed">
                Technology is a tool.
                <br />
                Experience is the outcome.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </section>
  );
}
