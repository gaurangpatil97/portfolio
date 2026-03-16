"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, Moon, Sun, Monitor, Code, BrainCircuit, Activity } from "lucide-react";
import { OrbitalSkills } from "@/components/OrbitalSkills";
import { ProjectCard } from "@/components/ProjectCard";

const navItems = ["Home", "About", "Skills", "Projects", "Experience"];

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
      <nav className="fixed top-0 w-full z-50 glass border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl text-accent glow-text flex items-center gap-2">
            <span>GP</span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`text-sm font-mono transition-colors relative ${activeSection === item ? "text-accent" : "text-foreground/70 hover:text-foreground"
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
      </nav >

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        {/* 1. Hero Section */}
        <motion.section
          id="Home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center pt-10"
        >
          {/* Avatar Area */}
          <div className="relative group mx-auto w-full aspect-square min-w-[300px] lg:min-w-[400px] flex justify-center items-center">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent transition-all duration-300 group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

            <div className="w-[95%] h-[95%] glass relative overflow-hidden flex flex-col justify-end items-start p-6 sm:p-8 rounded-xl border border-accent/20 bg-background/50">
              {/* Scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent h-[20%] w-full animate-scanline z-20 pointer-events-none" />

              <div className="z-10 bg-background/80 px-4 py-1.5 border border-accent/40 rounded-full flex items-center gap-2 mb-4 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-green-400">AVAILABLE FOR HIRE</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl glow-text z-10 text-foreground">Gaurang Patil</h2>
            </div>
          </div>

          {/* Intro Area */}
          <div className="space-y-10 text-center lg:text-left py-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building AI Systems That Work in the <span className="text-accent glow-text">Real World</span>
            </h1>
            <h2 className="font-mono text-lg sm:text-xl text-foreground/80">
              &gt;&amp;_ ML Engineer · Computer Vision · Data Science
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Monitor, label: "Kaggle" },
                { icon: Mail, label: "Email" }
              ].map((item, i) => (
                <a key={i} href="#" className="flex flex-col items-center justify-center p-4 glass rounded-xl hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] transition-all group border border-accent/20">
                  <item.icon size={28} className="text-foreground/70 group-hover:text-accent transition-colors mb-3" />
                  <span className="text-xs font-mono font-bold text-foreground/80 group-hover:text-accent transition-colors">{item.label}</span>
                </a>
              ))}
            </div>

            <button className="flex items-center gap-2 px-8 py-4 font-mono text-sm font-bold border border-accent text-accent uppercase tracking-widest rounded-lg hover:bg-accent/10 hover:shadow-[0_0_15px_var(--accent-glow)] transition-all mx-auto lg:mx-0">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </motion.section>

        {/* 2. About Section */}
        <motion.section
          id="About"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 font-mono text-xs border border-accent/40 rounded-full text-accent bg-accent/5 backdrop-blur-sm mb-2">
              <Activity size={12} className="inline mr-2" />
              [01] SYSTEM_PROFILE
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              About Me
            </h2>
            <p className="font-sans text-foreground/80 leading-relaxed text-lg">
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
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 font-mono text-xs border border-accent/40 rounded-full text-accent bg-accent/5 backdrop-blur-sm mb-4">
              [02] TECHNICAL_ARSENAL
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Core Capabilities
            </h2>
          </div>

          <div className="w-full flex justify-center overflow-visible">
            <OrbitalSkills />
          </div>
        </motion.section>

        {/* 4. Projects */}
        <motion.section
          id="Projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="mb-6 sm:mb-0">
              <div className="inline-block px-3 py-1 font-mono text-xs border border-accent/40 rounded-full text-accent bg-accent/5 backdrop-blur-sm mb-2">
                [03] DEPLOYED_SYSTEMS
              </div>
              <h2 className="text-3xl font-heading font-bold">Featured Work</h2>
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

        {/* 5. Experience */}
        <motion.section
          id="Experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-20"
        >
          <div className="inline-block px-3 py-1 font-mono text-xs border border-accent/40 rounded-full text-accent bg-accent/5 backdrop-blur-sm mb-6">
            [04] OPERATIONAL_LOGS
          </div>
          <h2 className="text-3xl font-heading font-bold mb-12">Experience</h2>

          <div className="relative border-l-2 border-dashed border-accent ml-4 md:ml-8 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_15px_var(--accent-glow)] flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping absolute" />
                  <div className="w-1.5 h-1.5 bg-accent rounded-full relative" />
                </div>

                <div className="glass p-6 rounded-xl relative group hover:border-accent/40 transition-colors">
                  <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors">{exp.company}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 mt-2">
                    <span className="font-mono text-sm font-bold bg-white/5 px-2 py-1 rounded inline-block">{exp.title}</span>
                    <span className="font-mono text-xs text-foreground/50 text-accent">{exp.date}</span>
                  </div>
                  <ul className="space-y-2 mt-4 text-sm font-sans text-foreground/80 list-disc list-inside marker:text-accent">
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
      <div className="w-full glass py-3 border-y border-accent/20 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 mx-6 font-mono text-sm font-bold uppercase tracking-wider text-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
              ⚡ CURRENTLY BUILDING · 3 END-TO-END AI PROJECTS · OPEN TO DS / MLE ROLES · GRADUATING JUNE 2026 · <span className="text-accent ml-2">STATUS: AVAILABLE</span>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
