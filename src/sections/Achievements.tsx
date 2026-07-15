import { Award } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { achievements } from "../data/misc";

const glows = ["jali", "ochre", "brick"] as const;

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Achievements</Eyebrow>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Milestones along the way.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.07}>
              <TiltCard glow={glows[i % glows.length]} className="h-full p-6">
                <Award size={18} className="mb-4 text-[var(--color-ochre-bright)]" />
                <p className="font-mono text-2xl font-semibold text-[var(--color-linen)]">
                  {a.value}
                </p>
                <h3 className="mt-1 text-sm font-medium text-[var(--color-linen)]">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-linen-dim)]">
                  {a.description}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
