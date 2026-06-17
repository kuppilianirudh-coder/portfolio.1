import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Braces, Code, Database, Hammer, Cpu, Terminal, Layers, Sparkles } from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { name: 'All', icon: <Layers className="w-3.5 h-3.5" /> },
    { name: 'Frontend', icon: <Code className="w-3.5 h-3.5" /> },
    { name: 'Backend', icon: <Braces className="w-3.5 h-3.5" /> },
    { name: 'Database', icon: <Database className="w-3.5 h-3.5" /> },
    { name: 'Programming', icon: <Terminal className="w-3.5 h-3.5" /> },
    { name: 'Tools', icon: <Hammer className="w-3.5 h-3.5" /> },
    { name: 'AI Tools', icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const getCategoryTheme = (category: string) => {
    switch(category) {
      case 'Frontend': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Backend': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Database': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Programming': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'Tools': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'AI Tools': return 'text-pink-400 bg-pink-500/10 border-pink-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const getProgressColor = (category: string) => {
    switch(category) {
      case 'Frontend': return 'from-blue-500 to-sky-400 shadow-blue-500/20';
      case 'Backend': return 'from-indigo-500 to-violet-400 shadow-indigo-500/20';
      case 'Database': return 'from-emerald-500 to-teal-400 shadow-emerald-500/20';
      case 'Programming': return 'from-purple-500 to-fuchsia-400 shadow-purple-500/20';
      case 'Tools': return 'from-amber-500 to-orange-400 shadow-amber-500/20';
      case 'AI Tools': return 'from-pink-500 to-rose-400 shadow-pink-500/20';
      default: return 'from-slate-500 to-slate-400 shadow-slate-500/20';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Soft Shadows */}
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">My Toolbox</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Distribution</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Categorized proficiencies ranked by project practical experience, assignments, and test verification scores.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories selector track */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-tr from-blue-600 to-emerald-500 border-transparent text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid display with animation controls */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm card-glow transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Tiny category pill */}
                    <span className={`px-2.5 py-0.5 rounded-md font-mono text-[9px] font-semibold border uppercase ${getCategoryTheme(skill.category)}`}>
                      {skill.category}
                    </span>
                    <span className="font-display font-bold text-white text-sm tracking-tight">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">{skill.level}%</span>
                </div>

                {/* Micro Progress bar slider */}
                <div className="relative w-full h-[6px] bg-slate-950/80 rounded-full overflow-hidden border border-white-[2%]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r rounded-full shadow-[0_0_8px_rgba(59,130,246,0.2)] ${getProgressColor(skill.category)}`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills stats highlight box */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Consistently matching skill certifications with hands-on development practices.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
