"use client";

import { motion } from "framer-motion";
import { PixelHeart, PixelSparkle } from "./PixelIcons";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto text-center mt-32 relative"
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
      <PixelSparkle className="w-5 h-5 absolute -top-2 left-1/4 opacity-60" />
      <PixelHeart className="w-4 h-4 absolute top-8 right-1/4 opacity-50" />
    </motion.section>
  );
}