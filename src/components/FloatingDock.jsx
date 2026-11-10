import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  History, 
  Send, 
  MessageCircle, 
  Mail, 
  ArrowUp
} from 'lucide-react';

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('dossier');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['dossier', 'vectors', 'workstation', 'milestones', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
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

  const navItems = [
    { id: 'dossier', label: 'Briefing', icon: Terminal },
    { id: 'vectors', label: 'Vectors', icon: Layers },
    { id: 'workstation', label: 'Systems Lab', icon: Cpu },
    { id: 'milestones', label: 'Milestones', icon: History },
    { id: 'contact', label: 'Connect', icon: Send },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-full bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-cyan-950/40 text-xs font-mono">
      {/* Navigation Pills */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

      {/* Quick Direct Actions */}
      <div className="flex items-center gap-1 pl-1">
        <a
          href="https://wa.me/2347053438904"
          target="_blank"
          rel="noreferrer"
          className="p-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 transition-colors"
          title="Direct WhatsApp"
        >
          <MessageCircle size={14} />
        </a>

        <a
          href="mailto:codedyemco@gmail.com"
          className="p-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 transition-colors"
          title="Direct Email"
        >
          <Mail size={14} />
        </a>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 transition-colors ml-0.5"
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
