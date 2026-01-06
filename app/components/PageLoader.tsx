"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  loading: boolean;
}

export default function PageLoader({ loading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Liquid-like circle animation */}
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
              borderRadius: ["50%", "30%", "50%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
