"use client";

import { useEffect, useRef } from "react";

interface Wave {
  y: number;         // centre Y (0–1 fraction of height)
  amplitude: number; // height of wave (0–1 fraction of height)
  frequency: number; // sine cycles across screen (low = fat curves)
  phase: number;     // initial phase offset
  speed: number;     // phase increment per frame (small = slow)
  r: number;
  g: number;
  b: number;
}

// Fat, slow aurora waves — like upgraide.ai but in red
const WAVES: Wave[] = [
  { y: 0.44, amplitude: 0.32, frequency: 0.45, phase: 0.0, speed: 0.004, r: 220, g: 5,  b: 5  },
  { y: 0.65, amplitude: 0.28, frequency: 0.38, phase: 1.9, speed: 0.003, r: 200, g: 0,  b: 0  },
  { y: 0.26, amplitude: 0.22, frequency: 0.55, phase: 3.1, speed: 0.005, r: 180, g: 0,  b: 8  },
];

// 6 stacked layers per wave: very wide+faint → thin+bright
// "lighter" compositing makes colours add up naturally on black
const LAYERS = [
  { lw: 700, a: 0.055 },
  { lw: 350, a: 0.090 },
  { lw: 160, a: 0.150 },
  { lw: 60,  a: 0.300 },
  { lw: 18,  a: 0.600 },
  { lw: 3.5, a: 0.920 },
];

function buildPoints(wave: Wave, w: number, h: number, tick: number) {
  const STEPS = 120;
  const pts: [number, number][] = [];
  for (let i = 0; i <= STEPS; i++) {
    const x = (i / STEPS) * w;
    const t =
      (i / STEPS) * Math.PI * 2 * wave.frequency +
      wave.phase +
      tick * wave.speed;
    pts.push([x, wave.y * h + Math.sin(t) * wave.amplitude * h]);
  }
  return pts;
}

function tracePath(
  ctx: CanvasRenderingContext2D,
  pts: [number, number][]
) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) * 0.5;
    const my = (pts[i][1] + pts[i + 1][1]) * 0.5;
    ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
  }
  ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    let tick = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Additive blending: colours accumulate like real light on black
      ctx.globalCompositeOperation = "lighter";

      for (const wave of WAVES) {
        const pts = buildPoints(wave, w, h, tick);
        const { r, g, b } = wave;

        for (const { lw, a } of LAYERS) {
          ctx.save();
          tracePath(ctx, pts);
          ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
          ctx.lineWidth = lw;
          ctx.lineJoin = "round";
          ctx.lineCap = "butt";
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.globalCompositeOperation = "source-over";

      tick++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Canvas: fat aurora wave ribbons */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient corner glows */}
      <div
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -bottom-48 -right-48 rounded-full"
          style={{
            width: 800,
            height: 800,
            background:
              "radial-gradient(circle, rgba(120,0,0,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -top-36 -left-36 rounded-full"
          style={{
            width: 650,
            height: 650,
            background:
              "radial-gradient(circle, rgba(200,10,10,0.16) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>
    </>
  );
}
