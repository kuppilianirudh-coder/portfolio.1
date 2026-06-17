import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles, Terminal, Mail, Phone, Download } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled styling trigger
      setScrolled(window.scrollY > 20);

      // Scroll progress tracking line
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section highlight logic
      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.slice(1),
            offset: Math.abs(rect.top - 100),
          };
        }
        return { id: '', offset: Infinity };
      });

      const closest = sections.reduce((min, curr) => (curr.offset < min.offset ? curr : min), {
        id: 'home',
        offset: Infinity,
      });
      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll indicator bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/40 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-3 group cursor-pointer text-left"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-blue-500/10 transition-transform">
                AK
                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 opacity-20 group-hover:opacity-60 blur-xs transition duration-300"></span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm sm:text-base font-bold leading-none text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                  Anirudh Kuppili
                </h1>
                <span className="text-[9px] sm:text-[10px] text-blue-400 font-mono tracking-wider mt-1 font-semibold">
                  SOFTWARE ENGINEER // B.TECH CSE
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center gap-1 px-1.5 py-1 bg-slate-950/40 rounded-full border border-white/5 backdrop-blur-sm">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className={`relative px-4 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navPill"
                          className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="h-4 w-[1px] bg-slate-800 mx-3"></div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-xl border border-white/5 bg-slate-950/40 hover:bg-slate-900 text-slate-300 hover:text-white transition-all hover:scale-105 cursor-pointer relative group"
                aria-label="Toggle visual tone"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 duration-200 pointer-events-none whitespace-nowrap">
                  {isDarkMode ? 'Warm Tones' : 'Slate Mode'}
                </span>
              </button>

              {/* Action Recruit Resume Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold font-mono bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 hover:opacity-90 active:scale-95 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Hire Me
              </a>
            </div>

            {/* Mobile Navigation controls */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-white/5 bg-slate-950/40 text-slate-300 cursor-pointer"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl border border-white/5 bg-slate-950/40 text-slate-300 hover:text-white active:scale-95 cursor-pointer"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#020617] h-full w-full z-40 lg:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-[#090d16]/95 border-l border-white/5 backdrop-blur-xl z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-bold text-white text-base">Navigation</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg border border-white/5 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500'
                            : 'text-slate-400 hover:bg-slate-900/50 hover:text-white'
                        }`}
                      >
                        {item.name}
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 font-mono mb-3">CONVERSATIONS & LEADS</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="mailto:kuppilianirudh@gmail.com"
                    className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" /> kuppilianirudh@gmail.com
                  </a>
                  <a
                    href="tel:8523856898"
                    className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> 8523856898
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#contact');
                    }}
                    className="mt-2 text-center py-2.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-500 to-emerald-500 text-[#090d16]"
                  >
                    Send Instant Message
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
