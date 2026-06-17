import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, X, ChevronRight, CheckCircle2, Play, AlertCircle, Bookmark } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Featured', 'Academic', 'AI & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute top-[20%] left-[-100px] w-[600px] h-[600px] bg-blue-550/5 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">My developments</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Applications</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Practical projects built to address actual process roadblocks. Click any card to expand deep structural project reviews.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project category filters */}
        <div className="flex items-center justify-center gap-2.5 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-medium border transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                  : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              {category} Projects
            </button>
          ))}
        </div>

        {/* Standard responsive grids layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm card-glow overflow-hidden transition-all duration-300"
              >
                {/* Visual Image / Screenshot Mockup */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.name} preview thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono leading-none bg-slate-950/80 backdrop-blur-sm border border-white/10 text-blue-400 font-semibold uppercase">
                    <Bookmark className="w-3 h-3" />
                    {project.category}
                  </span>
                  
                  {/* Subtle glass fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent"></div>
                </div>

                {/* Card content segments */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-xs text-emerald-400 tracking-wide uppercase mb-1">{project.tagline}</h4>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-blue-400 duration-200">{project.name}</h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                    
                    {/* Technologies Pills scroll list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-slate-950 border border-white/5 text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons row */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-900/80">
                    <div className="flex items-center gap-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-white border border-white/5 transition-all text-xs flex items-center gap-1"
                        aria-label="GitHub Source Code"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-mono text-[10px]">Source</span>
                      </a>
                      
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="p-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-white border border-white/5 transition-all text-xs flex items-center gap-1"
                          aria-label="Live preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-mono text-[10px]">Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-4 py-2 font-mono text-[11px] font-bold tracking-tight rounded-xl bg-blue-500/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer flex items-center gap-1"
                    >
                      Expand Specs 
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modular Specs Modal Popup details */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backing blurring black layout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="fixed inset-0 bg-[#02050b] backdrop-blur-sm"
              />

              {/* Specs detailed card container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-3xl w-full rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#070b13] border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
              >
                {/* Sticky Header inside spec list */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-950/40 sticky top-0 backdrop-blur-sm z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wide">Developer Specification Document</span>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Scroll Content body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
                  
                  {/* Heading header title */}
                  <div className="space-y-1">
                    <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest">{activeProjectModal.tagline}</h4>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">{activeProjectModal.name}</h3>
                  </div>

                  {/* Highlights Bullet track */}
                  {activeProjectModal.highlights && activeProjectModal.highlights.length > 0 && (
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-blue-300 flex flex-col gap-2 font-mono text-[11.5px]">
                      <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>PROJECT HIGHLIGHTS</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        {activeProjectModal.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Summary/Overview */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-blue-500 pl-2">Overview</h5>
                    <p className="text-slate-300 leading-relaxed font-sans">{activeProjectModal.overview}</p>
                  </div>

                  {/* Problem statement */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-red-500 pl-2">Problem Statement</h5>
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-slate-300 leading-relaxed font-sans flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p>{activeProjectModal.problem}</p>
                    </div>
                  </div>

                  {/* Challenges faced list */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-purple-500 pl-2">Engineering Challenges Faced</h5>
                    <ul className="space-y-3 font-sans text-slate-300">
                      {activeProjectModal.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            {idx+1}
                          </span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features segment */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-emerald-500 pl-2">Key Core Features</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
                      {activeProjectModal.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs sm:text-[13px] text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact segment */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-amber-500 pl-2">Operational Impact</h5>
                    <p className="text-slate-300 font-sans leading-relaxed">{activeProjectModal.impact}</p>
                  </div>

                  {/* Lessons Learned */}
                  <div className="space-y-2">
                    <h5 className="font-display font-bold text-white text-sm uppercase tracking-wide border-l-4 border-sky-400 pl-2">Lessons & Competency Learned</h5>
                    <p className="text-slate-300 font-sans leading-relaxed italic">"{activeProjectModal.lessons}"</p>
                  </div>

                  {/* Tech stack used tags */}
                  <div className="space-y-2 pt-4 border-t border-slate-900">
                    <h5 className="font-mono text-xs text-slate-500 uppercase tracking-widest">Technologies Stacked</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeProjectModal.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-xl bg-slate-950 text-slate-300 border border-white/5 font-mono text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Form Footer trigger controls */}
                <div className="p-6 border-t border-white/5 bg-slate-950/80 flex flex-wrap gap-3 items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500">Repository: {activeProjectModal.name}</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono font-bold border border-white/5 flex items-center gap-1.5 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Inspect Code
                    </a>
                    
                    <button
                      onClick={() => setActiveProjectModal(null)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center gap-1 shadow-lg shadow-blue-500/20 cursor-pointer"
                    >
                      Acknowledge Review
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
