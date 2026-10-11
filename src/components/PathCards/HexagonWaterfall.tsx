"use client";

import { useEffect, useRef } from "react";

/* ── Lightning bolt data ─────────────────────────────────────── */
interface Bolt {
  pts: [number, number][];
  isBranch: boolean;
  birthProg: number; // progressive stagger (0..0.1)
}

// Recursive midpoint displacement for authentic, non-sporadic fractal lightning
function generateFractalPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  depth: number,
  displacement: number
): [number, number][] {
  if (depth <= 0) {
    return [
      [x1, y1],
      [x2, y2],
    ];
  }

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 2) {
    return [
      [x1, y1],
      [x2, y2],
    ];
  }

  // Perpendicular unit vector
  const nx = -dy / len;
  const ny = dx / len;

  // Controlled, natural displacement
  const offset = (Math.random() - 0.5) * 2 * displacement;
  const dispX = midX + nx * offset;
  const dispY = midY + ny * offset;

  const left = generateFractalPath(x1, y1, dispX, dispY, depth - 1, displacement * 0.54);
  const right = generateFractalPath(dispX, dispY, x2, y2, depth - 1, displacement * 0.54);

  return [...left.slice(0, -1), ...right];
}

export default function GoldBrushFill() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf: number;
    let hovered = false;
    let p = 0;
    let sheenT = 0;
    let frameCount = 0;
    let arrowX = 0;
    let arrowY = 0;
    let bolts: Bolt[] = [];

    /* ── sizing ───────────────────────────────────────────── */
    const resize = () => {
      const r = parent.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      syncArrow(r);
    };

    const syncArrow = (r: DOMRect) => {
      const el = parent.querySelector(".path-arrow");
      if (el) {
        const a = el.getBoundingClientRect();
        arrowX = a.left + a.width / 2 - r.left;
        arrowY = a.top + a.height / 2 - r.top;
      } else {
        arrowX = r.width - 54;
        arrowY = 54;
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    /* ── coherent fractal bolt generation (once per hover) ─ */
    const genLightning = (w: number, h: number) => {
      bolts = [];

      // 4 purposeful lightning strike destinations from arrow
      const targets: { tgt: [number, number]; branches: number }[] = [
        // Primary long trunk across diagonal to bottom-left
        { tgt: [w * 0.08, h * 0.9], branches: 2 },
        // Secondary trunk reaching towards title/mid-left
        { tgt: [w * 0.05, h * 0.44], branches: 1 },
        // Downward trunk reaching south-center
        { tgt: [w * 0.48, h * 0.94], branches: 1 },
        // Upper arc reaching towards top-left
        { tgt: [w * 0.22, h * 0.12], branches: 1 },
      ];

      targets.forEach((item, tIdx) => {
        const tx = item.tgt[0];
        const ty = item.tgt[1];
        const dx = tx - arrowX;
        const dy = ty - arrowY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Fractal main trunk
        const trunkPts = generateFractalPath(arrowX, arrowY, tx, ty, 4, dist * 0.16);
        bolts.push({
          pts: trunkPts,
          isBranch: false,
          birthProg: tIdx * 0.02,
        });

        // 1-2 distinct acute branch forks
        for (let b = 0; b < item.branches; b++) {
          const ratio = (b + 1) / (item.branches + 1) * 0.5 + 0.25;
          const ptIdx = Math.min(
            trunkPts.length - 2,
            Math.max(2, Math.floor(trunkPts.length * ratio))
          );
          const origin = trunkPts[ptIdx];
          const trunkAngle = Math.atan2(dy, dx);
          const branchAngle = trunkAngle + (b % 2 === 0 ? 0.48 : -0.48);
          const branchLen = dist * (0.28 + Math.random() * 0.12);

          const btx = origin[0] + Math.cos(branchAngle) * branchLen;
          const bty = origin[1] + Math.sin(branchAngle) * branchLen;

          const branchPts = generateFractalPath(
            origin[0],
            origin[1],
            btx,
            bty,
            3,
            branchLen * 0.18
          );

          bolts.push({
            pts: branchPts,
            isBranch: true,
            birthProg: tIdx * 0.02 + 0.03,
          });
        }
      });
    };

    /* ── events ───────────────────────────────────────────── */
    let lastTime = performance.now();

    const enter = () => {
      hovered = true;
      lastTime = performance.now();
      const r = parent.getBoundingClientRect();
      syncArrow(r);
      genLightning(r.width, r.height);
    };

    const leave = () => {
      hovered = false;
    };

    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);

    /* ── render loop ──────────────────────────────────────── */
    const draw = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      const r = parent.getBoundingClientRect();
      const w = r.width,
        h = r.height;
      syncArrow(r);
      frameCount++;

      // Smooth time-based fill: ~0.9s to full 100% solid gold
      if (hovered) {
        p = Math.min(1, p + dt / 0.9);
      } else {
        p = Math.max(0, p - dt / 0.35);
      }

      ctx.clearRect(0, 0, w, h);

      if (p > 0.001) {
        sheenT += 0.008;
        const alpha = Math.min(1, p * 4.5);

        ctx.save();
        ctx.globalAlpha = alpha;

        /* ── metallic gold gradient ────────────────────── */
        const gg = ctx.createLinearGradient(0, 0, w, h);
        gg.addColorStop(0, "#FFECA2");
        gg.addColorStop(0.22, "#FFD252");
        gg.addColorStop(0.52, "#FFBA24");
        gg.addColorStop(0.82, "#E08E0C");
        gg.addColorStop(1, "#BD6800");

        /* ── 1. radial gold surge expanding from arrow ──── */
        const fillR = p * Math.max(w, h) * 1.85;
        const fillA = Math.min(1, p * 2.2);
        const rg = ctx.createRadialGradient(
          arrowX,
          arrowY,
          0,
          arrowX,
          arrowY,
          Math.max(fillR, 1)
        );
        rg.addColorStop(0, `rgba(255,186,36,${fillA})`);
        rg.addColorStop(0.5, `rgba(255,210,66,${fillA * 0.9})`);
        rg.addColorStop(0.85, `rgba(224,142,12,${fillA * 0.65})`);
        rg.addColorStop(1, "rgba(189,104,0,0)");
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, w, h);

        /* ── 2. solid gold seal (fills 100% of tile) ───── */
        if (p > 0.35) {
          const sa = Math.min(1, (p - 0.35) / 0.3);
          ctx.save();
          ctx.globalAlpha = alpha * sa;
          ctx.fillStyle = gg;
          ctx.fillRect(0, 0, w, h);
          ctx.restore();
        }

        /* ── 3. lightning bolts: natural, non-sporadic, disappear once filled ── */
        // Bolts are brilliant during the initial strike (p: 0..0.25)
        // Then smoothly dissolve into the gold fill (p: 0.25..0.55)
        // Once p >= 0.55, bolts are completely gone (visibility = 0)
        const boltVis = hovered
          ? p < 0.25
            ? 1
            : Math.max(0, 1 - (p - 0.25) / 0.3)
          : 0;

        if (boltVis > 0.005) {
          // Subtle high-voltage electric crackle without jittering the line coordinates
          const electricShimmer = 0.92 + 0.08 * Math.sin(frameCount * 0.9);

          for (const b of bolts) {
            // Lightning strikes forward rapidly
            const strikeProgress = Math.min(1, Math.max(0, (p - b.birthProg) / 0.16));
            if (strikeProgress <= 0) continue;

            const ptCount = Math.max(2, Math.floor(b.pts.length * strikeProgress));

            // Wide golden electrical glow aura
            ctx.beginPath();
            ctx.moveTo(b.pts[0][0], b.pts[0][1]);
            for (let i = 1; i < ptCount; i++) ctx.lineTo(b.pts[i][0], b.pts[i][1]);
            ctx.strokeStyle = `rgba(255,186,36,${boltVis * 0.5 * electricShimmer})`;
            ctx.lineWidth = b.isBranch ? 4 : 7;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.shadowColor = "rgba(255,186,36,0.9)";
            ctx.shadowBlur = 18;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Intense gold beam
            ctx.beginPath();
            ctx.moveTo(b.pts[0][0], b.pts[0][1]);
            for (let i = 1; i < ptCount; i++) ctx.lineTo(b.pts[i][0], b.pts[i][1]);
            ctx.strokeStyle = `rgba(255,235,140,${boltVis * 0.85 * electricShimmer})`;
            ctx.lineWidth = b.isBranch ? 2 : 3.5;
            ctx.stroke();

            // Crisp white-hot electrical core
            ctx.beginPath();
            ctx.moveTo(b.pts[0][0], b.pts[0][1]);
            for (let i = 1; i < ptCount; i++) ctx.lineTo(b.pts[i][0], b.pts[i][1]);
            ctx.strokeStyle = `rgba(255,255,255,${boltVis * 0.98})`;
            ctx.lineWidth = b.isBranch ? 0.9 : 1.4;
            ctx.stroke();
          }
        }

        /* ── 4. origin flash at arrow ──────────────────── */
        if (p < 0.25) {
          const fa = Math.max(0, 1 - p * 4.5) * 0.9;
          const fg = ctx.createRadialGradient(
            arrowX,
            arrowY,
            0,
            arrowX,
            arrowY,
            90
          );
          fg.addColorStop(0, `rgba(255,255,255,${fa})`);
          fg.addColorStop(0.35, `rgba(255,230,160,${fa * 0.6})`);
          fg.addColorStop(1, "rgba(255,186,36,0)");
          ctx.fillStyle = fg;
          ctx.fillRect(arrowX - 90, arrowY - 90, 180, 180);
        }

        /* ── 5. satin specular sheen on filled gold surface ── */
        if (p > 0.4) {
          const sa2 = Math.min(0.2, (p - 0.4) * 0.35);
          const sx = ((sheenT % 2.4) - 0.7) * w;
          const sg = ctx.createLinearGradient(sx, 0, sx + w * 0.55, h);
          sg.addColorStop(0, "rgba(255,255,255,0)");
          sg.addColorStop(0.5, `rgba(255,255,255,${sa2})`);
          sg.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = sg;
          ctx.fillRect(0, 0, w, h);
        }

        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
