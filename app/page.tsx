"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// Components
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import BackgroundCanvas from "./components/BackgroundCanvas";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCanvas, setShowCanvas] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const images = [
      "/images/IMG_3892.JPG",
      "/images/IMG_3893.JPG",
      "/images/IMG_3896.JPG",
      "/images/IMG_3897.JPG",
      "/images/IMG_3898.JPG",
      "/images/IMG_3899.JPG",
    ];

    const minTime = 3200; // Increased slightly for a more "prestigious" feel
    const start = Date.now();

    const preload = Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            if (typeof window === "undefined") return resolve();
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setLoading(false);
      // Delay canvas slightly after loader to prioritize Hero animation frames
      setTimeout(() => setShowCanvas(true), 500);
    };

    preload.then(() => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minTime - elapsed);
      setTimeout(finish, wait);
    });

    const safety = setTimeout(finish, minTime + 1000);
    return () => clearTimeout(safety);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030303] overflow-hidden selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader-container"
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-50"
          >
            <PageLoader loading={loading} intervalMs={240} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            {/* Background Layer: Only mounts after loading for max performance */}
            {/* <div className="fixed inset-0 pointer-events-none opacity-40">
              {showCanvas && <BackgroundCanvas />}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303]" />
            </div> */}

            {/* Foreground Content */}
            <Hero />
            
            {/* Minimalist Grid Overlay for Architectural feel */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}