"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto text-center mt-32"
    >
      <p className="text-sm md:text-base text-gray-500 mb-6">
        photographer & collector of beautiful things
      </p>
      <h1 className="font-script text-6xl md:text-8xl mb-6">
        my little portfolio.
      </h1>
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        birds, beaches & buttery pastries — shot on film and heart
      </p>
    </motion.section>
  );
}