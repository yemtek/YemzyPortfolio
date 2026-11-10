import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  FolderKanban, 
  Briefcase, 
  GraduationCap,
  Mail, 
  MessageCircle, 
  ArrowUp,
  FileDown
} from 'lucide-react';

export default function NavigationDock() {
  const [active, setActive] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

      const sections = ['skills', 'projects', 'experience', 'education', 'contact'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/15 shadow-2xl text-xs font-mono">
      <button
        onClick={() => scrollTo('skills')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          active === 'skills'
            ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        Skills
      </button>

      <button
        onClick={() => scrollTo('projects')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          active === 'projects'
            ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        Projects
      </button>

      <button
        onClick={() => scrollTo('experience')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          active === 'experience'
            ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        Experience
      </button>

      <button
        onClick={() => scrollTo('education')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          active === 'education'
            ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        Education
      </button>

      <button
        onClick={() => scrollTo('contact')}
        className={`px-3 py-1.5 rounded-full transition-all ${
          active === 'contact'
            ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        Contact
      </button>

      <div className="w-[1px] h-4 bg-white/15 mx-0.5" />

      {/* CV Download Icon */}
      <a
        href="/assets/aistudio/Yemi_Joseph_CV__1__9d3a44f7.pdf"
        target="_blank"
        rel="noreferrer"
        className="p-1.5 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
        title="Download CV (PDF)"
      >
        <FileDown size={14} />
      </a>

      {/* WhatsApp Quick Icon */}
      <a
        href="https://wa.me/2347053438904"
        target="_blank"
        rel="noreferrer"
        className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={14} />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
          title="Back to Top"
        >
          <ArrowUp size={14} />
        </button>
      )}
    </div>
  );
}
