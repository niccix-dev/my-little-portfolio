"use client";

import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { PixelHeart, PixelSparkle } from "./PixelIcons";

const breakpointColumns = {
  default: 3,
  768: 2,
  480: 1,
};

const decorationSets = [
  [
    { icon: "sparkle", className: "w-4 h-4 absolute top-0 right-0 opacity-50" },
    { icon: "heart", className: "w-4 h-4 absolute -bottom-6 left-4 opacity-40" },
  ],
  [
    { icon: "heart", className: "w-4 h-4 absolute top-2 left-0 opacity-40" },
    { icon: "sparkle", className: "w-5 h-5 absolute -bottom-8 right-10 opacity-50" },
    { icon: "sparkle", className: "w-3 h-3 absolute top-0 right-20 opacity-40" },
  ],
  [
    { icon: "sparkle", className: "w-4 h-4 absolute -bottom-6 left-1/2 opacity-50" },
  ],
  [
    { icon: "heart", className: "w-3 h-3 absolute top-4 right-4 opacity-40" },
    { icon: "sparkle", className: "w-4 h-4 absolute -bottom-8 left-10 opacity-50" },
    { icon: "heart", className: "w-4 h-4 absolute -bottom-4 right-1/3 opacity-40" },
  ],
];

export default function Collection({ title, subtitle, photos, font, subtitleFont, decorationIndex = 0 }) {
  const decorations = decorationSets[decorationIndex % decorationSets.length];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 md:px-12 mt-32 relative"
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

      {decorations.map((d, i) =>
        d.icon === "sparkle" ? (
          <PixelSparkle key={i} className={d.className} />
        ) : (
          <PixelHeart key={i} className={d.className} />
        )
      )}
    </motion.section>
  );
}