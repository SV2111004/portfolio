import { useRef, type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  as?: ElementType;
  variant?: "solid" | "outline" | "ghost";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "solid",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm tracking-wide transition-colors duration-300 will-change-transform";
  const variants: Record<string, string> = {
    solid:
      "bg-[var(--color-jali-bright)] text-[var(--color-ink)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:bg-[var(--color-ochre-bright)]",
    outline:
      "border border-[var(--color-linen)]/25 text-[var(--color-linen)] hover:border-[var(--color-jali-bright)] hover:text-[var(--color-jali-bright)]",
    ghost: "text-[var(--color-linen)]/80 hover:text-[var(--color-ochre-bright)]",
  };

  const Comp = (href ? motion.a : motion.button) as ElementType;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor-hover
      className={cn(base, variants[variant], className)}
      style={{
        transition:
          "transform 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
        boxShadow: variant === "solid" ? "var(--shadow-glow-jali)" : undefined,
      }}
    >
      {children}
    </Comp>
  );
}
