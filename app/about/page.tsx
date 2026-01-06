"use client";

import { motion } from "framer-motion";
import {
  BiLogoDocker,
  BiSolidCamera,
  BiVideo,
} from "react-icons/bi";
import {
  FaReact,
  FaPhp,
  FaJs,
  FaPython,
  FaFlask,
  FaAndroid,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiAdobephotoshop,
  SiNextdotjs,
  SiJavascript,
  SiNginx,
  SiRedis,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";

const experiences = [
  {
    role: "Web Developer",
    company: "iOne",
    period: "2025 – Present",
    description:
      "Working across frontend and backend systems, building APIs, optimizing performance, and integrating real-time features.",
    icons: [
      FaPhp,
      FaPython,
      FaFlask,
      FaAndroid,
      FaNodeJs,
      FaJava,
      SiJavascript,
      SiNextdotjs,
      SiLaravel,
      SiMysql,
      BiLogoDocker,
      SiNginx,
      SiRedis,
    ],
  },
  {
    role: "Web Developer",
    company: "Blueprint Technology",
    period: "2024 – 2025",
    description:
      "Developed Masterchat.io with focus on real-time chat, scalable APIs, and responsive interfaces.",
    icons: [FaReact, SiLaravel, SiMysql],
  },
  {
    role: "Internship Web Developer",
    company: "Inklusivity Technology",
    period: "Aug 2022 – Jan 2023",
    description:
      "Built POS systems, inventory management, CRM solutions, and multi-shop features.",
    icons: [FaPhp, FaJs, SiFlutter],
  },
  {
    role: "Junior Graphic Designer",
    company: "The Flora",
    period: "Oct 2022 – Apr 2023",
    description:
      "Worked on brand identity, digital media, motion graphics, and visual storytelling.",
    icons: [
      SiAdobephotoshop,
      SiAdobeaftereffects,
      SiAdobepremierepro,
      SiAdobeillustrator,
      SiAdobelightroom,
      BiSolidCamera,
      BiVideo,
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 py-32">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-semibold"
      >
        ABOUT
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-xl text-white-400 max-w-2xl"
      >
        I don’t just build interfaces.  
        I design systems that move, respond, and feel intentional.
      </motion.p>

      {/* Narrative */}
      <div className="grid md:grid-cols-2 gap-20 mt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-2 text-white-300 text-lg"
        >
          <p>
            I’m a web developer working across frontend and backend, with a
            strong focus on interaction, performance, and clarity.
            My background in design shapes how I write code. I care about
            rhythm, balance, and how users feel while using a product.
            Technology is just a tool.  
            Experience is the outcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white-300"
        >
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white-500 mb-3">
              Focus
            </h3>
            <ul className="">
              <li>Interactive systems</li>
              <li>Frontend & backend integration</li>
              <li>Performance and scalability</li>
              <li>Design-informed development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-white-500 mb-3">
              Philosophy
            </h3>
            <p>
              Good design doesn’t ask for attention.  
              It earns it.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <div className="mt-40 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-4xl font-semibold"
        >
          Experience
        </motion.h2>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="border-t border-white-700 pt-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-2xl font-medium">{exp.role}</h3>
                <span className="text-sm text-white-500">{exp.period}</span>
              </div>

              <p className="text-white-400 mt-1">{exp.company}</p>
              <p className="text-white-300 mt-4 max-w-3xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-6 text-xl text-white-400">
                {exp.icons.map((Icon, idx) => (
                  <Icon key={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-white-600/40 to-transparent"
      />
    </section>
  );
}