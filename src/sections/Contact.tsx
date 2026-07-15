import { Mail, FileText, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { socialLinks } from "../data/misc";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 sm:px-10 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[115px]"
        style={{ background: "var(--color-dusk-bright)", opacity: 0.4 }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto">Contact</span>
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-balance font-display text-4xl font-medium text-[var(--color-linen)] sm:text-5xl">
            Let's build something worth shipping.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--color-linen-dim)]">
            Open to software engineering, backend, and cloud roles.
            Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="glass mx-auto mt-12 rounded-3xl p-8 sm:p-10"
            style={{ boxShadow: "var(--shadow-glow-dusk)" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href={socialLinks.email} variant="solid">
                <Send size={16} /> Message me
              </MagneticButton>
              {/* <MagneticButton href={socialLinks.resume} variant="outline">
                <FileText size={16} /> Resume
              </MagneticButton> */}
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 border-t border-[var(--color-linen)]/10 pt-8">
              <a
                href={socialLinks.github}
                data-cursor-hover
                aria-label="GitHub"
                className="text-[var(--color-linen-dim)] transition-colors hover:text-[var(--color-jali-bright)]"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                data-cursor-hover
                aria-label="LinkedIn"
                className="text-[var(--color-linen-dim)] transition-colors hover:text-[var(--color-jali-bright)]"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={socialLinks.email}
                data-cursor-hover
                aria-label="Email"
                className="text-[var(--color-linen-dim)] transition-colors hover:text-[var(--color-jali-bright)]"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
