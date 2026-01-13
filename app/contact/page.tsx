"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Send,
  Facebook,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Let’s Connect
          </h1>
          <p className="text-white-500 text-lg max-w-xl mx-auto">
            Have a project, idea, or collaboration in mind.  
            Feel free to reach out through any platform below.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Email */}
          <ContactCard
            icon={<Mail size={22} />}
            title="Email"
            value="maokimhuong.office@gmail.com"
            link="mailto:maokimhuong.office@gmail.com"
          />

          {/* GitHub */}
          <ContactCard
            icon={<Github size={22} />}
            title="GitHub"
            value="github.com/maokimhuong"
            link="https://github.com/maokimhuong"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<Linkedin size={22} />}
            title="LinkedIn"
            value="linkedin.com/in/mao-kimhuong"
            link="https://www.linkedin.com/in/mao-kimhuong"
          />

          {/* Instagram */}
          <ContactCard
            icon={<Instagram size={22} />}
            title="Instagram"
            value="@maokimhuong"
            link="https://instagram.com/maokimhuong"
          />

          {/* Telegram */}
          <ContactCard
            icon={<Send size={22} />}
            title="Telegram"
            value="@maokimhuong"
            link="https://t.me/maokimhuong"
          />

          {/* Facebook */}
          <ContactCard
            icon={<Facebook size={22} />}
            title="Facebook"
            value="facebook.com/maokimhuong"
            link="https://facebook.com/maokimhuong"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group border border-white/10 rounded-2xl p-6 hover:border-white/30 transition"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <p className="text-white-500 group-hover:text-white-300 transition">
        {value}
      </p>
    </motion.a>
  );
}
