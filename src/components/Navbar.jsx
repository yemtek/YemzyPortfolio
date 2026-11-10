import React, { useState } from 'react';
import { Code2, Video, PenTool, Menu, X, ArrowUpRight, Terminal, Mail } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Competencies', href: '#competencies' },
    { label: 'Featured Systems', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#060913]/90 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-sm">
              <Terminal size={20} className="group-hover:rotate-6 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Yemzy<span className="text-cyan-400 group-hover:text-emerald-400 transition-colors">Portfolio</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                Systems &middot; Infra &middot; AI
              </span>
            </div>
          </a>
        </div>

        {/* 3-Way Mode Switcher (Required Pills: Dev, Creator, Design) */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-full border border-white/10 shadow-inner">
          <button
            onClick={() => setActiveTab('dev')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'dev'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Code2 size={14} />
            <span>&lt;&gt; Dev</span>
          </button>

          <button
            onClick={() => setActiveTab('creator')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'creator'
                ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Video size={14} />
            <span>Creator</span>
          </button>

          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'design'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <PenTool size={14} />
            <span>Design</span>
          </button>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-cyan-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:codedyemco@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm"
          >
            <Mail size={14} />
            <span>Contact</span>
            <ArrowUpRight size={14} className="opacity-70" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-white/10 bg-[#070b16]/98 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="mailto:codedyemco@gmail.com"
              className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 font-bold"
            >
              Get in Touch (codedyemco@gmail.com)
            </a>
            <a
              href="https://wa.me/2347053438904"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"
            >
              WhatsApp &middot; +234 705 343 8904
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
