"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function ParallaxField() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 55, damping: 22, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 55, damping: 22, mass: 0.8 });

  const orbX = useTransform(sx, [-1, 1], [-34, 34]);
  const orbY = useTransform(sy, [-1, 1], [-24, 24]);
  const gridX = useTransform(sx, [-1, 1], [12, -12]);
  const gridY = useTransform(sy, [-1, 1], [8, -8]);

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
      <motion.div className="hero-orb hero-orb-one" style={{ x: orbX, y: orbY }} />
      <motion.div className="hero-orb hero-orb-two" style={{ x: useTransform(sx, [-1, 1], [18, -18]), y: useTransform(sy, [-1, 1], [12, -12]) }} />
      <motion.div className="hero-grid" style={{ x: gridX, y: gridY }} />
      <motion.div className="hero-cross hero-cross-one" style={{ x: useTransform(sx, [-1, 1], [20, -20]), y: useTransform(sy, [-1, 1], [18, -18]) }} />
      <motion.div className="hero-cross hero-cross-two" style={{ x: useTransform(sx, [-1, 1], [-12, 12]), y: useTransform(sy, [-1, 1], [20, -20]) }} />
    </div>
  );
}
