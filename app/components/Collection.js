"use client";

import Masonry from "react-masonry-css";

const breakpointColumns = {
  default: 3,
  768: 2,
  480: 1,
};

export default function Collection({ title, subtitle, photos, font, subtitleFont }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 mt-32">
      <h2 className={`${font || "font-script"} text-5xl md:text-6xl mb-4`}>{title}</h2>
      <p className={`${subtitleFont || "font-italiana-italic"} text-sm text-gray-400 mb-8`}>{subtitle}</p>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} photo ${i + 1}`}
            className="w-full rounded-sm"
          />
        ))}
      </Masonry>
    </section>
  );
}