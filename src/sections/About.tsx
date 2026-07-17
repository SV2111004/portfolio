import { Code2, GraduationCap, Sparkles } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const facets = [
  {
    icon: GraduationCap,
    title: "Full Stack Development",
    body: "Building scalable web applications with React, Node.js, Express, MongoDB, and modern development tools.",
    glow: "jali" as const,
  },
  {
    icon: Code2,
    title: "Problem Solving",
    body: "Solved 700+ LeetCode problems while strengthening algorithmic thinking through graphs, dynamic programming, and data structures.",
    glow: "ochre" as const,
  },
  {
    icon: Sparkles,
    title: "AI & Exploration",
    body: "Exploring machine learning and LLM applications, experimenting with intelligent systems and practical AI experiences.",
    glow: "brick" as const,
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/3 -translate-y-1/3 rounded-full blur-[100px]"
        style={{ background: "var(--color-jali-bright)", opacity: 0.4 }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Beyond the Resume
          </h2>
          <p className="mt-6 max-w-xl text-[var(--color-linen-dim)]">
            I enjoy building software that solves real problems. From full-stack applications and algorithmic challenges to AI-powered tools, I'm driven by curiosity, strong engineering fundamentals, and a desire to keep improving with every project.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {facets.map((facet, i) => (
            <Reveal key={facet.title} delay={i * 0.1}>
              <TiltCard glow={facet.glow} className="h-full p-7">
                <facet.icon
                  size={22}
                  className="mb-5 text-[var(--color-jali-bright)]"
                  style={{
                    color:
                      facet.glow === "ochre"
                        ? "var(--color-ochre-bright)"
                        : facet.glow === "brick"
                        ? "var(--color-brick-bright)"
                        : "var(--color-jali-bright)",
                  }}
                />
                <h3 className="mb-2 font-display text-xl text-[var(--color-linen)]">
                  {facet.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-linen-dim)]">
                  {facet.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
