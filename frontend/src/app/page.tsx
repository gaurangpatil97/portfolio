"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, Moon, Sun, Monitor, Code, Code2, BrainCircuit, Activity, Zap } from "lucide-react";
import { OrbitalSkills } from "@/components/OrbitalSkills";
import { ProjectCard } from "@/components/ProjectCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ToolsInventory } from "@/components/ToolsInventory";
import Image from "next/image";

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
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setScanned(true);
    }, 4000);
    return () => clearTimeout(timer);
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

      <main className="px-6 max-w-7xl mx-auto space-y-[120px]">
        {/* 1. Hero Section (Restructured for True Vertical Centering) */}
        <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center">
          {/* Light Orbs */}
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#00F2FF] rounded-full blur-[150px] opacity-5 pointer-events-none z-[-1]" />
          <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] bg-[#000080] rounded-full blur-[150px] opacity-10 pointer-events-none z-[-1]" />
          
          <motion.section
            id="Home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[340px_1fr] gap-12 xl:gap-20 items-center w-full"
          >
            {/* Left Card: Profile Image & Identity */}
            <div className="glass overflow-hidden flex flex-col group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#161B22]">
                {/* Blurred Base */}
                <Image 
                  src="/new_yorkdp.png" 
                  alt="Gaurang Patil" 
                  fill 
                  className="object-cover opacity-50 blur-[2px] z-0 transition-all duration-300"
                  priority
                />
                
                {/* Sharp Reveal Mask */}
                <div className="absolute inset-0 z-[1] avatar-scan-reveal">
                  <Image 
                    src="/new_yorkdp.png" 
                    alt="Gaurang Patil" 
                    fill 
                    className="object-cover opacity-90 z-[1]"
                    priority
                  />
                </div>

                {/* The Scanning Line */}
                <div className="absolute left-0 right-0 h-[2px] bg-[#00F2FF] shadow-[0_0_10px_rgba(0,242,255,0.5)] z-[2] avatar-scan-line" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none z-10" />

                {/* HUD Elements */}
                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-[20px] h-[20px] border-t-2 border-l-2 border-[#00F2FF]/60 z-20 pointer-events-none animate-pulse" />
                <div className="absolute top-4 right-4 w-[20px] h-[20px] border-t-2 border-r-2 border-[#00F2FF]/60 z-20 pointer-events-none animate-pulse" />
                <div className="absolute bottom-4 left-4 w-[20px] h-[20px] border-b-2 border-l-2 border-[#00F2FF]/60 z-20 pointer-events-none animate-pulse" />
                <div className="absolute bottom-4 right-4 w-[20px] h-[20px] border-b-2 border-r-2 border-[#00F2FF]/60 z-20 pointer-events-none animate-pulse" />

                {/* Status Tag: Systems Online */}
                <div className="absolute top-[10%] -left-1 flex items-center gap-2 bg-[#000000]/60 backdrop-blur-md border border-green-500/30 px-3 py-1.5 rounded-r-md z-20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                  <Zap size={14} className="text-green-400 animate-pulse fill-green-400" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-green-400 uppercase">Systems Online</span>
                </div>
              </div>

              <div className="p-6 mt-auto space-y-3 z-20 relative">
                <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: scanned ? 1 : 0 }} 
                   transition={{ duration: 0.5 }}
                   className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-green-400 uppercase">Available for Hire</span>
                </motion.div>
                
                <h1 className="text-3xl font-heading font-bold text-[#E0E6ED] h-9 flex items-center">
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 4 } }
                    }}
                  >
                    {"Gaurang Patil".split("").map((char, index) => (
                      <motion.span key={index} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } }}>
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                  {!scanned && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="inline-block w-3 h-7 bg-[#00F2FF] ml-1" />}
                </h1>

                <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: scanned ? 1 : 0 }} 
                   transition={{ duration: 0.5, delay: 0.5 }}
                   className="flex items-center gap-2 text-[#94A3B8] text-xs font-mono"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>Mumbai, Maharashtra</span>
                </motion.div>
              </div>
            </div>

            {/* Right Card: Bio, Stats, & Tech */}
            <div className="glass p-8 flex flex-col justify-center gap-8 h-full">
              <div className="space-y-5">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight soft-glow">
                  Building AI Systems That Work in the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#A5C0EE] soft-glow">Real World</span>
                </h1>
                <div className="font-mono text-[#E0E6ED]">
                  ML Engineer · AI Engineer · Computer Vision · Data Science
                </div>
                <p className="text-lg leading-relaxed max-w-2xl font-sans">
                  <span className="font-medium text-cyan-300">Final year CE student at K.J. Somaiya, Mumbai — Honors in Data Science.</span> <span className="text-slate-400">I build end-to-end AI systems that work in the real world. From computer vision pipelines to data infrastructure, I focus on turning research into things that actually ship. Looking for DS / MLE roles.</span>
                </p>
              </div>

              <div className="space-y-8">
                {/* Contact Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                  {[
                    { icon: Github, label: "GITHUB", href: "https://github.com/gaurangpatil97" },
                    { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/gaurangpatil9/" },
                    { icon: Code2, label: "KAGGLE", href: "https://www.kaggle.com/patilgaurang0907" },
                    { icon: Mail, label: "EMAIL", href: "mailto:gaurangpatil9@gmail.com" }
                  ].map((contact, i) => {
                    const Icon = contact.icon;
                    return (
                      <a key={i} href={contact.href} className="glass flex flex-col items-center justify-center gap-3 p-4 rounded-2xl hover:border-accent/40 transition-colors group">
                        <Icon size={24} className="text-[#94A3B8] group-hover:text-[#00F2FF] transition-colors" />
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#E0E6ED] uppercase">{contact.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 3. Skills */}
        <motion.section
          id="Skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-[40px] flex flex-col items-center"
        >
          <div className="text-center mb-6 space-y-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none z-[-1]" style={{ background: "radial-gradient(circle, rgba(0,242,255,0.1) 0%, transparent 70%)" }} />
            <div className="inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[rgba(0,242,255,0.7)] border-l border-accent pl-2 mb-2">
              [02] TECHNICAL_ARSENAL
            </div>
            <h2 className="text-[48px] font-heading font-[700] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A5C0EE] pb-2">
              Core Capabilities
            </h2>
          </div>

          <div className="w-full overflow-visible">
            <OrbitalSkills />
          </div>
        </motion.section>

        <ToolsInventory />

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
