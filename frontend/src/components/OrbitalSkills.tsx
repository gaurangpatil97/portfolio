"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const clusters = [
    {
        name: "FRONTEND SYSTEMS",
        skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Chrome Extensions", "Web3"],
        pos: { top: "5%", left: "5%" } as React.CSSProperties,
        floatY: [0, -18, 0] as number[],
        floatDuration: 3.0,
        floatDelay: 0,
    },
    {
        name: "BACKEND LOGIC",
        skills: ["Python / FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "REST API", "Docker"],
        pos: { top: "5%", right: "5%" } as React.CSSProperties,
        floatY: [0, -14, 0] as number[],
        floatDuration: 3.5,
        floatDelay: 0.6,
    },
    {
        name: "MACHINE LEARNING & AUTOMATION",
        skills: ["LLMs / GPT", "LangChain", "RAG", "Vector DB", "AI Agents"],
        pos: { bottom: "5%", left: "5%" } as React.CSSProperties,
        floatY: [0, -16, 0] as number[],
        floatDuration: 2.8,
        floatDelay: 1.0,
    },
    {
        name: "DESIGN",
        skills: ["Figma", "3D Design", "Mobile-First", "UI/UX"],
        pos: { bottom: "5%", right: "5%" } as React.CSSProperties,
        floatY: [0, -20, 0] as number[],
        floatDuration: 3.2,
        floatDelay: 0.3,
    },
];

export function OrbitalSkills() {
    const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);

    return (
        <>
            {/* Desktop Layout */}
            <div
                className="relative w-full hidden md:block mx-auto"
                style={{ minHeight: "480px", maxWidth: "1200px" }}
            >
                {/* ─── Central Hub Node ─── */}
                <div
                    className="absolute"
                    style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 140,
                        height: 140,
                        zIndex: 2,
                    }}
                >
                    {/* The circle */}
                    <div
                        className="w-full h-full rounded-full flex flex-col items-center justify-center text-center animate-hub-breathe"
                        style={{
                            background: "transparent",
                            border: "2px solid rgba(0,242,255,0.5)",
                        }}
                    >
                        <span className="font-mono font-bold" style={{ color: "#00F2FF", fontSize: "15px" }}>CORE</span>
                        <span className="font-mono font-bold" style={{ color: "#00F2FF", fontSize: "15px" }}>STACK</span>
                    </div>

                    {/* Orbiting white ball */}
                    <div className="orbit-ball" />
                </div>

                {/* ─── Floating Category Blocks ─── */}
                {clusters.map((cluster, idx) => (
                    <motion.div
                        key={cluster.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: cluster.floatY }}
                        transition={{
                            opacity: { duration: 0.6, delay: idx * 0.15 },
                            y: {
                                duration: cluster.floatDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: cluster.floatDelay,
                            },
                        }}
                        whileHover={{ scale: 1.03 }}
                        className="absolute flex flex-col"
                        style={{ ...cluster.pos, zIndex: 3, maxWidth: 320 }}
                        onMouseEnter={() => setHoveredCluster(cluster.name)}
                        onMouseLeave={() => setHoveredCluster(null)}
                    >
                        {/* Skill Pills */}
                        <div className="flex flex-wrap gap-[6px] mb-2" style={{ maxWidth: 300 }}>
                            {cluster.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="skill-pill rounded-lg font-['Inter',sans-serif] whitespace-nowrap cursor-pointer"
                                    style={{
                                        padding: "6px 12px",
                                        fontSize: "12px",
                                        fontWeight: 400,
                                        color: "white",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(12px)",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>

                        {/* Category Label */}
                        <span
                            className="font-mono uppercase tracking-[0.12em]"
                            style={{ fontSize: "10px", color: "#00F2FF", paddingLeft: "4px", marginTop: "8px" }}
                        >
                            {cluster.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Stacked Layout */}
            <div className="flex flex-col gap-10 md:hidden w-full max-w-sm mx-auto mt-4">
                {/* Center hub mobile */}
                <div className="flex items-center justify-center py-6">
                    <div
                        className="w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center text-center animate-hub-breathe"
                        style={{
                            background: "transparent",
                            border: "2px solid rgba(0,242,255,0.5)",
                        }}
                    >
                        <span className="font-mono font-bold text-base" style={{ color: "#00F2FF" }}>CORE</span>
                        <span className="font-mono font-bold text-base" style={{ color: "#00F2FF" }}>STACK</span>
                    </div>
                </div>

                {/* Mobile cluster cards */}
                {clusters.map((cluster) => (
                    <div key={cluster.name} className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-[10px] justify-center">
                            {cluster.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="skill-pill rounded-lg font-['Inter',sans-serif] whitespace-nowrap"
                                    style={{
                                        padding: "10px 18px",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        color: "white",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(12px)",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <span
                            className="font-mono uppercase tracking-[0.15em] text-center"
                            style={{ fontSize: "10px", color: "#00F2FF" }}
                        >
                            {cluster.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}
