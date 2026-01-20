"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PageLoaderProps {
  loading: boolean;
  frames?: string[];
  intervalMs?: number;
}

export default function PageLoader({
  loading,
  frames = [
    "/images/IMG_3892.JPG",
    "/images/IMG_3893.JPG",
    "/images/IMG_3896.JPG",
    "/images/IMG_3897.JPG",
    "/images/IMG_3898.JPG",
    "/images/IMG_3899.JPG",
  ],
  intervalMs = 250,
}: PageLoaderProps) {
  const [i, setI] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!loading) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    // prevent double interval (Strict Mode)
    if (timerRef.current) return;

    timerRef.current = window.setInterval(() => {
      setI((v) => (v + 1) % frames.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [loading, intervalMs, frames.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={frames[i]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }} // slower crossfade
                className="absolute inset-0"
              >
                <Image
                  src={frames[i]}
                  alt="Loading frame"
                  fill
                  className="object-cover scale-[0.95]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
