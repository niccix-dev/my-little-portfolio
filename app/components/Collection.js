"use client";

import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const breakpointColumns = {
  default: 3,
  768: 2,
  480: 1,
};

export default function Collection({ title, subtitle, photos, font, subtitleFont }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 md:px-12 mt-32"
    >
      <h2 className={`${font || "font-script"} text-5xl md:text-6xl mb-4`}>{title}</h2>
      <p className={`${subtitleFont || "font-italiana-italic"} text-sm text-gray-400 mb-8`}>{subtitle}</p>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.1, ease: "easeOut" }}
          >
            <img
              src={src}
              alt={`${title} photo ${i + 1}`}
              className="w-full rounded-sm transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        ))}
      </Masonry>
    </motion.section>
  );
}