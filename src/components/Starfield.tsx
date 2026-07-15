import { useMemo } from "react";

function seeded(seed: number) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

interface StarfieldProps {
  count?: number;
  className?: string;
}

export default function Starfield({ count = 110, className }: StarfieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        x: seeded(i * 1.7) * 100,
        y: seeded(i * 2.3) * 100,
        size: 1.4 + seeded(i * 3.1) * 2.4,
        duration: 2.5 + seeded(i * 4.9) * 4,
        delay: -seeded(i * 5.3) * 6,
        baseOpacity: 0.5 + seeded(i * 7.7) * 0.5,
        tint:
          seeded(i * 6.1) > 0.85
            ? "var(--color-jali-bright)"
            : seeded(i * 6.1) > 0.7
            ? "var(--color-ochre-bright)"
            : "var(--color-linen)",
      })),
    [count]
  );

  return (
    <div className={className} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: s.tint,
            opacity: s.baseOpacity,
            boxShadow: `0 0 ${s.size * 4}px ${s.size * 1.2}px ${s.tint}`,
            animation: `twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
