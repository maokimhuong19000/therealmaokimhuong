"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Cpu, 
  Workflow, 
  Sparkles,
  ExternalLink,
  MapPin
} from "lucide-react";

/** -------------------------
 * DATA CONSTANTS
 * ------------------------- */

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

const skillLevels: Record<string, SkillLevel> = {
  "Problem Solving": "Advanced",
  PHP: "Advanced",
  HTML: "Advanced",
  Laravel: "Advanced",
  "API Development": "Advanced",
  "React.js": "Intermediate",
  "Real-time Systems": "Intermediate",
  "CI/CD": "Intermediate",
  GitHub: "Advanced",
  "UI/UX Design": "Advanced",
};

const experiences = [
  {
    company: "ione",
    role: "Web Developer",
    period: "Jun 2025 – Present",
    type: "Full-time",
    location: "Phnom Penh, Cambodia",
    current: true,
    responsibilities: [
      "Developing core web solutions using HTML, PHP, and modern frameworks.",
      "Optimizing platform performance and maintaining scalable codebases.",
      "Collaborating on high-impact retail and tech projects within the ione ecosystem.",
    ],
    skills: ["PHP", "HTML", "System Maintenance"],
  },
  {
    company: "MasterChat.io",
    role: "Web Developer",
    period: "Jan 2024 – Dec 2024",
    type: "Full-time",
    location: "Cambodia",
    current: false,
    responsibilities: [
      "Engineered both front-end and back-end features for a high-concurrency chat system.",
      "Implemented real-time messaging features and improved core app responsiveness.",
      "Integrated complex APIs and enhanced system security and user experience.",
    ],
    skills: ["React.js", "API Development", "Real-time Messaging", "Optimization"],
  },
  {
    company: "Inklusivity Tech",
    role: "Web Developer",
    period: "Aug 2023 – Dec 2023",
    type: "Internship",
    location: "Cambodia",
    current: false,
    responsibilities: [
      "Focused on product development during a 5-month intensive internship program.",
      "Supported modular feature building and internal system debugging.",
    ],
    skills: ["Web Development", "Team Work Flow"],
  },
  {
    company: "The FLORA",
    role: "Junior Graphic Designer",
    period: "Feb 2022 – Nov 2022",
    type: "Full-time",
    location: "Phnom Penh, Cambodia",
    current: false,
    responsibilities: [
      "Created high-end visual identities and marketing materials for real estate development.",
      "Bridged the gap between design aesthetics and technical brand requirements.",
    ],
    skills: ["UI/UX Design", "Graphic Design", "Branding"],
  },
];

const projects = [
  {
    year: "2024",
    title: "MasterChat Platform",
    desc: "A real-time communication interface with sub-100ms latency and high-fidelity UI.",
    image: "/images/chat-hub.jpg",
  },
  {
    year: "2024",
    title: "POS Management System",
    desc: "Complete POS system with products, promotions, and role-based access. Optimized for speed.",
    image: "/images/pos.jpg",
  },
  {
    year: "2023",
    title: "Digital Restaurant Menu",
    desc: "Modern digital menu with categories, table management, and responsive design for tablets.",
    image: "/images/menu.png",
  },
];

/** -------------------------
 * SUB-COMPONENTS
 * ------------------------- */

const SkillBadge = ({ name, level }: { name: string; level: SkillLevel }) => (
  <div className="group relative flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition-all hover:bg-white/[0.06]">
    <div className="flex flex-col">
      <span className="text-sm font-medium text-white/90">{name}</span>
      <span className="text-[10px] uppercase tracking-tighter text-white/30">{level}</span>
    </div>
    <div className={`h-1.5 w-1.5 rounded-full ${
      level === "Advanced" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : 
      level === "Intermediate" ? "bg-blue-400" : "bg-white/20"
    }`} />
  </div>
);

/** -------------------------
 * PAGE COMPONENT
 * ------------------------- */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-emerald-500/30 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-white/5 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
              MAO KIMHUONG <br /> <span className="text-white/20">Archive.</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-xl font-light leading-relaxed">
              I specialize in high-performance web systems at <span className="text-white">ione</span>, transforming 
              technical complexity into <span className="text-white">seamless digital experiences</span>.
            </p>
          </motion.div>
          
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
             <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
                <p className="text-3xl font-bold">4+</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Years Journey</p>
             </div>
             <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Tech Skills</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS BENTO --- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
            <div className="flex items-center gap-3 mb-8 text-emerald-400">
              <Cpu size={18} />
              <h3 className="font-semibold uppercase tracking-widest text-xs">The Logic</h3>
            </div>
            <div className="space-y-3">
              <SkillBadge name="PHP" level="Advanced" />
              <SkillBadge name="Laravel" level="Advanced" />
              <SkillBadge name="API Development" level="Advanced" />
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
            <div className="flex items-center gap-3 mb-8 text-blue-400">
              <Layers size={18} />
              <h3 className="font-semibold uppercase tracking-widest text-xs">The Interface</h3>
            </div>
            <div className="space-y-3">
              <SkillBadge name="React.js" level="Intermediate" />
              <SkillBadge name="HTML" level="Advanced" />
              <SkillBadge name="UI/UX Design" level="Advanced" />
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
            <div className="flex items-center gap-3 mb-8 text-purple-400">
              <Workflow size={18} />
              <h3 className="font-semibold uppercase tracking-widest text-xs">The Flow</h3>
            </div>
            <div className="space-y-3">
              <SkillBadge name="GitHub" level="Advanced" />
              <SkillBadge name="CI/CD" level="Intermediate" />
              <SkillBadge name="Problem Solving" level="Advanced" />
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE JOURNEY --- */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
             <h2 className="text-4xl font-bold tracking-tight sticky top-32">Professional <br /><span className="text-white/20">Timeline.</span></h2>
          </div>
          
          <div className="md:w-2/3 space-y-20">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Current Role Glow */}
                {exp.current && (
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                )}

                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className={`text-3xl font-semibold transition-colors ${exp.current ? 'text-emerald-400' : 'group-hover:text-emerald-400'}`}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-lg text-white/50">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-white/30 text-base">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-white/20 uppercase tracking-widest">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-white/40">
                    {exp.type}
                  </span>
                </div>
                
                <ul className="grid md:grid-cols-1 gap-4">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-3 text-base text-white/60 leading-relaxed font-light">
                      <span className="text-emerald-500/50">—</span> {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section className="mx-auto max-w-7xl px-6 py-32 border-t border-white/5">
        <div className="flex items-center gap-4 mb-16">
          <Sparkles className="text-emerald-400" />
          <h2 className="text-4xl font-bold tracking-tight">Selected Engineering</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 transition-all group-hover:border-emerald-500/30">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
              <div className="mt-8 px-2">
                <div className="text-[10px] text-emerald-400 font-mono mb-2 uppercase tracking-tighter">Release // {project.year}</div>
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}