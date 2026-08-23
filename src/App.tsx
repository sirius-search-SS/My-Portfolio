/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Palette, 
  Cpu, 
  ArrowUpRight, 
  Globe2, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  FolderOpen,
  Terminal
} from "lucide-react";
import { useRef, useState } from "react";

const SectionHeader = ({ title, number }: { title: string; number: string }) => (
  <div className="flex items-baseline gap-4 mb-12 border-b border-ink/10 pb-4">
    <span className="font-mono text-xs opacity-50">{number}</span>
    <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">{title}</h2>
  </div>
);

const SkillBadge = ({ name }: { name: string }) => (
  <div className="group relative px-4 py-2 border border-ink/20 hover:border-accent transition-colors duration-300 cursor-default">
    <span className="font-mono text-sm group-hover:text-accent transition-colors">{name}</span>
    <div className="absolute top-0 right-0 w-1 h-1 bg-ink group-hover:bg-accent" />
  </div>
);

const ProjectBadge = ({ name, url }: { name: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-4 py-2 border border-ink/20 hover:border-accent transition-colors duration-300 flex items-center gap-3"
  >
    <span className="font-mono text-sm group-hover:text-accent transition-colors">{name}</span>
    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all" />
    <div className="absolute top-0 right-0 w-1 h-1 bg-ink group-hover:bg-accent" />
  </a>
);

export default function App() {
  const containerRef = useRef(null);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skills = [
    "Automation & Integration", "Software Development", "UI & UX Design", 
    "Graphic Design", "Data Analyze", "Advance Excel", "Social Media Admin"
  ];

  // Paste your Google Slides invite links below (replace the "#" values).
  const projects = [
    { name: "Graphic Design Project", url: "https://docs.google.com/presentation/d/17Tt4l-OMylb1v9ths_c-niv_z3SudFUztVPuCaax5XM/edit?usp=sharing" },
    { name: "Frontend Development Project", url: "https://docs.google.com/presentation/d/1gpvneA9nFxhpSTBhaTsfSQ48eNgSbOHIMnk0XJ09GZ4/edit?usp=sharing" },
    { name: "Brand Identity Project", url: "https://docs.google.com/presentation/d/1vnLZvoxUZNy1AJPZmqKVu3jnPBzBLgG4-jhxHS6XzMk/edit?usp=sharing" },
    { name: "Google Sheet Projects", url: "https://docs.google.com/presentation/d/1GAb-RAfGAVOgcqvguc2EpuormGd-y0BmAHWQa9VR5-c/edit?usp=sharing" },
    { name: "UI/UX Design Projects", url: "https://docs.google.com/presentation/d/17AObAO1U6Et5kZCzLicH9LQPaTYVATqPehdUVvgCog8/edit?usp=sharing" }
  ];

  const languages = [
    { name: "Myanmar", level: "Native" },
    { name: "English", level: "Conversational / Working" },
    { name: "Japanese", level: "Basic Conversational" },
    { name: "Thai", level: "Learning" },
    { name: "German", level: "Learning" }
  ];

  const experiences = [
    {
      role: "Freelance Developer",
      period: "Dec 2021 - Dec 2025",
      description: "Built websites for local restaurants and hotels with a team, focusing on UI/UX design. Projects are under NDA and cannot be publicly shown."
    },
    {
      role: "Freelance UI&UX Designer",
      period: "Dec 2021 - Oct 2022",
      description: "Drew 40+ UI designs and wireframes, with a main focus on UX wireframes."
    },
    {
      role: "Freelance Graphic Designer",
      period: "Mar 2021 - Apr 2023",
      description: "Designed social media graphics in Photoshop, watermarks and shirt logos in Illustrator, and animations for YouTube clients in Adobe Animate."
    },
    {
      role: "Accountant in Local Store",
      period: "July 2020 - Mar 2021",
      description: "Managed stock records and client data using Excel."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-mono text-sm tracking-widest">MIN HEIN KHANT</div>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-tighter">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-10 h-full border-l border-ink/20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-r border-ink/20 h-full" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-mono text-accent text-sm uppercase tracking-[0.3em]">Available for projects</span>
          </div>
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-8">
            Automation<br />
            <span className="text-accent italic">&</span> Design
          </h1>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <p className="max-w-md text-lg leading-relaxed opacity-80">
              I'm trying to learn new things day after day and to achieve my career goal.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:siriussearch126@gmail.com"
                className="px-8 py-4 bg-ink text-bg font-bold uppercase tracking-tighter hover:bg-accent transition-all duration-300 flex items-center gap-2"
              >
                Let's Talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute bottom-12 left-6 md:left-24 flex gap-8 font-mono text-[10px] opacity-40 uppercase tracking-widest">
          <span>Software Dev</span>
          <span>UI/UX</span>
          <span>Automation</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-24 bg-ink text-bg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="About Me" number="01" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl font-light leading-snug">
                "I use the 25:5 Pomodoro method to maintain <span className="text-accent font-bold">80% efficiency</span> during work, ensuring consistent productivity and quality."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent p-1">
                   <img 
                    src="/My-Portfolio/photo.jpg"
                    alt="Min Hein Khant" 
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter">Min Hein Khant</h3>
                  <p className="font-mono text-xs opacity-60">Bachelor of Physics</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                I am a focused and dedicated person who values team collaboration and continuous learning. I perform well under pressure and manage responsibilities effectively even in demanding situations.
              </p>
              <p>
                My background in Physics gives me a unique analytical perspective on software development and automation, allowing me to solve complex problems with structured logic.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="border-l border-accent/30 pl-4 py-2">
                    <div className="font-bold text-sm uppercase tracking-tighter">{lang.name}</div>
                    <div className="font-mono text-[10px] opacity-50">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Core Skills" number="02" />
          
          <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-ink/10 hover:bg-white transition-colors group">
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform origin-left">
                <Cpu size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic">Automation</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Streamlining workflows and integrating complex systems to maximize operational efficiency.
              </p>
            </div>
            <div className="p-8 border border-ink/10 hover:bg-white transition-colors group">
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform origin-left">
                <Code2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic">Development</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Crafting robust software solutions with a focus on clean code and scalable architecture.
              </p>
            </div>
            <div className="p-8 border border-ink/10 hover:bg-white transition-colors group">
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform origin-left">
                <Palette size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic">UI/UX Design</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Designing intuitive interfaces that prioritize user experience and visual harmony.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setProjectsOpen(!projectsOpen)}
              aria-expanded={projectsOpen}
              className="p-8 border border-ink/10 hover:bg-white transition-colors group text-left w-full"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform origin-left">
                <FolderOpen size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic flex items-center gap-2">
                Projects
                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`}
                />
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Click to see my previous projects.
              </p>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {projectsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-3 pt-8">
                  {projects.map((project) => (
                    <div key={project.name}>
                      <ProjectBadge name={project.name} url={project.url} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill}>
                <SkillBadge name={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Experience" number="03" />
          
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid md:grid-cols-[1fr_2fr_1fr] items-center py-12 border-b border-ink/10 hover:bg-bg/50 transition-all px-4"
              >
                <div className="font-mono text-sm opacity-50 mb-2 md:mb-0">{exp.period}</div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm opacity-60 mt-1">{exp.description}</p>
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full border border-ink flex items-center justify-center">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-24 bg-ink text-bg relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
          SIRIUS SEARCH
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Get In Touch" number="04" />
          
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
                Let's build<br />
                something<br />
                <span className="text-accent italic">remarkable.</span>
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:siriussearch126@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-bg/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-xl font-bold tracking-tighter group-hover:text-accent transition-colors">siriussearch126@gmail.com</span>
                </a>
                <a href="tel:+660921112958" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-bg/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="text-xl font-bold tracking-tighter group-hover:text-accent transition-colors">+66 09 21112 958</span>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-bg/20 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-xl font-bold tracking-tighter">Samut Prakan, Thailand</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-12 backdrop-blur-sm border border-white/10">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-accent outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">Your Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-accent outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-accent outline-none transition-colors resize-none" />
                </div>
                <button className="w-full py-4 bg-accent text-white font-bold uppercase tracking-tighter hover:bg-white hover:text-ink transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] opacity-40">
          © 2026 MIN HEIN KHANT. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest opacity-40">
          <a href="https://www.linkedin.com/in/sirius-search-ss" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/sirius-search-SS/sirius" className="hover:text-accent transition-colors">GitHub</a>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] opacity-40">
          <Terminal size={12} />
          <span>BUILT WITH PRECISION</span>
        </div>
      </footer>
    </div>
  );
}
