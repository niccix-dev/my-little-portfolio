"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CollectionNav({ collections }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observers = collections.map((c) => {
      const el = document.getElementById(`collection-${c.id}`);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(c.id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, [collections]);

  function scrollTo(id) {
    const el = document.getElementById(`collection-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#fafaf8]/90 backdrop-blur-sm py-3 mt-16 max-w-6xl mx-auto px-6 md:px-12"
    >
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {collections.map((c) => (
          <button
            key={c.id}
            onClick={() => scrollTo(c.id)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs border transition-all duration-300 ${
              active === c.id
                ? "border-gray-400 bg-gray-100 text-gray-700"
                : "border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}