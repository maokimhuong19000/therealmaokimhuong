"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating particle circles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl animate-pulse"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="space-y-6 md:space-y-8">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-gray-400"
          >
            Introduction
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight text-white"
          >
            MAO <br /> KIMHUONG
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-300"
          >
            Web Application Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-xl text-white-400 text-lg leading-relaxed"
          >
            I design and build modern web applications with clean architecture, 
            strong performance, and user-focused experiences. Skilled in both 
            frontend and backend development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-6 mt-6"
          >
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 text-gray-300 font-medium rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex gap-4 mt-6 text-gray-400 text-xl"
          >
            <a href="https://github.com/maokimhuong19000" target="_blank"><FaGithub className="hover:text-white transition-colors"/></a>
            <a href="https://www.linkedin.com/in/maokimhuong/" target="_blank"><FaLinkedin className="hover:text-blue-500 transition-colors"/></a>
            <a href="https://t.me/mao_kimhuong" target="_blank"><FaTelegramPlane className="hover:text-blue-400 transition-colors"/></a>
            <a href="https://instagram.com/maokimhuong" target="_blank"><FaInstagram className="hover:text-pink-500 transition-colors"/></a>
            <a href="https://facebook.com/maokimhuong" target="_blank"><FaFacebook className="hover:text-blue-600 transition-colors"/></a>
          </motion.div>
        </div>

        {/* Rectangular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="relative w-full h-[480px] md:h-[600px] overflow-hidden rounded-xl shadow-2xl group"
        >
          <Image
            src="/profile.png" 
            alt="Mao Kimhuong"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
