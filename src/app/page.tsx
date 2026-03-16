"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, Moon, Sun, Monitor, Code, BrainCircuit, Activity } from "lucide-react";
import { OrbitalSkills } from "@/components/OrbitalSkills";
import { ProjectCard } from "@/components/ProjectCard";
import { MagneticButton } from "@/components/MagneticButton";

const navItems = ["About Me", "Skills", "Best Works", "Contacts"];

const filters = ["All", "CV", "AI/ML", "GenAI"];

const projects = [
  {
    title: "DivyaDrishti",
    category: "CV",
    metric: "89% mAP",
    description: "Real-time assistive AI system for the visually impaired. YOLOv8 object detection with spatial audio feedback, IMU-based step tracking, and voice commands. Mobile app via Expo, backend inference under 300ms.",
    tags: ["Python", "YOLOv8", "TFLite", "React Native", "FastAPI"],
  },
  {
    title: "AI Traffic Enforcement System",
    category: "CV",
    metric: "In Progress",
    description: "End-to-end violation detection — wrong-way driving, speeding, helmet violations, illegal parking. Speed estimation via perspective transform, license plate OCR with EasyOCR, live dashboard.",
    tags: ["Python", "YOLOv8", "FastAPI", "Supabase", "Next.js"],
  },
  {
    title: "GenAI Project",
    category: "GenAI",
    metric: "Coming Soon",
    description: "Building an LLM-powered RAG pipeline over technical document corpora. Vector search, semantic chunking, grounded answers with citations. Details dropping soon.",
    tags: ["Python", "LangChain", "ChromaDB", "Gemini API"],
  },
];

