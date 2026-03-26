"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Wrench, Github, Terminal, Database, Box, Cpu, Cloud, Layers, Layout, Server, Settings, Shield, Zap, Globe, GitBranch, Key, FileCode2, Command } from "lucide-react";

const toolsData = [
  { icon: Layout, color: "56, 189, 248" },
  { icon: Terminal, color: "55, 118, 171" },
  { icon: Server, color: "0, 59, 87" },
  { icon: Database, color: "51, 103, 145" },
  { icon: Box, color: "255, 255, 255" },
  { icon: Cloud, color: "66, 133, 244" },
  { icon: Layers, color: "255, 153, 0" },
  { icon: Github, color: "255, 255, 255" },
  { icon: GitBranch, color: "240, 80, 50" },
  { icon: Globe, color: "9, 46, 32" },
  { icon: Shield, color: "20, 255, 100" },
  { icon: Zap, color: "255, 222, 0" },
  { icon: Cpu, color: "0, 242, 255" },
  { icon: Key, color: "255, 100, 100" },
  { icon: Settings, color: "200, 200, 200" },
  { icon: FileCode2, color: "228, 77, 38" },
  { icon: Command, color: "255, 255, 255" }
];

// Duplicate to ensure seamless looping (4 sets)
const duplicatedTools = [...toolsData, ...toolsData, ...toolsData, ...toolsData];

export function ToolsInventory() {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  
  // Ref for the container to measure its width
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;
    
    // We duplicated the tools 4 times, so wrap width is 1/4 of the total scroll width.
    const wrapWidth = containerRef.current.scrollWidth / 4;
    
    // velocity px per frame assuming 16ms per frame = 60fps limit approx.
    const currentVelocity = isHovered ? 0.25 : 0.8;
    const moveBy = currentVelocity * (delta / 16);
    
    let newX = baseX.get() - moveBy;
    
    // Wrap around gracefully
    if (newX <= -wrapWidth) {
      newX += wrapWidth;
    }
    
    baseX.set(newX);
  });

  return (
    <section className="w-full relative overflow-hidden flex flex-col items-center py-[100px]">
      <div className="flex items-center gap-2 mb-4 border border-white/5 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-md z-10 transition-colors hover:border-accent/40 cursor-hover">
        <Wrench size={12} className="text-[#F05032]" />
        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#E0E6ED] uppercase">
          Tools Inventory
        </span>
      </div>

      <div 
        className="w-full relative py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div 
          ref={containerRef}
          className="flex gap-2 w-fit pl-2"
          style={{ x: baseX }}
        >
          {duplicatedTools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="group relative flex items-center justify-center flex-shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-[12px] transition-all duration-300 cursor-pointer cursor-hover"
                style={{ width: 44, height: 44 }}
              >
                {/* 3D Reflection Effect */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-b-xl pointer-events-none" />
                
                {/* Brand Color Glow */}
                <div 
                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"
                  style={{ background: `rgba(${tool.color}, 0.35)` }}
                />
                
                {/* Inner Glow Border on Hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 12px rgba(${tool.color}, 0.4)` }}
                />
                
                <Icon size={18} className="group-hover:text-white transition-colors duration-300 relative z-10" style={{ color: "rgba(255,255,255,0.6)" }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
