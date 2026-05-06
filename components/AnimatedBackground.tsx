"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Beam 1: main diagonal (top-right → bottom-left) ── */}
      <div className="beam beam-1-glow" />
      <div className="beam beam-1-core" />

      {/* ── Beam 2: counter diagonal ── */}
      <div className="beam beam-2-glow" />
      <div className="beam beam-2-core" />

      {/* ── Beam 3: subtle third ray ── */}
      <div className="beam beam-3-glow" />

      {/* ── Ambient corner glow — bottom-right ── */}
      <div
        className="absolute -bottom-48 -right-48 rounded-full"
        style={{
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(139,0,0,0.25) 0%, rgba(204,0,0,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Ambient corner glow — top-left ── */}
      <div
        className="absolute -top-32 -left-32 rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(220,20,60,0.20) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
