import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, FileText, Send, Terminal, Sparkles, Github, Database, Cpu, Layers, Braces } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

// Path to the generated avatar
const profileAvatarPath = "/src/assets/images/profile_avatar_1781533589017.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const currentTagline = PERSONAL_DETAILS.taglines[taglineIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      if (!isDeleting) {
        setTypedText(currentTagline.substring(0, typedText.length + 1));
        setTypingSpeed(90);
        
        if (typedText === currentTagline) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 1600);
          return;
        }
      } else {
        setTypedText(currentTagline.substring(0, typedText.length - 1));
        setTypingSpeed(40);
        
        if (typedText === '') {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_DETAILS.taglines.length);
          timer = setTimeout(() => {}, 400);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, taglineIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock Resume download verification modal helper
  const handleDownloadResume = () => {
    // Generate a simple temporary print trigger or trigger browser download file alert gracefully
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Resume - Anirudh Kuppili</title>
            <style>
              body { font-family: sans-serif; padding: 40px; color: #1e293b; max-width: 800px; margin: 0 auto; line-height: 1.6; }
              h1 { color: #0f172a; margin-bottom: 5px; }
              .sub { color: #3b82f6; font-size: 1.1em; margin-bottom: 20px; font-weight: bold; }
              h2 { border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 30px; color: #0f172a; }
              ul { padding-left: 20px; }
              .meta { display: flex; justify-content: space-between; font-weight: bold; color: #475569; }
            </style>
          </head>
          <body>
            <h1>ANIRUDH KUPPILI</h1>
            <div class="sub">B.Tech Computer Science student | Aspiring Software Developer</div>
            <p><strong>Email:</strong> kuppilianirudh@gmail.com | <strong>Phone:</strong> 8523856898 | <strong>Visakhapatnam, India</strong></p>
            
            <h2>EDUCATION</h2>
            <div class="meta">
              <span>Vignan's Institute of Information Technology</span>
              <span>2023 - Present</span>
            </div>
            <p>B.Tech Computer Science Engineering | CGPA: 8.50/10</p>

            <h2>SKILLS</h2>
            <p><strong>Languages:</strong> C, Python, JavaScript, SQL, TypeScript</p>
            <p><strong>Web Tech:</strong> React.js, Node.js, Express.js, Tailwind CSS, HTML, CSS</p>
            <p><strong>Databases:</strong> MySQL, MongoDB</p>
            <p><strong>Developer Tools:</strong> Git, GitHub, VS Code, Postman, Gemini AI Studio</p>

            <h2>PROJECTS</h2>
            <p><strong>QuickChargeV - AI-Powered EV Charging Platform</strong> (Hackathon Project)</p>
            <ul>
              <li>Configured smart EV station identification recommendations based on live occupancy.</li>
              <li>Integrated Flutter client, Firebase databases, and Google Maps API coordinates trackers.</li>
            </ul>

            <p><strong>Placement Management System</strong></p>
            <ul>
              <li>Designed recruitment flow management tracking students, placement criteria, and verification algorithms.</li>
            </ul>

            <h2>CERTIFICATIONS</h2>
            <ul>
              <li>Google Introduction to AI (Coursera - May 2026)</li>
              <li>Database Management System Part-1 (Infosys Springboard - Feb 2026)</li>
              <li>Data Analytics Job Simulation (Deloitte - Jan 2026)</li>
              <li>SQL and Relational Databases 101 (IBM - Nov 2025)</li>
            </ul>
            <script>window.print();</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    } else {
      alert("Printable resume opened, but popup was blocked. Please allow popups or use Google Print.");
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Animated background mesh */}
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        {/* Glowing gradient backdrops */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* Soft elegant grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35">
          <div className="w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        </div>
        
        {/* Noise layer */}
        <div className="absolute inset-0 noise-bg"></div>
      </div>

      {/* Floating Interactive Tech Icons */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] p-3 rounded-2xl bg-slate-900/40 border border-white/5 text-blue-400 backdrop-blur-sm shadow-xl"
        >
          <Braces className="w-5 h-5" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[8%] p-3 rounded-2xl bg-slate-900/40 border border-white/5 text-emerald-400 backdrop-blur-sm shadow-xl"
        >
          <Database className="w-5 h-5" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[15%] right-[12%] p-3 rounded-2xl bg-slate-900/40 border border-white/5 text-sky-400 backdrop-blur-sm shadow-xl"
        >
          <Cpu className="w-5 h-5" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[20%] right-[15%] p-3 rounded-2xl bg-slate-900/40 border border-white/5 text-indigo-400 backdrop-blur-sm shadow-xl"
        >
          <Layers className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text items */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Special recruiter callout bubble */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-mono text-xs sm:text-sm mb-4 inline-block tracking-[0.2em] uppercase text-center lg:text-left mx-auto lg:mx-0 select-none font-semibold"
            >
              // Available for Internships
            </motion.span>

            {/* Main Greeting */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-none text-white select-none text-center lg:text-left">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400">{PERSONAL_DETAILS.fullName}</span>
            </h2>

            {/* Dynamic typed tagline */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-4 font-mono text-md sm:text-lg font-medium">
              <span className="text-slate-400">Specializing in&nbsp;</span>
              <span className="relative text-white font-semibold">
                {typedText}
                <span className="absolute -right-2 top-0 bottom-0 w-[2px] bg-blue-400 animate-pulse ml-1 inline-block"></span>
              </span>
            </div>

            {/* Professional bio */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8 text-center lg:text-left mx-auto lg:mx-0">
              A computer science engineer passionate about building intelligent solutions. Specializing in <span className="text-white">Full Stack Development</span> and <span className="text-white">AI/ML</span> at Vignan's Institute of Information Technology.
            </p>

            {/* Buttons call actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              
              {/* Primary: View Projects */}
              <button
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-98 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary: Download CV Printable Resume version */}
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-850 active:scale-98 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </button>

              {/* Contact direct scroll */}
              <button
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-mono text-slate-400 hover:text-slate-300 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Contact Me
              </button>
            </div>
            
            {/* Quick stats panel */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs text-slate-300 font-mono">B.TECH CSE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs text-slate-300 font-mono">CGPA: 8.50</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-slate-300 font-mono">AI ENTHUSIAST</span>
              </div>
            </div>

          </div>

          {/* Elegant geometric avatar placeholder mock */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer soft orbit lines */}
              <div className="absolute inset-0 rounded-full border border-blue-500/10"></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/15"></div>
              
              {/* Corner tech visual brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-500/40 rounded-br-lg"></div>
              
              {/* Main Avatar container with glass glow */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 group shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={profileAvatarPath}
                    alt="Anirudh Kuppili avatar illustration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient screen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>

              {/* Float floating metric tags - Architectural Honesty */}
              <div className="absolute -right-2 top-1/4 px-3 py-1.5 rounded-xl bg-[#090d16]/95 border border-white/10 text-emerald-400 font-mono text-[10px] tracking-wide flex items-center gap-1.5 shadow-lg shadow-black/40 select-none">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Active Learner</span>
              </div>

              <div className="absolute -left-6 bottom-1/4 px-3 py-1.5 rounded-xl bg-[#090d16]/95 border border-white/10 text-blue-400 font-mono text-[10px] tracking-wide flex items-center gap-1.5 shadow-lg shadow-black/40 select-none">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                <span>React + AI</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Scroll indicator pointing down */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => handleScrollTo('#about')}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors group cursor-pointer"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-slate-300">Discover More</span>
            <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
              ></motion.div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
