"use client";

// Technique: giant CSS ellipse blobs with extreme blur + mix-blend-mode screen
// This is how upgraide.ai achieves their aurora effect — no canvas, no lines.
// On a black background, mix-blend-mode:screen lets the light "add" naturally.

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── BLOB 1 — main aurora band, lower-center ── */}
      {/* Giant horizontal ellipse, slow drift up/down */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "65%",
          width: "140vw",
          height: "70vh",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(220,20,60,0.75) 0%, rgba(180,0,0,0.50) 30%, rgba(100,0,0,0.20) 60%, transparent 80%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          animation: "aurora1 28s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── BLOB 2 — upper-right band, counter-phase ── */}
      <div
        style={{
          position: "absolute",
          left: "70%",
          top: "30%",
          width: "120vw",
          height: "60vh",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(200,0,0,0.65) 0%, rgba(150,0,0,0.40) 35%, rgba(80,0,0,0.15) 65%, transparent 82%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          animation: "aurora2 36s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── BLOB 3 — left accent blob ── */}
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "55%",
          width: "80vw",
          height: "50vh",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(180,0,20,0.55) 0%, rgba(120,0,0,0.30) 40%, transparent 75%)",
          filter: "blur(110px)",
          mixBlendMode: "screen",
          animation: "aurora3 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── BLOB 4 — subtle top glow for depth ── */}
      <div
        style={{
          position: "absolute",
          left: "40%",
          top: "15%",
          width: "90vw",
          height: "40vh",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(160,0,0,0.40) 0%, rgba(80,0,0,0.15) 50%, transparent 75%)",
          filter: "blur(120px)",
          mixBlendMode: "screen",
          animation: "aurora1 45s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
    </div>
  );
}
