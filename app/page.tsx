"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "./components/Hero";
import Background from "./components/Background";
import { main } from "framer-motion/client";
import BackgroundCanvas from "./components/BackgroundCanvas";
import PageLoader from "./components/PageLoader";
import { useState,useEffect, useRef } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
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

    const minTime = 3000;
    const start = Date.now();

    const preload = Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
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
    };

    preload.then(() => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minTime - elapsed);
      setTimeout(finish, wait);
    });

    // safety: never stuck
    const safety = setTimeout(finish, minTime + 1000);

    return () => clearTimeout(safety);
  }, []);

  return (
    <main className="relative min-h-screen">
      <PageLoader loading={loading} intervalMs={260} />
      {!loading && <Hero />}
    </main>
  );
}