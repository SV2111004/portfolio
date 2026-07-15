import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  BrainCircuit,
  Cloud,
  Server,
  Database,
  LayoutTemplate,
  Wrench,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import Starfield from "../components/Starfield";
import { skillCategories, type SkillCategory } from "../data/skills";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { cn } from "../lib/utils";

const colorVars: Record<string, { text: string; border: string; glow: string; dot: string; line: string }> = {
  jali: {
    text: "text-[var(--color-jali-bright)]",
    border: "border-[var(--color-jali-bright)]/45",
    glow: "rgba(69,168,151,0.35)",
    dot: "bg-[var(--color-jali-bright)]",
    line: "var(--color-jali-bright)",
  },
  ochre: {
    text: "text-[var(--color-ochre-bright)]",
    border: "border-[var(--color-ochre-bright)]/45",
    glow: "rgba(240,190,95,0.3)",
    dot: "bg-[var(--color-ochre-bright)]",
    line: "var(--color-ochre-bright)",
  },
  brick: {
    text: "text-[var(--color-brick-bright)]",
    border: "border-[var(--color-brick-bright)]/45",
    glow: "rgba(217,114,80,0.3)",
    dot: "bg-[var(--color-brick-bright)]",
    line: "var(--color-brick-bright)",
  },
};

const iconMap: Record<string, LucideIcon> = {
  languages: Terminal,
  "core-cs": BookOpen,
  "cloud-devops": Cloud,
  backend: Server,
  databases: Database,
  frontend: LayoutTemplate,
  "ai-ml": BrainCircuit,
  tools: Wrench,
};

const RING_SIZE = 78; // % of container — single shared orbit ring
const RING_DURATION = 42; // seconds per revolution, calm pace

interface Anchor {
  categoryId: string;
  x: number; // % within container
  y: number;
}

