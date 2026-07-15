import { ExternalLink } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { codingProfiles } from "../data/misc";

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="relative px-6 py-32 sm:px-10 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] -translate-x-1/3 translate-y-1/4 rounded-full blur-[105px]"
        style={{
          background: "var(--color-brick-bright)",
          opacity: 0.25,
        }}
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Profiles</Eyebrow>

          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Find Me Online
          </h2>

          <p className="mt-6 max-w-xl text-[var(--color-linen-dim)]">
            The platforms where I solve problems, build projects, and share my
            work.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((profile, i) => (
            <Reveal key={profile.id} delay={i * 0.08}>
              <TiltCard
                glow={
                  i % 3 === 0
                    ? "jali"
                    : i % 3 === 1
                    ? "ochre"
                    : "brick"
                }
                className="flex h-[220px] flex-col justify-between p-7"
              >
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-linen)]">
                    {profile.platform}
                  </h3>

                  {/* <p className="mt-2 font-mono text-xs text-[var(--color-muted)]">
                    {profile.handle}
                  </p> */}

                  <p className="mt-5 text-sm leading-relaxed text-[var(--color-linen-dim)]">
                    {profile.description}
                  </p>
                </div>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-jali-bright)] transition-all duration-300 hover:gap-3"
                >
                  View Profile
                  <ExternalLink size={16} />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}