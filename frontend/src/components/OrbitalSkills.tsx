"use client";

import { motion } from "framer-motion";

const clusters = [
    {
        name: "MACHINE LEARNING",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "FinBERT"],
        position: "left-[150px] top-[120px]",
    },
    {
        name: "COMPUTER VISION",
        skills: ["YOLOv8", "OpenCV", "TFLite"],
        position: "left-[650px] top-[120px]",
    },
    {
        name: "ENGINEERING & DATA",
        skills: ["Python", "FastAPI", "Docker", "MySQL", "MongoDB", "Pandas", "Power BI"],
        position: "left-[400px] top-[400px]",
    },
];

export function OrbitalSkills() {
    return (
        <>
            {/* Desktop Orbital Layout */}
            <div className="relative w-full max-w-[800px] h-[500px] mx-auto hidden md:flex items-center justify-center mt-12 mb-20">

                {/* Second radial glow behind the skills section center node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(0,242,255,0.06) 0%, transparent 70%)" }} />

                {/* SVG Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block" viewBox="0 0 800 500">
                    <path d="M 400 250 Q 150 250 150 120" fill="none" stroke="rgba(0,242,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 400 250 Q 650 250 650 120" fill="none" stroke="rgba(0,242,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 400 250 L 400 400" fill="none" stroke="rgba(0,242,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Central Node */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-center backdrop-blur-md"
                    style={{
                        background: "rgba(0,242,255,0.08)",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05), 0 0 40px rgba(0,242,255,0.2)"
                    }}
                >
                    <span className="font-mono font-bold text-sm text-accent glow-text">CORE</span>
                    <span className="font-mono font-bold text-sm text-accent glow-text">STACK</span>
                </motion.div>

                {/* Satellite Clusters */}
                {clusters.map((cluster) => (
                    <div
                        key={cluster.name}
                        className={`absolute flex flex-col items-center z-30 -translate-x-1/2 -translate-y-1/2 ${cluster.position}`}
                    >
                        <div className="font-heading font-bold text-sm tracking-wider text-[#E0E6ED] mb-4 bg-background/80 px-4 py-1 rounded-[24px] border border-white/5 backdrop-blur-sm">
                            {cluster.name}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center max-w-[250px]">
                            {cluster.skills.map((skill, j) => (
                                <div
                                    key={skill}
                                    style={{ animation: `float 3s ease-in-out infinite ${j * 0.2}s` }}
                                    className="px-3 py-1.5 rounded-[24px] glass text-xs font-mono whitespace-nowrap cursor-pointer text-[#94A3B8] hover:text-accent transition-all"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Stacked Layout */}
            <div className="flex flex-col gap-8 md:hidden w-full max-w-sm mx-auto mt-8">
                <div className="flex items-center justify-center mb-4 relative py-8">
                    {/* Second radial glow behind the skills section center node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(0,242,255,0.1) 0%, transparent 70%)" }} />
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-center backdrop-blur-md"
                        style={{
                            background: "rgba(0,242,255,0.08)",
                            boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05), 0 0 40px rgba(0,242,255,0.2)"
                        }}
                    >
                        <span className="font-mono font-bold text-sm text-accent glow-text">CORE</span>
                        <span className="font-mono font-bold text-sm text-accent glow-text">STACK</span>
                    </motion.div>
                </div>

                {clusters.map((cluster) => (
                    <div key={cluster.name} className="flex flex-col items-center text-center glass p-6 rounded-[24px]">
                        <div className="font-heading font-bold text-sm tracking-wider text-[#A5C0EE] mb-4">
                            {cluster.name}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {cluster.skills.map((skill, j) => (
                                <div
                                    key={skill}
                                    style={{ animation: `float 3s ease-in-out infinite ${j * 0.2}s` }}
                                    className="px-3 py-1.5 rounded-[24px] glass text-xs font-mono text-[#94A3B8]"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
