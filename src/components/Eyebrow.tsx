export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-jali-bright)]">
      <span className="h-px w-8" style={{ background: "var(--color-jali-bright)", opacity: 0.6 }} />
      {children}
    </div>
  );
}
