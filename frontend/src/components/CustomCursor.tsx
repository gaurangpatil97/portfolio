"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Position for the trailing ring with spring physics
  const ringX = useSpring(0, { damping: 25, stiffness: 200 });
  const ringY = useSpring(0, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX - 12);
      ringY.set(e.clientY - 12);

      const target = e.target as HTMLElement;
      const isSignalMode = document.documentElement.classList.contains('signal-mode');
      const isOverInteractive = !!target?.closest("button") || 
                                !!target?.closest("a") || 
                                !!target?.closest(".project-card") ||
                                !!target?.closest(".cursor-hover");
      setIsHovered(!isSignalMode && isOverInteractive);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [ringX, ringY]);

  const isSignalMode = typeof document !== 'undefined' && document.documentElement.classList.contains('signal-mode');

  return (
    <>
      <div className="custom-cursor-container">
        {/* Main Dot */}
        <motion.div
           className="fixed top-0 left-0 w-[8px] h-[8px] bg-[#00F2FF] rounded-full pointer-events-none z-[99999]"
           animate={{
             x: mousePosition.x - 4,
             y: mousePosition.y - 4,
             scale: isHovered ? 1.5 : 1,
           }}
           transition={{ 
             x: { type: "tween", duration: 0 },
             y: { type: "tween", duration: 0 },
             scale: { duration: 0.15, ease: "easeOut" }
           }}
        />

        {/* Outer Ring */}
        <motion.div
          className="fixed top-0 left-0 w-[24px] h-[24px] border border-[rgba(0,242,255,0.3)] rounded-full pointer-events-none z-[99999]"
          animate={{
            x: ringX.get(),
            y: ringY.get(),
            scale: isHovered ? 1.3 : 1,
            borderColor: isHovered ? "rgba(0,242,255,0.6)" : "rgba(0,242,255,0.3)",
            opacity: isSignalMode ? 0.2 : 1
          }}
          style={{
            x: ringX,
            y: ringY,
          }}
          transition={{
            scale: { duration: 0.15, ease: "easeOut" },
            borderColor: { duration: 0.15, ease: "easeOut" }
          }}
        />
      </div>

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
