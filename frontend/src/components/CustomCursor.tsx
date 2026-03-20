"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Position for the trailing ring with spring physics
  const ringX = useSpring(0, { damping: 20, stiffness: 100 });
  const ringY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX - 16); // 16 is half the ring width
      ringY.set(e.clientY - 16);

      // Check for elements with cursor-hover class under the mouse
      const target = e.target as HTMLElement;
      const isOverInteractive = !!target?.closest(".cursor-hover") || 
                                !!target?.closest("button") || 
                                !!target?.closest("a") || 
                                !!target?.closest(".glass");
      setIsHovered(isOverInteractive);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [ringX, ringY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#00F2FF] rounded-full pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(0,0,0,0)" : "#00F2FF",
          border: isHovered ? "2px solid #00F2FF" : "0px solid #00F2FF",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-[32px] h-[32px] border border-[rgba(0,242,255,0.4)] rounded-full pointer-events-none z-[99998]"
        style={{
          x: ringX,
          y: ringY,
        }}
      />

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          * {
            cursor: auto !important;
          }
          .custom-cursor-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
