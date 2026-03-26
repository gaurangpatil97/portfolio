"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function MouseBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 20, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, rgba(0, 242, 255, 0.156), transparent 80%)`;

  return (
    <>
      {/* Global Mouse-Follow Spotlight */}
      <motion.div className="pointer-events-none fixed inset-0 z-[1]" style={{ background }} />
      {/* Blurred Blob 1 (Cyan) */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[#00F2FF] opacity-[0.26] blur-[160px] pointer-events-none z-0" />
      {/* Blurred Blob 2 (Deep Navy) */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[#000080] opacity-[0.26] blur-[160px] pointer-events-none z-0" />
    </>
  );
}
