'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.touches[0].clientX - rect.left;
        targetMouseY = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    handleResize();

    // Data points & pathways
    const layers = 5;
    let time = 0;

    // Glowing energy nodes traveling into the portal
    interface Particle {
      angle: number;
      progress: number; // 0 to 1
      speed: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 24 }, () => ({
      angle: Math.random() * Math.PI * 2,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
      size: 1.5 + Math.random() * 2,
      color: Math.random() > 0.4 ? 'rgba(96, 165, 250, ' : 'rgba(59, 130, 246, ',
    }));

    const render = () => {
      time += 0.015;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouseX - width / 2) * 0.15;
      const centerY = height / 2 + (mouseY - height / 2) * 0.15;

      // Outer bounding field
      const maxRadius = Math.min(width, height) * 0.44;

      // 1. Draw concentric perspective architectural frames ("Portals / Apertures")
      for (let i = 1; i <= layers; i++) {
        const tLayer = i / layers;
        const currentRadius = maxRadius * (0.2 + tLayer * 0.8);
        const shiftX = (mouseX - width / 2) * (1 - tLayer) * 0.25;
        const shiftY = (mouseY - height / 2) * (1 - tLayer) * 0.25;

        const posX = centerX + shiftX;
        const posY = centerY + shiftY;

        ctx.save();
        ctx.beginPath();
        // Modern rounded polygon / strategic gateway shape
        const sides = 8;
        for (let s = 0; s < sides; s++) {
          const theta = (s * 2 * Math.PI) / sides + time * 0.03 * (i % 2 === 0 ? 1 : -1);
          const px = posX + Math.cos(theta) * currentRadius;
          const py = posY + Math.sin(theta) * (currentRadius * 0.72); // perspective squish
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 + tLayer * 0.14})`;
        ctx.lineWidth = i === layers || i === 2 ? 1.5 : 0.8;
        ctx.stroke();

        // Subtle corner crosshairs on outer layers
        if (i >= 3) {
          ctx.fillStyle = `rgba(148, 163, 184, ${0.3 + tLayer * 0.3})`;
          const crossDist = currentRadius * 0.98;
          for (let s = 0; s < sides; s += 2) {
            const theta = (s * 2 * Math.PI) / sides + time * 0.03 * (i % 2 === 0 ? 1 : -1);
            const cx = posX + Math.cos(theta) * crossDist;
            const cy = posY + Math.sin(theta) * (crossDist * 0.72);
            ctx.fillRect(cx - 1.5, cy - 1.5, 3, 3);
          }
        }
        ctx.restore();
      }

      // 2. Draw converging perspective vector lines ("Strategic Paths In")
      const radialLines = 12;
      for (let r = 0; r < radialLines; r++) {
        const theta = (r * 2 * Math.PI) / radialLines;
        const outerX = centerX + Math.cos(theta) * maxRadius * 1.35;
        const outerY = centerY + Math.sin(theta) * (maxRadius * 0.98);
        const innerX = centerX + Math.cos(theta) * (maxRadius * 0.18);
        const innerY = centerY + Math.sin(theta) * (maxRadius * 0.14);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(outerX, outerY);
        ctx.lineTo(innerX, innerY);
        ctx.strokeStyle =
          r % 3 === 0
            ? 'rgba(59, 130, 246, 0.22)'
            : 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = r % 3 === 0 ? 1.2 : 0.6;
        if (r % 2 === 0) ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();
      }

      // 3. Animated pulse particles traveling down the vectors
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Travel from outer perimeter inward into the core aperture
        const rDist = maxRadius * (1.1 - p.progress * 0.9);
        const px = centerX + Math.cos(p.angle) * rDist;
        const py = centerY + Math.sin(p.angle) * (rDist * 0.72);
        const alpha = Math.sin(p.progress * Math.PI);

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha.toFixed(2)})`;
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // 4. Center Focal Core: The Gateway / "Way In"
      ctx.save();
      const corePulse = Math.sin(time * 2) * 4;
      const coreRadius = maxRadius * 0.14 + corePulse;

      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius * 2
      );
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.35)');
      grad.addColorStop(0.5, 'rgba(37, 99, 235, 0.1)');
      grad.addColorStop(1, 'rgba(7, 10, 17, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Sharp central gateway diamond
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - coreRadius);
      ctx.lineTo(centerX + coreRadius * 1.2, centerY);
      ctx.lineTo(centerX, centerY + coreRadius);
      ctx.lineTo(centerX - coreRadius * 1.2, centerY);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Small central point of entry
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#60a5fa';
      ctx.shadowColor = '#60a5fa';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-auto"
        aria-hidden="true"
      />
      {/* Subtle architectural HUD labels */}
      <div className="absolute top-4 start-4 sm:top-6 sm:start-6 text-[10px] tracking-widest uppercase font-mono text-slate-500 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 pointer-events-none">
        VECTOR // WAY_IN_01
      </div>
      <div className="absolute bottom-4 end-4 sm:bottom-6 sm:end-6 text-[10px] tracking-widest uppercase font-mono text-blue-400/80 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded border border-blue-500/20 pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        PATHWAY DYNAMICS ACTIVE
      </div>
    </div>
  );
}
