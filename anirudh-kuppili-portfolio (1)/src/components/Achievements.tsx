import { motion } from 'motion/react';
import { Trophy, Calendar, Sparkles, BookOpen, Settings, Zap, Compass, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';

export default function Achievements() {
  
  const visualAchievements = [
    {
      id: "ach-hack",
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
      color: "border-yellow-500/10 hover:border-yellow-500/30",
      pill: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      ...ACHIEVEMENTS[0]
    },
    {
      id: "ach-ai",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/10 hover:border-blue-500/30",
      pill: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      ...ACHIEVEMENTS[1]
    },
    {
      id: "ach-data",
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/10 hover:border-emerald-500/30",
      pill: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      ...ACHIEVEMENTS[2]
    },
    {
      id: "ach-db",
      icon: <Settings className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/10 hover:border-purple-500/30",
      pill: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      ...ACHIEVEMENTS[3]
    },
    // Adding extra values requested: Continuous Learning & Project development experience
    {
      id: "ach-learning",
      title: "Continuous Learning Journey",
      subtitle: "850+ Hours Coding Practice",
      description: "Aggressively reviewing full-stack patterns, data structure efficiency layers, and algorithmic logical proofs across various learning platforms.",
      category: "Continuous Learning",
      date: "2025 - Present",
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/10 hover:border-cyan-500/30",
      pill: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      id: "ach-projects",
      title: "Project Development Experience",
      subtitle: "Deploying Full-Stack Prototypes",
      description: "Successfully managing and documenting personal and academic repositories, tracking database normalization workflows, and ensuring clean state operations.",
      category: "Milestones",
      date: "24 Months",
      icon: <CheckCircle className="w-5 h-5 text-pink-400" />,
      color: "border-pink-500/10 hover:border-pink-500/30",
      pill: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute top-[40%] right-[-140px] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">MILESTONES & RECOGNITION</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Honorable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Achievements</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Summary of peer hackathons, code platforms participation, database milestones, and ongoing engineering journeys.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visualAchievements.map((ach) => (
            <motion.div
              key={ach.id}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-slate-900/40 border glass-panel transition-all duration-300 card-glow flex flex-col justify-between text-left ${ach.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center">
                    {ach.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {ach.date}
                  </span>
                </div>

                <span className={`px-2.5 py-0.5 rounded-md font-mono text-[9px] font-bold border uppercase leading-none inline-block mb-3.5 ${ach.pill}`}>
                  {ach.category}
                </span>

                <h4 className="font-display font-extrabold text-white text-base tracking-tight mb-1">
                  {ach.title}
                </h4>
                
                <h5 className="font-mono text-xs text-blue-400 font-medium mb-3.5">
                  {ach.subtitle}
                </h5>

                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Verified Badge footnote */}
              <div className="mt-5 pt-3.5 border-t border-slate-900/85 flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-600">Verification ID: Approved</span>
                <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-500 font-bold">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  Authenticated
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
