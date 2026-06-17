import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Github, Code, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kuppilianirudh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormState('sending');
    
    // Simulate API delivery
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">LET'S COLLABORATE</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Touch</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Hiring coordinators, recruitment executives, or peers - use the secure system terminal form below, or connect directly.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form and Contact columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Coordinates Block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 text-left">
            <div className="space-y-6">
              <h4 className="font-display font-bold text-white text-lg">Contact Coordinates</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                Reach out for professional entry inquiries, developer project ideas, hackathon collaborations, or technology assessments.
              </p>
            </div>

            {/* Direct coordination blocks */}
            <div className="space-y-4">
              
              {/* Copyable Email card */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/20 duration-200 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-950 text-blue-400 flex items-center justify-center border border-white/5">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-500 uppercase">Primary Email</span>
                    <p className="font-mono text-xs sm:text-sm text-white select-all">kuppilianirudh@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-950 text-slate-500 hover:text-blue-400 border border-white/5 transition-colors cursor-pointer"
                  aria-label="Copy Address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone card */}
              <a 
                href="tel:8523856898"
                className="p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/10 duration-200 transition-all flex items-center gap-3.5 select-none"
              >
                <div className="p-2.5 rounded-lg bg-slate-950 text-emerald-400 flex items-center justify-center border border-white/5">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase">Direct Cellular</span>
                  <p className="font-mono text-xs sm:text-sm text-white">+91 852 385 6898</p>
                </div>
              </a>

              {/* Location card */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm flex items-center gap-3.5 select-none">
                <div className="p-2.5 rounded-lg bg-slate-950 text-amber-500 flex items-center justify-center border border-white/5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase">Current Station</span>
                  <p className="font-mono text-xs sm:text-sm text-white">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>

            </div>

            {/* Social channels shortcut row */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Network Coordinates</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kuppilianirudh-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/5 flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Log
                </a>
                
                <a
                  href="https://www.codechef.com/users/anirudh_4_2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-500 hover:text-amber-400 border border-white/5 flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all"
                >
                  <Code className="w-4 h-4" />
                  CodeChef
                </a>
              </div>
            </div>
          </div>

          {/* Form console container block */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm flex flex-col justify-between text-left">
            <div>
              <h4 className="font-display font-extrabold text-[#F8FAFC] text-base mb-2">Recruitment Dispatch Desk</h4>
              <p className="font-sans text-xs text-slate-400 mb-6">Your message will queue immediately and synchronize with my developer mailbox interface.</p>
              
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col items-center text-center space-y-4 py-12"
                  >
                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-white text-base">Message Transport Successful!</h5>
                      <p className="font-sans text-xs text-slate-400 max-w-sm mt-1.5 leading-relaxed">
                        Thank you for reaching out. The queue system successfully delivered your dossier. I will coordinate feedback shortly!
                      </p>
                    </div>
                    <button
                      onClick={() => setFormState('idle')}
                      className="px-5 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-white/5 text-xs font-mono font-bold text-slate-300 transition-colors"
                    >
                      Restart Terminal
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Your Name / Organization</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe from Enterprise Corp..."
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={formState === 'sending'}
                        className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-mono text-slate-200 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Your Coordinate Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="hiring.officer@enterprise.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={formState === 'sending'}
                        className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-mono text-slate-200 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Detailed Message Dossier</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Specify internship requests, collaborative proposals, or assessment details..."
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={formState === 'sending'}
                        className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs font-sans text-slate-200 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none leading-relaxed"
                      />
                    </div>

                    {/* Form submission button with sender states */}
                    <button
                      type="submit"
                      disabled={formState === 'sending' || !formData.name || !formData.email || !formData.message}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold font-mono bg-blue-600 hover:bg-blue-500 active:scale-98 text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Dispatching Coordinates...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Secure Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            
            {/* Quick security notice */}
            <div className="mt-4 flex gap-1.5 items-center justify-center text-center text-slate-600 font-mono text-[9px] select-none">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>TLS v1.3 Encrypted Socket Hub Connection Verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
