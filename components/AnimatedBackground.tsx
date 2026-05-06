"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Beam 1 — main bright ray, top-right → bottom-left ── */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "320vw",
          height: "10px",
          background:
            "linear-gradient(90deg, transparent 5%, rgba(139,0,0,0.25) 22%, rgba(204,0,0,0.85) 42%, rgba(220,20,60,1) 50%, rgba(204,0,0,0.85) 58%, rgba(139,0,0,0.25) 78%, transparent 95%)",
          filter: "blur(55px)",
          animation: "beamSway1 22s ease-in-out infinite",
          animationFillMode: "both",
          willChange: "transform",
        }}
      />

      {/* ── Beam 2 — secondary ray, different angle ── */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "280vw",
          height: "7px",
          background:
            "linear-gradient(90deg, transparent 10%, rgba(139,0,0,0.20) 28%, rgba(204,0,0,0.70) 46%, rgba(204,0,0,0.70) 54%, rgba(139,0,0,0.20) 72%, transparent 90%)",
          filter: "blur(75px)",
          animation: "beamSway2 32s ease-in-out infinite",
          animationFillMode: "both",
          willChange: "transform",
        }}
      />

      {/* ── Beam 3 — subtle third ray for depth ── */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "260vw",
          height: "6px",
          background:
            "linear-gradient(90deg, transparent 15%, rgba(220,20,60,0.15) 30%, rgba(220,20,60,0.55) 48%, rgba(220,20,60,0.55) 52%, rgba(220,20,60,0.15) 70%, transparent 85%)",
          filter: "blur(90px)",
          animation: "beamSway3 28s ease-in-out infinite",
          animationFillMode: "both",
          willChange: "transform",
        }}
      />

      {/* ── Soft ambient glow — bottom-right corner ── */}
      <div
        className="absolute -bottom-60 -right-60 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,0,0,0.22) 0%, rgba(204,0,0,0.08) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Soft ambient glow — top-left corner ── */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220,20,60,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
