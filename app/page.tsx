import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "./components/Hero";
import Background from "./components/Background";
import { main } from "framer-motion/client";
import BackgroundCanvas from "./components/BackgroundCanvas";

export default function Home() {
  return (
     <main className="relative min-h-screen flex items-center justify-center">
      <Hero />
    </main>
  );
}
