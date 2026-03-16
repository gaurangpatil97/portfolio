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
}

export function ProjectCard({ title, category, metric, description, tags }: ProjectCardProps) {
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
            whileHover={{ y: -5 }}
            className="relative w-full h-full rounded-2xl glass p-6 overflow-hidden flex flex-col min-w-[320px] cursor-pointer group"
        >
            {/* Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 255, 0.15), transparent 60%)`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 rounded-full border border-accent/30 text-accent bg-accent/10">
                        {category}
                    </span>
                    <span className="text-xs font-mono font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-md border border-green-400/30">
                        {metric}
                    </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-foreground/80 font-sans flex-grow mb-6">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-full bg-background/50 border border-foreground/10 text-foreground/70">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-foreground/10">
                    <button className="flex items-center gap-1.5 text-xs font-mono font-bold hover:text-accent transition-colors">
                        <Github size={14} />
                        GitHub
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-mono font-bold hover:text-accent transition-colors">
                        <ExternalLink size={14} />
                        Demo
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