const experiences = [
  {
    company: "Grabtek BioSciences",
    title: "Data Scientist Intern",
    date: "Jun 2025 – Jul 2025",
    points: [
      "Automated CSV consolidation pipeline using Python and Pandas, eliminating manual weekly data preparation",
      "Built Power BI dashboards tracking 15+ KPIs including sales trends, product performance, and regional metrics for leadership decision-making",
    ],
  },
  {
    company: "K.J. Somaiya College of Engineering",
    title: "Research Intern — ExoFusion",
    date: "Mar 2025 – Present",
    points: [
      "Developed ensemble ML framework fusing CNN (photometry) and XGBoost (astrometry) via meta-learning for exoplanet detection using Kepler and Gaia datasets",
      "Harmonized heterogeneous astrophysical datasets and engineered features for model robustness — co-authoring a research paper",
    ],
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold tracking-[0.2em] text-sm flex gap-2 uppercase">
            <span className="text-[#00F2FF]">Gaurang</span><span className="text-[#E0E6ED]">Patil</span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  const id = item === "About Me" ? "About" : item === "Best Works" ? "Projects" : item === "Contacts" ? "Experience" : item;
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item);
                }}
                className={`text-xs uppercase tracking-widest font-mono transition-colors relative ${activeSection === item ? "text-accent" : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full shadow-[0_0_8px_var(--accent-glow)]"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full glass hover:border-accent transition-colors"
          >
            {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <span className="w-[18px] h-[18px] block" />}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto space-y-[240px]">
        {/* 1. Hero Section (Restructured to match Reference Image) */}
        <div className="relative">
          {/* Light Orbs */}
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#00F2FF] rounded-full blur-[150px] opacity-5 pointer-events-none z-[-1]" />
          <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] bg-[#000080] rounded-full blur-[150px] opacity-10 pointer-events-none z-[-1]" />
          
          <motion.section
            id="Home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[400px_1fr] gap-8 items-stretch pt-10"
          >
            {/* Left Card: Profile Image & Identity */}
            <div className="glass overflow-hidden flex flex-col group relative">
              {/* Scanline Effect */}
              <div className="absolute inset-x-0 top-0 h-[3px] w-full z-20 pointer-events-none animate-scanline" style={{ background: "linear-gradient(90deg, transparent, #00F2FF, transparent)", opacity: 0.5 }} />
              
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {/* Avatar Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-[#161B22] to-transparent flex items-center justify-center relative">
                   <BrainCircuit size={120} className="text-[#00F2FF]/20 group-hover:text-[#00F2FF]/40 transition-colors duration-500" />
                   
                   {/* Corner Brackets */}
                   <div className="absolute top-4 left-4 w-[20px] h-[20px] border-t-2 border-l-2 border-[#00F2FF]/40" />
                   <div className="absolute top-4 right-4 w-[20px] h-[20px] border-t-2 border-r-2 border-[#00F2FF]/40" />
                   <div className="absolute bottom-4 left-4 w-[20px] h-[20px] border-b-2 border-l-2 border-[#00F2FF]/40" />
                   <div className="absolute bottom-4 right-4 w-[20px] h-[20px] border-b-2 border-r-2 border-[#00F2FF]/40" />
                </div>
              </div>

              <div className="p-8 mt-auto space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-green-400 uppercase">Available for Hire</span>
                </div>
                <h1 className="text-3xl font-heading font-bold text-[#E0E6ED]">Gaurang Patil</h1>
                <div className="flex items-center gap-2 text-[#94A3B8] text-xs font-mono">
                  <Activity size={12} className="text-accent" />
                  <span>Mumbai, India / Remote</span>
                </div>
              </div>
            </div>

            {/* Right Card: Bio, Stats, & Tech */}
            <div className="glass p-10 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex justify-end">
                   <button className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#94A3B8] hover:text-accent transition-colors border border-white/5 bg-white/5 px-4 py-2 rounded-full uppercase tracking-widest">
                      <Download size={12} />
                      Load Full Profile
                   </button>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
                    Building the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#A5C0EE]">Intelligent Real-World</span>
                  </h2>
                  <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl font-sans">
                    I am an <span className="text-[#E0E6ED] font-semibold">ML Engineer</span> and <span className="text-[#E0E6ED] font-semibold">AI Specialist</span> focused on turning research-level concepts into scalable, real-world systems. My work sits at the intersection of computer vision, predictive algorithms, and neural automation.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
                  {[
                    { label: "YEARS EXP", value: "3+" },
                    { label: "PROJECTS", value: "15+" },
                    { label: "TECH STACK", value: "24/7" },
                    { label: "RATING", value: "5★" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-2xl font-heading font-bold text-[#E0E6ED]">{stat.value}</div>
                      <div className="text-[10px] font-mono font-bold text-[#94A3B8] tracking-widest uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Footer Tech Tags */}
                <div className="flex flex-wrap gap-4 pt-4">
                   <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
                      <span className="w-3 h-2 rounded bg-blue-500" />
                      <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase">Python (Expert)</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
                      <span className="w-3 h-2 rounded bg-cyan-500" />
                      <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase">PyTorch (Native)</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
                      <span className="w-3 h-2 rounded bg-indigo-500" />
                      <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase">TensorFlow</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 2. About Section */}
        <motion.section
          id="About"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-4">
            <div className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(0,242,255,0.7)] border-l border-accent pl-2 mb-2">
              [01] SYSTEM_PROFILE
            </div>
            <h2 className="text-[48px] font-heading font-[700] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A5C0EE] pb-2">
              About Me
            </h2>
            <p className="font-sans text-[#94A3B8] leading-relaxed text-lg">
              ML Engineer & Data Strategist. Building high-performance AI systems — from computer vision pipelines to intelligent data infrastructure. Focused on turning research-level concepts into scalable, real-world applications.
            </p>
          </div>

          <div className="flex flex-col gap-6 relative justify-center w-full max-w-sm mx-auto">
            <motion.div whileHover={{ y: -5 }} className="glass p-6 rounded-xl border border-accent/20 hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] flex items-center justify-between z-10 transition-colors">
              <span className="font-heading font-bold text-4xl text-foreground">3</span>
              <span className="font-mono text-sm font-bold text-accent tracking-wider uppercase">Projects</span>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="glass p-6 rounded-xl border border-accent/20 hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] flex items-center justify-between z-10 transition-colors">
              <span className="font-heading font-bold text-4xl text-foreground">2</span>
              <span className="font-mono text-sm font-bold text-accent tracking-wider uppercase">Internships</span>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="glass p-6 rounded-xl border border-accent/20 hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] flex items-center justify-between z-10 transition-colors">
              <span className="font-heading font-bold text-4xl text-foreground">1</span>
              <span className="font-mono text-sm font-bold text-accent tracking-wider uppercase text-right leading-tight max-w-[150px]">Research Paper <br /> <span className="text-[10px] text-foreground/50">(in progress)</span></span>
            </motion.div>
          </div>
        </motion.section>

        {/* 3. Skills */}
        <motion.section
          id="Skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-10 flex flex-col items-center"
        >
          <div className="text-center mb-16 space-y-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none z-[-1]" style={{ background: "radial-gradient(circle, rgba(0,242,255,0.1) 0%, transparent 70%)" }} />
            <div className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(0,242,255,0.7)] border-l border-accent pl-2 mb-2">
              [02] TECHNICAL_ARSENAL
            </div>
            <h2 className="text-[48px] font-heading font-[700] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A5C0EE] pb-2">
              Core Capabilities
            </h2>
          </div>

          <div className="w-full flex justify-center overflow-visible">
            <OrbitalSkills />
          </div>
        </motion.section>

        {/* 4. Projects */}
        <div className="relative">
          {/* Deep Navy Orb behind Projects */}
          <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-[#000080] rounded-full blur-[120px] opacity-15 pointer-events-none z-[-1]" />
          <motion.section
            id="Projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="mb-6 sm:mb-0 space-y-4">
                <div className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(0,242,255,0.7)] border-l border-accent pl-2 mb-2">
                  [03] DEPLOYED_SYSTEMS
                </div>
                <h2 className="text-[48px] font-heading font-[700] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A5C0EE] pb-2">Featured Work</h2>
              </div>

            <div className="flex gap-2 glass p-1 rounded-lg">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-md font-mono text-sm transition-all ${activeFilter === filter ? "bg-accent/20 text-accent border border-accent/40" : "text-foreground/60 hover:text-foreground"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>
      </div>

        {/* 5. Experience */}
        <motion.section
          id="Experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-20"
        >
            <div className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(0,242,255,0.7)] border-l border-accent pl-2 mb-6">
              [04] OPERATIONAL_LOGS
            </div>
            <h2 className="text-[48px] font-heading font-[700] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A5C0EE] pb-2 mb-12">Experience</h2>

            <div className="relative border-l-[2px] border-dashed border-[rgba(0,242,255,0.3)] ml-4 md:ml-8 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <div className="absolute top-2 -left-[9px] w-[16px] h-[16px] rounded-full bg-[#0B0E14] border-2 border-[#00F2FF]" style={{ animation: "pulseShadow 2s infinite alternate" }} />

                  <div className="glass p-6 rounded-xl relative group transition-all">
                    <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors">{exp.company}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 mt-2">
                      <span className="font-mono text-sm font-bold bg-[rgba(0,242,255,0.1)] border border-accent text-accent px-2 py-1 rounded inline-block">{exp.title}</span>
                      <span className="font-mono text-xs text-accent">{exp.date}</span>
                  </div>
                  <ul className="space-y-2 mt-4 text-sm font-sans text-[#94A3B8] list-disc list-inside marker:text-accent">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* 6. Marquee Banner */}
      <div className="w-full glass py-3 overflow-hidden relative" style={{ background: "linear-gradient(90deg, rgba(0,242,255,0.05), rgba(0,242,255,0.02), rgba(0,242,255,0.05))", borderTop: "1px solid rgba(0,242,255,0.15)", borderBottom: "1px solid rgba(0,242,255,0.15)" }}>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 mx-6 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00F2FF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" style={{ boxShadow: "0 0 8px #00ff88" }} />
              ⚡ CURRENTLY BUILDING · 3 END-TO-END AI PROJECTS · OPEN TO DS / MLE ROLES · GRADUATING JUNE 2026 · STATUS: AVAILABLE
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
