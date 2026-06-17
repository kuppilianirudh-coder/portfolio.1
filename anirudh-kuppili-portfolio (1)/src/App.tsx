/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ArrowUp, Sparkles, Terminal, Shield, Award, Send } from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDarkState = !isDarkMode;
    setIsDarkMode(nextDarkState);
    
    // Smooth custom color styling swaps on the document element/body
    if (!nextDarkState) {
      document.body.classList.add('light-mode-active');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    } else {
      document.body.classList.remove('light-mode-active');
      document.body.style.backgroundColor = '#0F172A';
      document.body.style.color = '#f1f5f9';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="portfolio-app-root" className={`relative min-h-screen font-sans ${isDarkMode ? 'dark text-slate-100' : 'light text-slate-800'}`}>
      
      {/* 1. Loading Entrance Curtain */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen"
        >
          {/* Main Navigation bar */}
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Dynamic Background Noise and Accent Blobs */}
          <div className="fixed inset-0 pointer-events-none noise-bg z-[1]"></div>
          
          {/* Main sections sequence */}
          <main className="relative z-10 overflow-hidden">
            <Hero />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>
            
            <About />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Skills />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Projects />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Certifications />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Achievements />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Education />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <CodingProfiles />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-[1px] bg-linear-to-r from-transparent via-slate-800/60 to-transparent"></div>
            </div>

            <Contact />
          </main>

          {/* Premium Recruiter Footer */}
          <footer className="relative z-10 py-12 bg-slate-950 border-t border-white/5 text-center px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Dev credentials brand */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-display font-extrabold text-white text-md tracking-tight">Anirudh Kuppili</span>
                <p className="text-[11px] text-slate-500 font-mono tracking-wider mt-1">"Turning Ideas into Intelligent Solutions."</p>
              </div>

              {/* Secure status tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[9px] text-slate-500">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                  <Shield className="w-3 h-3 text-blue-400" />
                  recruiter workspace verified
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  TLS v1.3 SECURE SOCKETS
                </span>
              </div>

              {/* Copyright terms */}
              <div className="text-[10px] text-slate-600 font-mono">
                &copy; 2026 Anirudh Kuppili. <br />
                All Rights Handcrafted.
              </div>

            </div>
          </footer>

          {/* Scroll Back To Top Button Pill */}
          <AnimatePresence>
            {showToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95 transition-all text-xs font-mono font-bold flex items-center justify-center cursor-pointer"
                aria-label="Back To Top"
              >
                <ArrowUp className="w-4.5 h-4.5 animate-bounce" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}
