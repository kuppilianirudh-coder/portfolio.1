import { motion } from 'motion/react';
import { Github, Star, Award, TrendingUp, Code, Sparkles, ExternalLink } from 'lucide-react';

export default function CodingProfiles() {
  // Top languages stats
  const languages = [
    { name: "Python", share: "42%", color: "bg-blue-500", rating: "Advanced" },
    { name: "JavaScript / TS", share: "34%", color: "bg-emerald-500", rating: "Advanced" },
    { name: "C Programming", share: "14%", color: "bg-purple-500", rating: "Intermediate" },
    { name: "SQL & Relational", share: "10%", color: "bg-amber-500", rating: "Expertise" }
  ];

  // Mock contribution cell states: 0: inert, 1: low, 2: medium, 3: high
  const contributionGrid = [
    [0, 1, 2, 0, 1, 3, 2, 0, 1, 0, 0, 1, 2, 3],
    [1, 0, 1, 2, 3, 0, 1, 1, 0, 2, 3, 0, 1, 2],
    [2, 3, 0, 1, 0, 2, 3, 0, 1, 2, 0, 1, 3, 1],
    [0, 1, 2, 3, 1, 0, 1, 2, 3, 0, 1, 2, 0, 3],
    [1, 2, 0, 1, 2, 3, 0, 1, 0, 2, 3, 0, 1, 2],
  ];

  const getContributionColor = (val: number) => {
    switch (val) {
      case 1: return 'bg-emerald-900/40';
      case 2: return 'bg-emerald-700/60';
      case 3: return 'bg-emerald-500';
      default: return 'bg-slate-950/80';
    }
  };

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute top-[30%] left-[-100px] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">DEVELOPER LOGS</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Profiles</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Live contribution simulations and performance indicators tracked across collaborative and competitive programming stations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profiles Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* GitHub Scorecard */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm card-glow flex flex-col justify-between text-left">
            <div>
              {/* Header profile info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-slate-950 rounded-2xl border border-white/10 text-white flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-[#F8FAFC] text-base">GitHub Dossier</h4>
                    <a 
                      href="https://github.com/kuppilianirudh-coder" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-mono text-xs text-blue-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      @kuppilianirudh-coder
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-md font-mono text-[9px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider">
                  Active Code Repos
                </span>
              </div>

              {/* GitHub Statistics cards row */}
              <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-display text-xl font-bold text-white tracking-tight">18+</p>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Repositories</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-display text-xl font-bold text-white tracking-tight">420+</p>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Contributions</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <p className="font-display text-xl font-bold text-white tracking-tight">9</p>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Star Counts</p>
                </div>
              </div>

              {/* Simulated Git contributions grid graph */}
              <div className="space-y-2.5 mb-8">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-between">
                  <span>Simulated Contribution Calendar Grid:</span>
                  <span className="text-[9px] text-emerald-400 font-bold">420 commits index</span>
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white-5/5 overflow-x-auto">
                  <div className="grid grid-rows-5 grid-flow-col gap-1 w-fit min-w-full">
                    {contributionGrid.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-1.5">
                        {row.map((cell, cIdx) => (
                          <div 
                            key={cIdx} 
                            className={`w-3 h-3 rounded-sm shrink-0 transition-colors duration-200 hover:scale-110 ${getContributionColor(cell)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top languages horizontal slide distribution */}
              <div className="space-y-3">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Core Language Distribution:</p>
                <div className="space-y-2.5">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-sans font-semibold text-slate-300">{lang.name}</span>
                        <span className="font-mono text-[11px] text-slate-400 font-bold">{lang.share} ({lang.rating})</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${lang.color} shadow-[0_0_8px_rgba(59,130,246,0.2)]`} 
                          style={{ width: lang.share }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900/80 mt-6 text-center">
              <a 
                href="https://github.com/kuppilianirudh-coder"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono bg-slate-950 border border-white/5 text-slate-300 hover:text-white transition-colors"
              >
                Inspect GitHub Repositories
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Codechef Scorecard */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm card-glow flex flex-col justify-between text-left">
            <div>
              {/* Header Profile Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-500 flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-[#F8FAFC] text-base">CodeChef Profile</h4>
                    <a 
                      href="https://www.codechef.com/users/anirudh_4_2" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-mono text-xs text-amber-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      kuppilianirudh_chef
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                  <Star className="w-2.5 h-2.5 fill-amber-400" />
                  <Star className="w-2.5 h-2.5 fill-amber-400" />
                  <span>2-Star Runner</span>
                </div>
              </div>

              {/* Competitive Programming stats */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4 mb-6">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Platform Rating Highlights</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono text-slate-400">CODECHEF USERNAME</p>
                    <p className="font-display font-bold text-white text-base">anirudh_4_2</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono text-slate-400">COMPETITIVE RATING</p>
                    <p className="font-display font-bold text-amber-400 text-base">1450+ Rating Index</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono text-slate-400">PROBLEMS SOLVED</p>
                    <p className="font-display font-bold text-white text-base">120+ Coding proofs</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono text-slate-400">STREAK MILESTONE</p>
                    <p className="font-display font-bold text-emerald-400 text-base">Active Challenger</p>
                  </div>
                </div>
              </div>

              {/* Algorithmic solving details bullet points */}
              <div className="space-y-4 mb-6 font-sans">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">COMPETITIVE PROGRAMMING FOCUS:</p>
                <ul className="space-y-3">
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono">✓</span>
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">Strong logical competence in Arrays, Math proof algorithms, String indexing operations, and Logical sort complexities.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono">✓</span>
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">Rigorous time complexity checks, ensuring algorithms operate inside standard constraints safely.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono">✓</span>
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">Consistently applying rigorous debugging routines to trace runtime failures on competitive test suites.</span>
                  </li>
                </ul>
              </div>

              {/* Extra micro visual badge info */}
              <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-center gap-2 text-xs text-slate-400 font-mono text-[10px]">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Consistently analyzing structural solutions to scale competitive ranks.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900/80 mt-6 text-center">
              <a 
                href="https://www.codechef.com/users/anirudh_4_2"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono bg-slate-950 border border-white/5 text-amber-400 hover:text-amber-300 transition-colors"
              >
                Inspect CodeChef Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
