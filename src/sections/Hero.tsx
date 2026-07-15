import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, FileText, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import RotatingTitles from "../components/RotatingTitles";
import MagneticButton from "../components/MagneticButton";
import { socialLinks } from "../data/misc";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 });
  const lightX = useSpring(useTransform(mx, [0, 1], [15, 85]), { stiffness: 120, damping: 20 });
  const lightY = useSpring(useTransform(my, [0, 1], [15, 85]), { stiffness: 120, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-[460px] w-[460px] rounded-full blur-[120px]"
        style={{ background: "var(--color-jali-bright)", opacity: 0.22 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-[360px] w-[360px] rounded-full blur-[110px]"
        style={{ background: "var(--color-ochre-bright)", opacity: 0.16 }}
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-ochre-bright)]"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-5xl font-medium leading-[1.05] text-[var(--color-linen)] sm:text-6xl lg:text-7xl"
          >
            Shubhra
            <br />
            Varshney
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6"
          >
            <RotatingTitles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-md text-balance text-[var(--color-linen-dim)]"
          >
            Final-year CS student building full-stack and AI-powered
            systems — from a real-time disaster-response platform to an
            LLM-driven document intelligence tool — backed by 600+ DSA
            problems solved and a 1777 LeetCode contest rating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-[var(--color-linen)]/10 px-4 py-2 font-mono text-xs text-[var(--color-linen-dim)]"
            style={{ background: "color-mix(in srgb, var(--color-surface) 70%, transparent)" }}
          >
            <GraduationCap size={14} className="text-[var(--color-ochre-bright)]" />
            <span>B.Tech CSE</span>
            <span className="text-[var(--color-linen)]/20">·</span>
            <span>JIIT Noida</span>
            <span className="text-[var(--color-linen)]/20">·</span>
            <span>Batch 2023–27</span>
            <span className="text-[var(--color-linen)]/20">·</span>
            <span className="text-[var(--color-jali-bright)]">CGPA 9.3</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={socialLinks.resume} variant="solid">
              <FileText size={16} /> Resume
            </MagneticButton>
            <MagneticButton href={socialLinks.github} variant="outline">
              <GithubIcon size={16} /> GitHub
            </MagneticButton>
            <MagneticButton href={socialLinks.linkedin} variant="outline">
              <LinkedinIcon size={16} /> LinkedIn
            </MagneticButton>
            <MagneticButton href={socialLinks.email} variant="ghost">
              <Mail size={16} /> Contact
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <motion.div
            aria-hidden
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* layered glow behind */}
            <div
              className="absolute -inset-10 -z-10 rounded-[2.5rem] blur-3xl"
              style={{
                background:
                  "linear-gradient(to bottom right, color-mix(in srgb, var(--color-jali-bright) 70%, transparent), color-mix(in srgb, var(--color-ochre-bright) 45%, transparent), color-mix(in srgb, var(--color-dusk-bright) 40%, transparent))",
              }}
            />
            <div className="jali-grid absolute -inset-6 -z-10 rounded-[2rem] opacity-40" />

            <motion.div
              ref={frameRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="relative"
            >
              <motion.div
                className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-2xl shadow-black/40"
                style={{ boxShadow: "var(--shadow-glow-jali)" }}
              >
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src={profile}
                    alt="Portrait of Shubhra Varshney"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: useTransform(
                        [lightX, lightY],
                        ([x, y]) =>
                          `radial-gradient(280px circle at ${x}% ${y}%, rgba(240,190,95,0.28), transparent 60%)`
                      ),
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                aria-hidden
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -left-8 top-8 rounded-xl px-3 py-2 font-mono text-[11px] text-[var(--color-jali-bright)] shadow-lg"
              >
                600+ solved
              </motion.div>
              <motion.div
                aria-hidden
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass absolute -right-6 bottom-10 rounded-xl px-3 py-2 font-mono text-[11px] text-[var(--color-ochre-bright)] shadow-lg"
              >
                1777 rating
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]"
      >
        Scroll
      </motion.div>
    </section>
  );
}
