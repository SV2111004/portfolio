import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rotatingTitles } from "../data/misc";

export default function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingTitles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-9 overflow-hidden font-mono text-lg text-[var(--color-jali-bright)] sm:text-xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingTitles[index]}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0"
        >
          {rotatingTitles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
