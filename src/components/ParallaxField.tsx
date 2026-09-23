"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function ParallaxField() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 48, damping: 24, mass: 0.9 });
  const sy = useSpring(y, { stiffness: 48, damping: 24, mass: 0.9 });

  const fieldX = useTransform(sx, [-1, 1], [-20, 20]);
  const fieldY = useTransform(sy, [-1, 1], [-14, 14]);
  const ringX = useTransform(sx, [-1, 1], [26, -26]);
  const ringY = useTransform(sy, [-1, 1], [20, -20]);
  const glyphX = useTransform(sx, [-1, 1], [8, -8]);
  const glyphY = useTransform(sy, [-1, 1], [6, -6]);
  const markerX = useTransform(sx, [-1, 1], [16, -16]);
  const markerY = useTransform(sy, [-1, 1], [12, -12]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const px = event.clientX / window.innerWidth - 0.5;
      const py = event.clientY / window.innerHeight - 0.5;
      x.set(px * 2);
      y.set(py * 2);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <div className="parallax-field" aria-hidden="true">
      <motion.div className="hero-architecture" style={{ x: fieldX, y: fieldY }}>
        <div className="hero-grid" />
        <div className="hero-scanline" />
      </motion.div>

      <motion.div className="hero-ring hero-ring-one" style={{ x: ringX, y: ringY }} />
      <motion.div
        className="hero-ring hero-ring-two"
        style={{ x: useTransform(sx, [-1, 1], [-18, 18]), y: useTransform(sy, [-1, 1], [14, -14]) }}
      />

      <motion.div className="hero-glyph" style={{ x: glyphX, y: glyphY }}>
        <span className="hero-glyph-jp">二〇四〇</span>
        <span className="hero-glyph-sub">東京 / 2040</span>
      </motion.div>

      <motion.div className="hero-coordinate hero-coordinate-one" style={{ x: markerX, y: markerY }}>
        <span>35°41′N</span>
        <i />
        <span>139°41′E</span>
      </motion.div>

      <motion.div
        className="hero-coordinate hero-coordinate-two"
        style={{ x: useTransform(sx, [-1, 1], [-12, 12]), y: useTransform(sy, [-1, 1], [-10, 10]) }}
      >
        <span>生活</span>
        <i />
        <span>記録</span>
      </motion.div>

      <div className="hero-horizon" />
    </div>
  );
}
