import { motion } from "framer-motion";
import Starfield from "./Starfield";

/**
 * The courtyard at dusk: a deep indigo sky (dusk) settling over the
 * teal bench (jali), terracotta wall (brick) and mustard planter (ochre)
 * from the reference photo. Stars overhead, warm light glowing up from
 * below — this is the one place the page spends its visual boldness.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-ink)] noise">
      {/* base sky-to-courtyard gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% -10%, var(--color-dusk) 0%, var(--color-ink-soft) 42%, var(--color-ink) 72%)",
        }}
      />

      {/* night sky stars, sitewide, larger and brighter than before */}
      <Starfield count={160} className="absolute inset-0" />

      {/* jali lattice grid, drifting slowly */}
      <motion.div
        className="jali-grid absolute -inset-[10%]"
        animate={{ x: [0, 56, 0], y: [0, 56, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      {/* aurora glow mesh — bright colors, tighter blur so the color actually reads */}
      <motion.div
        className="absolute -left-32 top-[-12%] h-[600px] w-[600px] rounded-full blur-[90px]"
        style={{ background: "var(--color-jali-bright)" }}
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-[4%] h-[560px] w-[560px] rounded-full blur-[100px]"
        style={{ background: "var(--color-ochre-bright)" }}
        animate={{ opacity: [0.3, 0.48, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-16%] left-[22%] h-[620px] w-[620px] rounded-full blur-[110px]"
        style={{ background: "var(--color-brick-bright)" }}
        animate={{ opacity: [0.26, 0.42, 0.26], scale: [1, 1.08, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute right-[4%] bottom-[0%] h-[540px] w-[540px] rounded-full blur-[100px]"
        style={{ background: "var(--color-dusk-bright)" }}
        animate={{ opacity: [0.32, 0.5, 0.32], scale: [1, 1.14, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-[8%] top-[36%] h-[440px] w-[440px] rounded-full blur-[95px]"
        style={{ background: "var(--color-jali-bright)" }}
        animate={{ opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--color-dusk-bright)" }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* slow-rotating aurora mesh layer, adds movement without being busy */}
      <div
        className="absolute inset-[-20%] opacity-60 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 40%, var(--color-dusk-bright), transparent 20%, var(--color-jali-bright) 45%, transparent 65%, var(--color-ochre-bright) 85%, var(--color-dusk-bright))",
          animation: "aurora-drift 34s ease-in-out infinite",
          filter: "blur(70px)",
        }}
      />

      {/* two quiet shooting stars for a moment of delight, not a distraction */}
      <div
        className="absolute left-[70%] top-[18%] h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-[var(--color-linen)] to-transparent"
        style={{ animation: "shooting-star 9s ease-in 2.5s infinite" }}
      />
      <div
        className="absolute left-[45%] top-[55%] h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[var(--color-ochre-bright)] to-transparent"
        style={{ animation: "shooting-star 13s ease-in 7s infinite" }}
      />

      {/* grounding vignette so foreground content stays readable, lighter touch than before */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, color-mix(in srgb, var(--color-ink) 85%, transparent) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_45%,rgba(10,22,20,0.4)_100%)]" />
    </div>
  );
}
