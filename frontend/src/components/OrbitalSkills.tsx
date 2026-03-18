"use client";

import { motion } from "framer-motion";

const leftTop = {
    name: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "RAG", "Hugging Face", "LangChain"],
    floatY: [0, -18, 0] as number[],
    floatDuration: 6,
    floatDelay: 0,
};

const leftBottom = {
    name: "COMPUTER VISION",
    skills: ["YOLOv8/v11", "OpenCV", "TFLite", "MediaPipe", "Image Segmentation", "SIFT", "EasyOCR"],
    floatY: [0, -14, 0] as number[],
    floatDuration: 7,
    floatDelay: 0.6,
};

const rightTop = {
    name: "FULL STACK & MOBILE",
    skills: ["React Native", "Next.js", "FastAPI", "Docker", "AWS", "REST APIs", "Git", "MongoDB"],
    floatY: [0, -16, 0] as number[],
    floatDuration: 6.5,
    floatDelay: 1.0,
};

const rightBottom = {
    name: "DATA & PIPELINES",
    skills: ["SQL", "PostgreSQL", "Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib", "Streamlit"],
    floatY: [0, -20, 0] as number[],
    floatDuration: 7.5,
    floatDelay: 0.3,
};

const allClusters = [leftTop, leftBottom, rightTop, rightBottom];

function Cluster({
    cluster,
    idx,
}: {
    cluster: typeof leftTop;
    idx: number;
}) {
    return (
        <motion.div
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
            className="flex flex-col items-center"
            style={{ maxWidth: 300 }}
        >
            <div
                className="flex flex-wrap gap-[6px] mb-2 justify-center"
                style={{ maxWidth: 300 }}
            >
                {cluster.skills.map((skill) => (
                    <div
                        key={skill}
                        className="skill-pill rounded-lg font-['Inter',sans-serif] whitespace-nowrap cursor-pointer"
                        style={{
                            padding: "8px 18px",
                            fontSize: "13px",
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
            <span
                className="font-mono uppercase tracking-[0.12em] text-center"
                style={{ fontSize: "10px", color: "#00F2FF", marginTop: "8px" }}
            >
                {cluster.name}
            </span>
        </motion.div>
    );
}

export function OrbitalSkills() {
    return (
        <>
            {/* Desktop Flexbox Layout */}
            <div
                className="hidden md:flex items-center justify-center mx-auto"
                style={{ gap: 60, minHeight: 500, padding: "20px 40px" }}
            >
                {/* Left Column */}
                <div className="flex flex-col items-center" style={{ gap: 60 }}>
                    <Cluster cluster={leftTop} idx={0} />
                    <Cluster cluster={leftBottom} idx={1} />
                </div>

                {/* Center Node */}
                <div className="flex-shrink-0 relative" style={{ width: 200, height: 200 }}>
                    <div
                        className="w-full h-full rounded-full flex flex-col items-center justify-center text-center animate-hub-breathe"
                        style={{
                            background: "transparent",
                            border: "2px solid rgba(0,242,255,0.5)",
                        }}
                    >
                        <span className="font-mono" style={{ color: "#00F2FF", fontSize: "20px", fontWeight: 700 }}>CORE</span>
                        <span className="font-mono" style={{ color: "#00F2FF", fontSize: "20px", fontWeight: 700 }}>STACK</span>
                    </div>
                    <div className="orbit-ball" />
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-center" style={{ gap: 60 }}>
                    <Cluster cluster={rightTop} idx={2} />
                    <Cluster cluster={rightBottom} idx={3} />
                </div>
            </div>

            {/* Mobile Stacked Layout */}
            <div className="flex flex-col gap-10 md:hidden w-full max-w-sm mx-auto mt-4">
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

                {allClusters.map((cluster) => (
                    <div key={cluster.name} className="flex flex-col items-center gap-3">
                        <div className="flex flex-wrap gap-[6px] justify-center">
                            {cluster.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="skill-pill rounded-lg font-['Inter',sans-serif] whitespace-nowrap"
                                    style={{
                                        padding: "8px 18px",
                                        fontSize: "13px",
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
                            className="font-mono uppercase tracking-[0.12em] text-center"
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
