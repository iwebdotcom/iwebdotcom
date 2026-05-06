"use client";

import { useEffect, useRef } from "react";

interface Wave {
  y: number;         // center Y (0–1 fraction of height)
  amplitude: number; // wave height (0–1 fraction of height)
  frequency: number; // cycles across screen width
  phase: number;     // initial phase offset
  speed: number;     // phase increment per frame
  r: number;
  g: number;
  b: number;
}

const WAVES: Wave[] = [
  { y: 0.38, amplitude: 0.20, frequency: 1.1, phase: 0.0, speed: 0.014, r: 220, g: 20,  b: 60  },
  { y: 0.62, amplitude: 0.24, frequency: 0.8, phase: 1.9, speed: 0.009, r: 204, g: 0,   b: 0   },
  { y: 0.22, amplitude: 0.13, frequency: 1.4, phase: 0.9, speed: 0.018, r: 200, g: 35,  b: 35  },
  { y: 0.76, amplitude: 0.17, frequency: 0.9, phase: 3.3, speed: 0.007, r: 160, g: 0,   b: 20  },
];

function buildPath(
  ctx: CanvasRenderingContext2D,
  wave: Wave,
  w: number,
  h: number,
  tick: number
) {
  const steps = 280;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    const t =
      (i / steps) * Math.PI * 2 * wave.frequency +
      wave.phase +
      tick * wave.speed;
    const y = wave.y * h + Math.sin(t) * wave.amplitude * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
}

function drawWave(
  ctx: CanvasRenderingContext2D,
  wave: Wave,
  w: number,
  h: number,
  tick: number
) {
  const { r, g, b } = wave;

  // Layer 1 — very wide outer glow
  ctx.save();
  buildPath(ctx, wave, w, h, tick);
  ctx.strokeStyle = `rgba(${r},${g},${b},0.06)`;
  ctx.lineWidth = 70;
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();

  // Layer 2 — medium glow
  ctx.save();
  buildPath(ctx, wave, w, h, tick);
  ctx.strokeStyle = `rgba(${r},${g},${b},0.16)`;
  ctx.lineWidth = 28;
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();

  // Layer 3 — inner glow
  ctx.save();
  buildPath(ctx, wave, w, h, tick);
  ctx.strokeStyle = `rgba(${r},${g},${b},0.40)`;
  ctx.lineWidth = 9;
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();

  // Layer 4 — bright core
  ctx.save();
  buildPath(ctx, wave, w, h, tick);
  ctx.strokeStyle = `rgba(${r},${g},${b},0.85)`;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();
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
      for (const wave of WAVES) {
        drawWave(ctx, wave, w, h, tick);
      }
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
      {/* Canvas: animated aurora waves */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient corner glows for depth */}
      <div
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -bottom-48 -right-48 rounded-full"
          style={{
            width: 750,
            height: 750,
            background:
              "radial-gradient(circle, rgba(139,0,0,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -top-36 -left-36 rounded-full"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(220,20,60,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>
    </>
  );
}
