import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, Search, CheckCircle, Sparkles, X, PlusCircle, Globe, ZoomIn, ZoomOut, Upload, RotateCcw } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { Certification } from '../types';

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  
  const [certs, setCerts] = useState<Certification[]>(() => {
    return CERTIFICATIONS.map((cert) => {
      try {
        const saved = localStorage.getItem(`custom_cert_img_${cert.id}`);
        if (saved) {
          return { ...cert, image: saved };
        }
      } catch (e) {
        console.error("Storage read failed", e);
      }
      return cert;
    });
  });

  const [activeCertModal, setActiveCertModal] = useState<Certification | null>(null);

  const handleImageUpload = (certId: string, file: File) => {
    if (!file) return;
    
    if (file.size > 2.5 * 1024 * 1024) {
      alert("This image file is too large. To save reliably in your web storage, please upload an image under 2.5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Data = e.target?.result as string;
      if (base64Data) {
        try {
          localStorage.setItem(`custom_cert_img_${certId}`, base64Data);
          
          setCerts(prev => prev.map(c => c.id === certId ? { ...c, image: base64Data } : c));
          
          if (activeCertModal && activeCertModal.id === certId) {
            setActiveCertModal(prev => prev ? { ...prev, image: base64Data } : null);
          }
        } catch (err) {
          console.error("Failed to write to localStorage:", err);
          alert("Web storage limit exceeded. Try reducing resolution/file size before uploading.");
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = (certId: string) => {
    try {
      localStorage.removeItem(`custom_cert_img_${certId}`);
      
      const original = CERTIFICATIONS.find(c => c.id === certId);
      if (original) {
        setCerts(prev => prev.map(c => c.id === certId ? { ...c, image: original.image } : c));
        
        if (activeCertModal && activeCertModal.id === certId) {
          setActiveCertModal(prev => prev ? { ...prev, image: original.image } : null);
        }
      }
    } catch (e) {
      console.error("Failed to delete local storage item:", e);
    }
  };

  const filteredCerts = certs.filter((cert) => {
    const query = searchQuery.toLowerCase();
    return (
      cert.name.toLowerCase().includes(query) ||
      cert.organization.toLowerCase().includes(query) ||
      cert.skillsLearned.some(skill => skill.toLowerCase().includes(query))
    );
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute bottom-[20%] left-[-120px] w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">VALIDATED CREDENTIALS</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Certifications</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Professional badges, courses, and job simulations validated by industry leaders such as Google, Deloitte, Infosys, and IBM.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certificate search box */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search credentials (e.g. SQL, Google, AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl text-xs font-mono text-slate-200 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Grid display layout */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-900/30 border border-white/5 hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-left"
              >
                {/* Image overview with zoom hover overlay icon */}
                <div 
                  className="relative h-40 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => {
                    setActiveCertModal(cert);
                    setIsZoomed(false);
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.name} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating organization visual icon */}
                  <div className="absolute top-3 left-3 p-1 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-white/10 w-9 h-9 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt="Provider logo placeholder"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Absolute positioned quick upload overlay button */}
                  <div className="absolute top-3 right-3 z-20">
                    <label 
                      onClick={(e) => e.stopPropagation()} // Prevent card modal click
                      className="p-1.5 px-2.5 rounded-lg bg-slate-950/95 backdrop-blur-sm border border-white/10 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/30 cursor-pointer text-[10px] font-mono flex items-center gap-1.5 transition-all font-bold select-none shadow-lg"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload JPG</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(cert.id, file);
                        }}
                      />
                    </label>
                  </div>

                  {/* High fidelity zoom badge on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="p-2.5 rounded-full bg-blue-600/90 text-white shadow-lg shadow-blue-500/30 font-mono text-xs flex items-center gap-1.5 transition-transform duration-300 font-bold">
                      <ZoomIn className="w-4 h-4" />
                      <span>Inspect Credential</span>
                    </div>
                  </div>
                </div>

                {/* Info and action blocks */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 uppercase font-semibold mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{cert.organization}</span>
                    </div>
                    
                    <h4 className="font-display font-bold text-white text-sm mb-3 tracking-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                      {cert.name}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-slate-900/80 flex items-center justify-between">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />
                      {cert.issueDate}
                    </span>

                    {cert.verificationBadge && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase">
                        <CheckCircle className="w-2.5 h-2.5" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-mono text-slate-500 text-sm">No verification credentials match "{searchQuery}"</p>
          </div>
        )}

        {/* Credentials zoom and specs details modal overlay */}
        <AnimatePresence>
          {activeCertModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCertModal(null)}
                className="fixed inset-0 bg-[#02050b] backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-2xl w-full rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#070b13] border border-white/10 shadow-2xl overflow-hidden z-10 p-5 sm:p-7 flex flex-col max-h-[90vh]"
              >
                {/* Header card inside view modal */}
                <div className="flex items-center justify-between mb-5 shrink-0 z-10 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Credential Inspection Desk</span>
                  </div>
                  <button
                    onClick={() => setActiveCertModal(null)}
                    className="p-1 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                <div className="overflow-y-auto flex-1 space-y-5 pr-1">
                  
                  {/* High Quality credentials illustration with interactive click zoom */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-white/5 select-none shadow-lg">
                    <div 
                      className={`relative overflow-hidden transition-all duration-300 flex items-center justify-center cursor-zoom-in ${
                        isZoomed ? 'scale-125 h-72' : 'h-48 sm:h-56'
                      }`}
                      onClick={() => setIsZoomed(!isZoomed)}
                    >
                      <img
                        src={activeCertModal.image}
                        alt={`${activeCertModal.name} full certificate illustration`}
                        className="w-full h-full object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                      {/* Gradient outline border glow effects */}
                      <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none"></div>
                    </div>
                    
                    {/* Control tooltips overlay */}
                    <button 
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                    >
                      {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                      <span>{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                    </button>
                  </div>

                  {/* Interactive Selector Controls */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-slate-950/40 border border-white/5 rounded-xl shrink-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 font-mono text-[10px] font-bold cursor-pointer transition-all border border-blue-500/10 hover:border-blue-500/20">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Your Certificate File</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(activeCertModal.id, file);
                          }}
                        />
                      </label>
                      
                      {localStorage.getItem(`custom_cert_img_${activeCertModal.id}`) && (
                        <button
                          onClick={() => handleResetImage(activeCertModal.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 font-mono text-[10px] font-bold cursor-pointer transition-all border border-red-500/10 hover:border-red-500/20"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset Photo</span>
                        </button>
                      )}
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 self-end sm:self-center">Supports JPG, PNG, WebP (Max 2.5MB)</span>
                  </div>

                  {/* Certificate Information Text Blocks */}
                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div>
                      <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 uppercase font-bold mb-0.5">
                        <Award className="w-3.5 h-3.5 text-blue-400" />
                        <span>{activeCertModal.organization}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
                        {activeCertModal.name}
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 mt-1 uppercase">Issued on: {activeCertModal.issueDate}</p>
                    </div>

                    {/* Verified Status Banner */}
                    <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start gap-2.5 font-sans">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="font-bold text-white text-[12.5px]">Verified Academy Credential</p>
                        <p className="text-[11px] text-slate-400 leading-snug">This accreditation is authenticated directly by corporate partners and represents verified competence.</p>
                        
                        {(activeCertModal.credentialId || activeCertModal.verificationUrl) && (
                          <div className="mt-3.5 pt-3 border-t border-emerald-500/10 space-y-2">
                            {activeCertModal.credentialId && (
                              <div className="flex items-center justify-between text-[11px] gap-2">
                                <span className="font-mono text-slate-500 uppercase shrink-0">Credential ID:</span>
                                <span className="font-mono text-slate-300 font-bold select-all bg-slate-950/60 px-2 py-0.5 rounded border border-white/5 truncate">{activeCertModal.credentialId}</span>
                              </div>
                            )}
                            {activeCertModal.verificationUrl && (
                              <div className="flex items-center justify-between text-[11px] gap-2">
                                <span className="font-mono text-slate-500 uppercase shrink-0">Online Link:</span>
                                <a 
                                  href={activeCertModal.verificationUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 hover:underline bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 transition-all font-bold"
                                >
                                  <Globe className="w-3 h-3" />
                                  <span>Verify Credential</span>
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Competency Learned Tags */}
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">Aesthetic & Practical competencies validated:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCertModal.skillsLearned.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 rounded-lg bg-slate-950 border border-white/5 font-mono text-[11.5px] text-slate-300 flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between shrink-0">
                  <span className="font-mono text-[10px] text-slate-600 uppercase">Anirudh Kuppili dossier</span>
                  <button
                    onClick={() => setActiveCertModal(null)}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    Acknowledge Verification
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
