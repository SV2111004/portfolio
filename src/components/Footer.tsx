import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { socialLinks } from "../data/misc";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-linen)]/10 px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Shubhra Varshney. Built with React & Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href={socialLinks.github} data-cursor-hover aria-label="GitHub" className="text-[var(--color-linen-dim)] hover:text-[var(--color-jali-bright)]">
            <GithubIcon size={16} />
          </a>
          <a href={socialLinks.linkedin} data-cursor-hover aria-label="LinkedIn" className="text-[var(--color-linen-dim)] hover:text-[var(--color-jali-bright)]">
            <LinkedinIcon size={16} />
          </a>
          <a href={socialLinks.email} data-cursor-hover aria-label="Email" className="text-[var(--color-linen-dim)] hover:text-[var(--color-jali-bright)]">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
