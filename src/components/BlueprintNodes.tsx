import { useMemo } from "react";

/**
 * A few faint nodes joined by thin lines — a technical-blueprint texture,
 * not a starfield. Fully static (no motion, no twinkle) so it reads as
 * structure sitting quietly behind the content rather than decoration
 * competing with it.
 */
function seeded(seed: number) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

interface BlueprintNodesProps {
  count?: number;
  className?: string;
}

export default function BlueprintNodes({ count = 13, className }: BlueprintNodesProps) {
  const { nodes, lines } = useMemo(() => {
    const nodes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: 6 + seeded(i * 1.7) * 88,
      y: 6 + seeded(i * 2.3) * 88,
      r: 1.1 + seeded(i * 3.1) * 0.9,
    }));

    // Connect each node to its nearest neighbour only — keeps the line
    // count low (roughly one per node) and avoids a tangled web.
    const lines = nodes.map((node) => {
      let nearest = nodes[0];
      let best = Infinity;
      for (const other of nodes) {
        if (other.id === node.id) continue;
        const d = (other.x - node.x) ** 2 + (other.y - node.y) ** 2;
        if (d < best) {
          best = d;
          nearest = other;
        }
      }
      return { id: node.id, x1: node.x, y1: node.y, x2: nearest.x, y2: nearest.y };
    });

    return { nodes, lines };
  }, [count]);

  return (
    // Overall visibility is controlled by the wrapper's opacity (see
    // AmbientBackground) — keep the values in here fixed so that single
    // knob is the only place "how visible" gets decided.
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {lines.map((l) => (
        <line
          key={l.id}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="var(--color-jali-bright)"
          strokeWidth={0.06}
          opacity={0.5}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {nodes.map((n) => (
        <circle key={n.id} cx={n.x} cy={n.y} r={n.r * 0.2} fill="var(--color-linen)" opacity={0.55} />
      ))}
    </svg>
  );
}
