import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const [exited, setExited] = useState(false);
  const [display, setDisplay] = useState(0);

  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 60, damping: 20 });
  const barWidth = useTransform(smooth, (v) => `${v}%`);

  // Creep the bar toward 92% while real assets load, then snap to 100
  // once the window actually finishes loading (fonts, images, etc).
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;

    const creep = (t: number) => {
      const elapsed = t - start;
      progress.set(Math.min(92, 92 * (1 - Math.exp(-elapsed / 1600))));
      raf = requestAnimationFrame(creep);
    };
    raf = requestAnimationFrame(creep);

    const finish = () => {
      cancelAnimationFrame(raf);
      progress.set(100);
      setDone(true);
    };

    if (document.readyState === "complete") {
      const t = setTimeout(finish, 800);
      return () => {
        clearTimeout(t);
        cancelAnimationFrame(raf);
      };
    }

    window.addEventListener("load", finish);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", finish);
    };
  }, [progress]);

  useEffect(() => smooth.on("change", (v) => setDisplay(Math.round(v))), [smooth]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setExited(true);
      document.body.style.overflow = "";
    }, reduced ? 150 : 900);
    return () => clearTimeout(t);
  }, [done, reduced]);

  return (
    <AnimatePresence>
      {!exited && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label={done ? "Finished loading" : "Loading portfolio"}
          initial={{ opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: reduced ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="engineering-grid fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--color-ink)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute h-[300px] w-[300px] rounded-full blur-[100px]"
            style={{ background: "var(--color-jali-bright)", opacity: 0.18 }}
          />

          <motion.div
  animate={reduced ? undefined : { opacity: [0.75, 1, 0.75] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
  className="text-center"
>
  <p className="font-display text-3xl tracking-tight text-[var(--color-linen)]">
    SV<span className="text-[var(--color-ochre-bright)]">.</span>
  </p>

  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-muted)]">
    Portfolio
  </p>
</motion.div>

          <div className="relative mt-8 h-px w-40 overflow-hidden bg-[var(--color-surface-hi)]">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: barWidth,
                background: "var(--color-jali-bright)",
                boxShadow: "var(--shadow-glow-jali)",
              }}
            />
          </div>

          <p className="mt-4 font-mono text-[11px] tracking-[0.25em] text-[var(--color-muted)]">
  {display}%
</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
