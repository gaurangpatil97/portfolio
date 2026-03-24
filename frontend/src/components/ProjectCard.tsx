"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    metric: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    isDimmed?: boolean;
    isHighlighted?: boolean;
}

export function ProjectCard({ title, category, metric, description, tags, github, demo, isDimmed, isHighlighted }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            animate={{
                scale: isHighlighted ? 1.02 : 1,
                filter: isDimmed ? "blur(1.5px)" : "blur(0px)",
                opacity: isDimmed ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full rounded-2xl glass p-[28px] overflow-hidden flex flex-col min-w-[320px] cursor-pointer group cursor-hover"
        >
            {/* Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 255, 0.12), transparent 60%)`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 rounded-full border border-accent/40 text-accent bg-accent/10">
                        {category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00F2FF] bg-[rgba(0,242,255,0.15)] px-2 py-1 rounded-md border border-[#00F2FF]/40">
                        {metric}
                    </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-[#94A3B8] font-sans flex-grow mb-6">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] px-[10px] py-[3px] rounded-[4px] bg-[rgba(0,242,255,0.06)] border border-[rgba(0,242,255,0.2)] text-foreground/90">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-6">
                    <a
                        href={github || "#"}
                        target={github ? "_blank" : undefined}
                        rel={github ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-1.5 font-mono text-xs font-bold border border-foreground/20 text-[#94A3B8] hover:border-[#00F2FF] hover:text-[#00F2FF] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)] px-4 py-2 rounded transition-all bg-background/50 cursor-hover"
                    >
                        <Github size={14} />
                        GitHub
                    </a>
                    <a
                        href={demo || "#"}
                        target={demo ? "_blank" : undefined}
                        rel={demo ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-1.5 font-mono text-xs font-bold border border-foreground/20 text-[#94A3B8] hover:border-[#00F2FF] hover:text-[#00F2FF] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)] px-4 py-2 rounded transition-all bg-background/50 cursor-hover"
                    >
                        <ExternalLink size={14} />
                        Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
