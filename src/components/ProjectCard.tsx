import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, ImageIcon } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useState } from "react";
import { type Project } from "../data/projects";
import MagneticButton from "./MagneticButton";

const detailBlocks: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "learnings", label: "Learnings" },
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="glass overflow-hidden rounded-3xl"
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        data-cursor-hover
        aria-expanded={open}
        className="grid w-full grid-cols-1 items-center gap-6 p-6 text-left sm:grid-cols-[auto_1fr_auto] sm:p-8"
      >
        <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-[var(--color-surface)] sm:w-40">
          <span className="font-mono text-3xl text-[var(--color-jali-bright)]/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl text-[var(--color-linen)]">{project.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-linen-dim)]">{project.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-linen)]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35 }}
          className="justify-self-end rounded-full border border-[var(--color-linen)]/15 p-2.5 text-[var(--color-linen)]"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--color-linen)]/10 px-6 pb-8 pt-6 sm:px-8">
              {/* screenshots carousel */}
              <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
                {(project.screenshots.length ? project.screenshots : [0, 1, 2]).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-video w-56 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)]"
                  >
                    <ImageIcon size={22} className="text-[var(--color-muted)]" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {detailBlocks.map((block) => (
                  <div key={block.key}>
                    <h4 className="mb-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ochre-bright)]">
                      {block.label}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--color-linen-dim)]">
                      {project[block.key] as string}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <MagneticButton href={project.demoUrl} variant="solid">
                    <ExternalLink size={15} /> Live demo
                  </MagneticButton>
                )}
                {project.githubUrl && (
                  <MagneticButton href={project.githubUrl} variant="outline">
                    <GithubIcon size={15} /> Source
                  </MagneticButton>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
