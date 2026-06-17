import { motion } from 'motion/react';
import { GraduationCap, MapPin, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { TIMELINE } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute bottom-[10%] right-[-100px] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">EDUCATIONAL FOOTSTEPS</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Timeline</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Chronological log of undergraduate courses, core computer engineering theories, and academic credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central vertical track thread line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-emerald-400/20 transform -translate-x-1/2 hidden sm:block"></div>
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-emerald-400/20 transform -translate-x-1/2 sm:hidden"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-stretch ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Pulse Bullet Node */}
                  <div className="absolute left-6 sm:left-1/2 top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>

                  {/* Left Column Spacer for large screens */}
                  <div className="w-full sm:w-1/2 hidden sm:block"></div>

                  {/* Timeline Active Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full sm:w-1/2 pl-12 pr-4 sm:px-8 text-left"
                  >
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm card-glow transition-all max-w-lg">
                      
                      {/* Top label badge group */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                        <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-blue-400 uppercase font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>

                        <span className="px-2.5 py-0.5 rounded-md font-mono text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* Main Titles */}
                      <h4 className="font-display font-extrabold text-white text-lg tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <h5 className="font-sans text-xs text-slate-300 font-semibold mb-4 text-emerald-400 flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {item.subtitle}
                      </h5>

                      {/* Location & CGPA */}
                      <div className="space-y-2 mb-6 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        {item.id === "viit-btech" && (
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-500 shrink-0 animate-pulse" />
                            <span className="font-bold text-slate-200">Current Cumulative Rating: 8.50 CGPA</span>
                          </div>
                        )}
                      </div>

                      {/* Timeline descriptions Bullet points */}
                      <ul className="space-y-2.5 pl-2">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-xs sm:text-[13px] text-slate-400 leading-relaxed font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
