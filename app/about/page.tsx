"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Zap, Layout, Database, MousePointer2 } from "lucide-react";

// Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[#030303] text-white selection:bg-white/10 selection:text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* HERO */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Mao <span className="text-white/30">Kim Huong.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-xl font-light leading-relaxed">
              A Web Developer bridging the gap between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                logical systems
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                human experience
              </span>.
            </p>
          </motion.div>

          {/* MINDSET CARD */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <Zap className="w-8 h-8 text-yellow-500/50 group-hover:text-yellow-400 transition-colors" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Philosophy</p>
                <h3 className="text-2xl font-medium leading-snug italic text-white/90">
                  "Technology is the tool, but experience is the memory."
                </h3>
              </div>
            </div>
          </motion.div>

          {/* PROFILE SUMMARY */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white/40">
                Open for Collaboration
              </span>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              My background in design isn't just a "plus"—it's my foundation. I treat every line of code
              as a visual element, ensuring that performance and aesthetics are never in conflict.
            </p>
          </motion.div>

          {/* FOCUS GRID (Mini Bento) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { icon: <Layout className="w-5 h-5" />, label: "UI Engineering", cat: "Frontend" },
              { icon: <Database className="w-5 h-5" />, label: "System Logic", cat: "Backend" },
              { icon: <MousePointer2 className="w-5 h-5" />, label: "Interaction", cat: "UX/UI" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="text-white/30">{item.icon}</div>
                <div className="mt-8">
                  <p className="text-sm font-medium text-white/90">{item.label}</p>
                  <p className="text-xs text-white/40">{item.cat}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* EDUCATION TIMELINE */}
          <motion.div variants={itemVariants} className="lg:col-span-12 mt-12">
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="w-6 h-6 text-white/40" />
              <h2 className="text-3xl font-semibold tracking-tight">Academic Journey</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "MIS Master’s Degree", org: "SETEC Institute", time: "2025 – Present", active: true },
                { title: "MIS Bachelor’s Degree", org: "SETEC Institute", time: "2020 – 2024", active: false },
                { title: "UX / UI Designer", org: "IT Step Academy", time: "2023 – 2024", active: false },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-8 rounded-[2rem] border transition-all duration-500 ${
                    edu.active
                      ? "border-white/20 bg-white/[0.05] shadow-[0_0_40px_rgba(255,255,255,0.03)]"
                      : "border-white/10 bg-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {edu.time}
                  </span>
                  <h4 className="mt-3 text-xl font-medium text-white/90">{edu.title}</h4>
                  <p className="mt-1 text-sm text-white/50">{edu.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
