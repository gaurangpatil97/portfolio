"use client";

import { motion } from "framer-motion";

const clusters = [
    {
        name: "MACHINE LEARNING",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "FinBERT"],
        position: "top-0 left-0 -translate-x-12 -translate-y-4 md:-translate-x-1/4 md:-translate-y-1/4",
        lineStyle: "absolute w-[45%] h-[45%] border-t border-l border-dashed border-accent/40 top-[10%] left-[10%] rounded-tl-full pointer-events-none hidden md:block",
    },
    {
        name: "COMPUTER VISION",
        skills: ["YOLOv8", "OpenCV", "TFLite"],
        position: "top-0 right-0 translate-x-12 -translate-y-4 md:translate-x-1/4 md:-translate-y-1/4",
        lineStyle: "absolute w-[45%] h-[45%] border-t border-r border-dashed border-accent/40 top-[10%] right-[10%] rounded-tr-full pointer-events-none hidden md:block",
    },
    {
        name: "ENGINEERING & DATA",
        skills: ["Python", "FastAPI", "Docker", "MySQL", "MongoDB", "Pandas", "Power BI"],
        position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-12 md:translate-y-1/4",
        lineStyle: "absolute w-0 h-[45%] border-l border-dashed border-accent/40 bottom-[10%] left-1/2 pointer-events-none hidden md:block",
    },
];

export function OrbitalSkills() {
    return (
        <>
            {/* Desktop Orbital Layout */}
            <div className="relative w-full max-w-[800px] h-[500px] mx-auto hidden md:flex items-center justify-center mt-12 mb-20">

                {/* Connection Lines (SVGs or borders) */}
                {clusters.map((cluster, i) => (
                    <div key={i} className={cluster.lineStyle} />
                ))}

                {/* Central Node */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 10px rgba(0,242,255,0.4)", "0 0 30px rgba(0,242,255,0.8)", "0 0 10px rgba(0,242,255,0.4)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 w-40 h-40 rounded-full glass border border-accent flex flex-col items-center justify-center text-center shadow-[0_0_20px_var(--accent-glow)] bg-background/80"
                >
                    <span className="font-mono font-bold text-lg text-accent glow-text">CORE</span>
                    <span className="font-mono font-bold text-lg text-accent glow-text">STACK</span>
                </motion.div>

                {/* Satellite Clusters */}
                {clusters.map((cluster) => (
                    <div
                        key={cluster.name}
                        className={`absolute flex flex-col items-center z-30 ${cluster.position}`}
                    >
                        <div className="font-heading font-bold text-sm tracking-wider text-foreground mb-4 bg-background/80 px-4 py-1 rounded-full border border-foreground/10 backdrop-blur-sm">
                            {cluster.name}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center max-w-[250px]">
                            {cluster.skills.map((skill, j) => (
                                <motion.div
                                    key={skill}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,242,255,0.6)", borderColor: "#00F2FF" }}
                                    className="px-3 py-1.5 rounded-full glass text-xs font-mono whitespace-nowrap cursor-pointer border-accent/30 text-foreground/80 hover:text-accent transition-colors"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Stacked Layout */}
            <div className="flex flex-col gap-8 md:hidden w-full max-w-sm mx-auto mt-8">
                <div className="flex items-center justify-center mb-4">
                    <motion.div
                        animate={{ boxShadow: ["0 0 10px rgba(0,242,255,0.4)", "0 0 20px rgba(0,242,255,0.6)", "0 0 10px rgba(0,242,255,0.4)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-3 rounded-full border border-accent text-accent font-mono font-bold"
                    >
                        CORE STACK
                    </motion.div>
                </div>

                {clusters.map((cluster) => (
                    <div key={cluster.name} className="flex flex-col items-center text-center glass p-6 rounded-2xl border-accent/20">
                        <div className="font-heading font-bold text-sm tracking-wider text-accent mb-4">
                            {cluster.name}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {cluster.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="px-3 py-1.5 rounded-full border border-accent/30 bg-background/50 text-xs font-mono text-foreground/80"
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
