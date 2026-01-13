"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    year: "2024",
    title: "POS Management System",
    desc: "Complete POS system with products, promotions, orders, Excel export, and role-based access. Optimized for speed and real usage.",
    image: "/images/pos.jpg",
  },
  {
    year: "2023",
    title: "Digital Restaurant Menu",
    desc: "Modern digital menu with categories, options, table management, and responsive design for tablets and mobile.",
    image: "/images/menu.png",
  },
  {
    year: "2022",
    title: "Web Dashboard Systems",
    desc: "Internal dashboards and admin panels with clean UI, REST APIs, and maintainable architecture.",
    image: "/images/dashboard.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience & Work
          </h1>
          <p className="text-white-500 text-lg max-w-2xl mx-auto">
            A selection of projects that reflect my experience in web
            development, system design, and user-focused solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Content */}
              <div>
                <span className="text-sm uppercase tracking-widest text-white-400">
                  {item.year}
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">
                  {item.title}
                </h2>

                <p className="text-white-600 text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
