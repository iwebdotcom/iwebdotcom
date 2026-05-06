"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Orb 1 — crimson, top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, #DC143C 0%, #8B0000 40%, transparent 70%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          animation: "drift1 30s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — vivid red, bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, #CC0000 0%, #8B0000 50%, transparent 70%)",
          filter: "blur(120px)",
          mixBlendMode: "screen",
          animation: "drift2 40s ease-in-out infinite",
        }}
      />

      {/* Orb 3 — dark red, center-right */}
      <div
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #8B0000 0%, #DC143C 30%, transparent 70%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          animation: "drift3 25s ease-in-out infinite",
          transform: "translateY(-50%)",
        }}
      />

      {/* Orb 4 — accent crimson, top-right */}
      <div
        className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, #DC143C 0%, transparent 70%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
          animation: "drift4 35s ease-in-out infinite",
        }}
      />
    </div>
  );
}