function pointOnCircle(angleDeg: number, radius: number, center = { x: 50, y: 50 }) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: center.x + radius * Math.cos(rad), y: center.y + radius * Math.sin(rad) };
}

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);

  const measureAnchor = (categoryId: string) => {
    const container = containerRef.current;
    const bubble = bubbleRefs.current[categoryId];
    if (!container || !bubble) return;
    const containerRect = container.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();
    const x = ((bubbleRect.left + bubbleRect.width / 2 - containerRect.left) / containerRect.width) * 100;
    const y = ((bubbleRect.top + bubbleRect.height / 2 - containerRect.top) / containerRect.height) * 100;
    setAnchor({ categoryId, x, y });
  };

  const handleEnter = (categoryId: string) => {
    setHoveredId(categoryId);
    // measure after the pause has actually applied and the browser has painted
    requestAnimationFrame(() => requestAnimationFrame(() => measureAnchor(categoryId)));
  };

  const handleLeave = (categoryId: string) => {
    setHoveredId((cur) => (cur === categoryId ? null : cur));
    setAnchor((cur) => (cur?.categoryId === categoryId ? null : cur));
  };

  const activeCategory: SkillCategory | undefined = skillCategories.find((c) => c.id === anchor?.categoryId);

  const skillPositions =
    anchor && activeCategory
      ? activeCategory.skills.map((skill, j) => {
          const n = activeCategory.skills.length;
          const centerAngle = (Math.atan2(anchor.y - 50, anchor.x - 50) * 180) / Math.PI;
          const radiusFromCenter = Math.hypot(anchor.x - 50, anchor.y - 50);
          const spread = Math.min(80, 26 + n * 9);
          const offset = n === 1 ? 0 : (j - (n - 1) / 2) * (spread / Math.max(1, n - 1));
          const angle = centerAngle + offset;
          const radius = radiusFromCenter + 15 + (j % 2 === 0 ? 0 : 4);
          return { skill, pos: pointOnCircle(angle, radius) };
        })
      : [];

  return (
    <section id="skills" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            A quiet little galaxy of what I know.
          </h2>
          <p className="mt-6 max-w-xl text-[var(--color-linen-dim)]">
            Categories drift slowly around the center. Hover one to pause it
            and branch out its skills.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-14 aspect-square w-full max-w-[620px] overflow-visible rounded-[2.5rem] border border-[var(--color-linen)]/8"
            style={{
              background:
                "radial-gradient(ellipse at 50% 45%, var(--color-surface) 0%, var(--color-ink-soft) 55%, var(--color-ink) 100%)",
            }}
          >
            <Starfield className="absolute inset-0 overflow-hidden rounded-[2.5rem]" count={35} />

            {/* faint orbit guide ring */}
            <div
              aria-hidden
              className="absolute rounded-full border border-[var(--color-linen)]/[0.07]"
              style={{
                width: `${RING_SIZE}%`,
                height: `${RING_SIZE}%`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* connecting lines: center -> hovered category, category -> skills */}
            <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
              {anchor && (
                <motion.line
                  x1={50}
                  y1={50}
                  x2={anchor.x}
                  y2={anchor.y}
                  stroke={activeCategory ? colorVars[activeCategory.color].line : "var(--color-linen)"}
                  strokeWidth={0.4}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {activeCategory &&
                skillPositions.map(({ skill, pos }) => (
                  <motion.line
                    key={skill.id}
                    x1={anchor!.x}
                    y1={anchor!.y}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={colorVars[activeCategory.color].line}
                    strokeWidth={0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                ))}
            </svg>

            {/* center profile hub */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full blur-2xl"
                style={{
                  background: "var(--color-jali)",
                  animation: reducedMotion ? undefined : "pulse-glow 6s ease-in-out infinite",
                }}
              />
              <div className="glass flex flex-col items-center gap-2 rounded-3xl px-7 py-6 text-center shadow-xl">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-jali-bright)]"
                  style={{ background: "color-mix(in srgb, var(--color-jali) 35%, transparent)" }}
                >
                  <Sparkles size={20} />
                </span>
                <div>
                  <p className="font-display text-lg text-[var(--color-linen)]">Skills</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                    {skillCategories.length} categories
                  </p>
                </div>
              </div>
            </div>

            {/* orbiting category bubbles */}
            {skillCategories.map((cat, i) => {
              const duration = RING_DURATION;
              const delay = -((i / skillCategories.length) * duration);
              const isHovered = hoveredId === cat.id;
              const dim = hoveredId !== null && !isHovered;
              // Pause the whole ring the moment any bubble is active, so the
              // target you're hovering — and its neighbours — hold still.
              const paused = hoveredId !== null;
              const c = colorVars[cat.color];
              const Icon = iconMap[cat.id] ?? Terminal;

              return (
                // NOTE: this positioning box is the full ring size and sits
                // centered for every category, so all 8 fully overlap. It
                // must never capture pointer events itself (pointer-events-none)
                // — only the actual bubble at the end of the chain should.
                // Previously this box was hoverable, so whichever category
                // rendered last in the DOM sat on top and swallowed every
                // hover, which is why only "Tools" ever worked.
                <div
                  key={cat.id}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: `${RING_SIZE}%`, height: `${RING_SIZE}%` }}
                >
                  <div
                    className="pointer-events-none h-full w-full"
                    style={{
                      animation: reducedMotion ? undefined : `orbit-spin ${duration}s linear infinite`,
                      animationDelay: `${delay}s`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                      style={{ zIndex: isHovered ? 30 : 10 }}
                    >
                      <div
                        className="pointer-events-none"
                        style={{
                          animation: reducedMotion ? undefined : `counter-orbit-spin ${duration}s linear infinite`,
                          animationDelay: `${delay}s`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      >
                        <div
                          ref={(el) => {
                            bubbleRefs.current[cat.id] = el;
                          }}
                          onMouseEnter={() => handleEnter(cat.id)}
                          onMouseLeave={() => handleLeave(cat.id)}
                          data-cursor-hover
                          className={cn(
                            "glass pointer-events-auto flex h-[74px] w-[74px] flex-col items-center justify-center gap-1 rounded-full border p-2 text-center shadow-md transition-all duration-300",
                            isHovered ? cn(c.border, "scale-[1.15]") : "border-[var(--color-linen)]/12",
                            dim && "opacity-40"
                          )}
                          style={isHovered ? { boxShadow: `0 0 34px -6px ${c.glow}` } : undefined}
                        >
                          <Icon size={16} className={c.text} />
                          <span className="px-1 text-[9.5px] font-medium leading-tight text-[var(--color-linen)]">
                            {cat.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* popped-out skill chips */}
            <AnimatePresence>
              {activeCategory &&
                anchor &&
                skillPositions.map(({ skill, pos }, idx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.4, left: `${anchor.x}%`, top: `${anchor.y}%` }}
                    animate={{ opacity: 1, scale: 1, left: `${pos.x}%`, top: `${pos.y}%` }}
                    exit={{ opacity: 0, scale: 0.4 }}
                    transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-linen)] shadow-lg backdrop-blur-md"
                      style={{
                        background: "rgba(19,36,32,0.85)",
                        borderColor: colorVars[activeCategory.color].line,
                      }}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", colorVars[activeCategory.color].dot)} />
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
