"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function ParallaxField() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 48, damping: 24, mass: 0.9 });
  const sy = useSpring(y, { stiffness: 48, damping: 24, mass: 0.9 });

  const fieldX = useTransform(sx, [-1, 1], [-18, 18]);
  const fieldY = useTransform(sy, [-1, 1], [-12, 12]);
  const frameX = useTransform(sx, [-1, 1], [22, -22]);
  const frameY = useTransform(sy, [-1, 1], [18, -18]);
  const glyphX = useTransform(sx, [-1, 1], [7, -7]);
  const glyphY = useTransform(sy, [-1, 1], [5, -5]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const px = event.clientX / window.innerWidth - 0.5;
      const py = event.clientY / window.innerHeight - 0.5;
      x.set(px * 2);
      y.set(py * 2);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <div className="parallax-field" aria-hidden="true">
      <motion.div
        className="hero-architecture"
        style={{ x: fieldX, y: fieldY }}
      >
        <div className="hero-grid" />
        <div className="hero-scanline" />
      </motion.div>

      <motion.div
        className="hero-window-frame"
        style={{ x: frameX, y: frameY }}
      />

      <motion.div className="hero-glyph" style={{ x: glyphX, y: glyphY }}>
        <span className="hero-glyph-jp">二〇四〇</span>
        <span className="hero-glyph-sub">TOKYO / JAPAN</span>
      </motion.div>
    </div>
  );
}
