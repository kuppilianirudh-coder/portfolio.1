import { motion } from 'motion/react';
import { Landmark, GraduationCap, MapPin, Sparkles, Code2, Brain, Flame, CalendarRange } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const stats = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      title: "B.Tech CSE Student",
      value: "Pursuing Engineering",
      color: "border-blue-500/10 hover:border-blue-500/30",
      desc: "Computer Science Branch specializing in system architecture & software paradigms."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />,
      title: "Academic Score",
      value: "CGPA: 8.50 / 10",
      color: "border-yellow-500/10 hover:border-yellow-500/30",
      desc: "Honorable academic performance at Vignan's Institute of Information Technology."
    },
    {
      icon: <Landmark className="w-5 h-5 text-indigo-400" />,
      title: "Host Institution",
      value: "Vignan's Institue (VIIT)",
      color: "border-indigo-500/10 hover:border-indigo-500/30",
      desc: "Prominent engineering academy equipped with state-of-the-art incubation units."
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      title: "Current Location",
      value: "Visakhapatnam, AP, India",
      color: "border-emerald-500/10 hover:border-emerald-500/30",
      desc: "A beautiful coastal smart-city scaling as a prominent Indian tech center."
    },
    {
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      title: "Special Interest",
      value: "AI & Neural Tech",
      color: "border-pink-500/10 hover:border-pink-500/30",
      desc: "Passionate about cognitive AI agents, prompt configurations, and intelligence models."
    },
    {
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      title: "Full Stack Enthusiast",
      value: "MERN Stack Learner",
      color: "border-sky-500/10 hover:border-sky-500/30",
      desc: "Building highly modular client components coupled with secure database backends."
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      title: "Adaptive Mindset",
      value: "Continuous Fast Learner",
      color: "border-orange-500/10 hover:border-orange-500/30",
      desc: "Rapidly picking up frameworks; actively testing production app variables regularly."
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-cyan-400" />,
      title: "Hiring Availability",
      value: "Open to Internships",
      color: "border-cyan-500/10 hover:border-cyan-500/30",
      desc: "Ready to join agile teams to design intelligent solutions and deliver production work."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">ABOUT PROFILE dossier</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Future Engineer, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Current Innovator</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Modular Bento Grid Dashboard Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl glass-panel border transition-all duration-300 card-glow cursor-default ${card.color}`}
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <h4 className="font-mono text-xs text-slate-400 tracking-wide uppercase">{card.title}</h4>
              </div>
              
              <h5 className="font-display text-base font-bold text-white mb-2 tracking-tight">
                {card.value}
              </h5>
              
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative Personal Summary box */}
        <div className="mt-12 p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
              🎯 INITIATOR STATS
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-display text-base font-bold text-white mb-2">My Strategic Intent</h4>
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                \"As an engineering student in Computer Science, I believe software systems provide the leverage to solve massive coordination and logistics problems around us. I train actively in modern web databases, algorithms, and prompt optimizations to develop systems that feel elegant to end users and highly secure for dev teams.\"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
