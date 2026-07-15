import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: "jali" | "ochre" | "brick";
}

const glowColor: Record<string, string> = {
  jali: "rgba(69,168,151,0.18)",
  ochre: "rgba(240,190,95,0.16)",
  brick: "rgba(217,114,80,0.16)",
};

export default function TiltCard({ children, className, glow = "jali" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundImage: useTransform(
          [mx, my],
          ([x, y]) =>
            `radial-gradient(320px circle at ${Number(x) * 100}% ${Number(y) * 100}%, ${glowColor[glow]}, transparent 70%)`
        ),
      }}
      className={cn(
        "glass relative rounded-2xl border transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
