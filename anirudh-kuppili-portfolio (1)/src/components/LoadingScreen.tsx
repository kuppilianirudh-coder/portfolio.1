import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code2, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("Initializing Core Modules...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        
        // Update phases based on load progress for the premium look
        if (prev === 25) setPhase("Connecting to Database Schemas...");
        if (prev === 55) setPhase("Hydrating Interactive Bento Grids...");
        if (prev === 80) setPhase("Securing Recruiter Portal Credentials...");
        
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="loader-wrapper" className="fixed inset-0 bg-[#070b13] z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial soft light glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] top-1/4 left-1/4 animate-pulse-slow"></div>
      <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] bottom-1/4 right-1/4 animate-float"></div>
      
      {/* Micro matrix dots background */}
      <div className="absolute inset-0 noise-bg opacity-5"></div>
      
      <div className="relative z-10 max-w-md w-full px-6 text-center">
        {/* Animated Icon Circle */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 border border-blue-500/30 rounded-2xl mb-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] animate-float"
        >
          <Cpu className="w-10 h-10 text-blue-400 animate-pulse" />
        </motion.div>

        {/* Developer Branding */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2"
        >
          ANIRUDH KUPPILI
        </motion.h1>
        
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs md:text-sm text-blue-400 tracking-wider font-mono mb-12 uppercase"
        >
          Portfolio Engine v2.0
        </motion.p>

        {/* Loader Progress Core */}
        <div className="relative w-full h-[3px] bg-slate-900 border border-slate-800 rounded-full mb-4 overflow-hidden shadow-inner">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 shadow-[0_0_12px_#3b82f6]"
            style={{ width: `${progress}%` }}
          ></motion.div>
        </div>

        {/* Dynamic status phase tags */}
        <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 min-w-0 truncate">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500 shrink-0 animate-spin" />
            <span className="truncate">{phase}</span>
          </span>
          <span className="font-semibold text-blue-400 ml-2 shrink-0">{progress}%</span>
        </div>
      </div>
      
      {/* Decorative side coordinates - Architectural Honesty: Let's avoid overly verbose larp info but keep single visual indicator */}
      <div className="absolute right-6 bottom-6 font-mono text-[10px] text-slate-600">
        VISAKHAPATNAM | AP
      </div>
    </div>
  );
}
