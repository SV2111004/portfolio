import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] translate-x-1/3 -translate-y-1/4 rounded-full blur-[110px]"
        style={{ background: "var(--color-jali-bright)", opacity: 0.32 }}
      />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow>Projects</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Things I've Built
          </h2>
          <p className="mt-6 max-w-xl text-[var(--color-linen-dim)]">
            From full-stack web applications to algorithm-driven systems, these projects reflect how I approach problem solving, software design, and building products that solve real-world problems.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
