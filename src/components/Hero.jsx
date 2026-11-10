import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  Copy, 
  Check, 
  FileText,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download
} from 'lucide-react';

export default function Hero({ onExploreProjects, onGetInTouch }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('codedyemco@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    'Next.js 15 (App Router)',
    'React 19',
    'TypeScript',
    'PostgreSQL (Neon.tech)',
    'SQL Window Functions',
    'Gemini / OpenAI API',
    'Multimodal OCR Vision',
    'n8n / Make Automation',
    '42U Rack Elevation',
    'Cisco Managed Switches',
    'AWS EC2 & PM2'
  ];

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Availability & Location Badge */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Stack, Database &amp; Infrastructure Projects</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono">
            <MapPin size={13} className="text-cyan-400" />
            <span>Abuja, Nigeria</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wide">
            Yemi Joseph (Yemzy)
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            Full-Stack &amp; Infrastructure Engineer |{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              AI &amp; Data Systems Specialist
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
            Versatile, results-driven Engineer with extensive experience engineering scalable web applications, managing physical/ELV IT infrastructure, and building intelligent automation pipelines. Adept at bridging physical hardware, cloud deployment pipelines, and business intelligence.
          </p>
        </div>

        {/* Straightforward Call to Actions & Social Links */}
        <div className="pt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <button
            onClick={onExploreProjects}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </button>

          <a
            href="https://wa.me/2347053438904?text=Hello%20Yemi,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30 transition-all"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>

          <a
            href="/assets/aistudio/Yemi_Joseph_CV__1__9d3a44f7.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 transition-all"
          >
            <Download size={16} className="text-cyan-400" />
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10 transition-all"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Email'}</span>
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 pl-1">
            <a
              href="https://github.com/yemtek"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/yemi-joseph-13886043a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Clean Tech Pills Strip */}
        <div className="pt-10 mt-10 border-t border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Competencies &amp; Tech Stack
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
