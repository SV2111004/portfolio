import { GraduationCap } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { education } from "../data/misc";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[440px] w-[440px] translate-x-1/3 rounded-full blur-[105px]"
        style={{ background: "var(--color-ochre-bright)", opacity: 0.38 }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Where the foundation was built.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.1}>
              <TiltCard  className="p-7 sm:p-9">
                <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto]">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-[var(--color-surface)] p-2.5 text-[var(--color-jali-bright)]">
                        <GraduationCap size={18} />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                        {entry.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-[var(--color-linen)] sm:text-[1.7rem]">
                      {entry.institution}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-linen-dim)]">{entry.degree}</p>

                    {entry.highlights.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {entry.highlights.map((h) => (
                          <li
                            key={h}
                            className="rounded-full border border-[var(--color-linen)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* CGPA / score highlight */}
                  <div
                    className="flex flex-col items-center justify-center rounded-2xl px-8 py-6 text-center sm:min-w-[160px]"
                    style={{
                      background:
                        "linear-gradient(to bottom right, color-mix(in srgb, var(--color-jali) 25%, transparent), transparent)",
                    }}
                  >
                    <AnimatedCounter
                      value={parseFloat(entry.score)}
                      decimals={entry.score.includes(".") ? entry.score.split(".")[1].length : 0}
                      className="font-display text-4xl font-medium text-[var(--color-ochre-bright)]"
                    />
                    <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {entry.scoreLabel}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
