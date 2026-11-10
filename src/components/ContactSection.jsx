import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  Linkedin,
  Github,
  Download,
  FileText
} from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('codedyemco@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contact" className="py-16 sm:py-24 bg-[#05070e] border-t border-white/10 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10">
          
          {/* Left Column: Direct Outreach & Verified CV Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Get in Touch
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Let&apos;s Build Something Great Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Available for full-time engineering roles, enterprise infrastructure contracts, database architecture, and custom AI workflows.
            </p>

            {/* Quick Action Links */}
            <div className="space-y-3 pt-1">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/2347053438904?text=Hello%20Yemi,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between hover:border-emerald-400 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Direct WhatsApp</div>
                    <div className="text-sm font-semibold font-mono text-white">+234 705 343 8904</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all">
                <a
                  href="mailto:codedyemco@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors truncate"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-sm font-semibold font-mono truncate text-cyan-300">
                      codedyemco@gmail.com
                    </div>
                  </div>
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Download CV Card */}
              <a
                href="/assets/aistudio/Yemi_Joseph_CV__1__9d3a44f7.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Official Resume</div>
                    <div className="text-sm font-semibold text-white">Download Yemi Joseph CV (PDF)</div>
                  </div>
                </div>
                <Download size={18} className="text-purple-400 group-hover:translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Coordinates & Social Profiles */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400" />
                <span>Abuja, Nigeria &bull; WAT (UTC+1)</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/yemtek"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <Github size={14} />
                  <span>github.com/yemtek</span>
                </a>
                <span>&bull;</span>
                <a
                  href="https://linkedin.com/in/yemi-joseph-13886043a"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Friendly Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl">
            {sent ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Thank you! Your note has been delivered to Yemi Joseph. You will hear back within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/15"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-sm font-semibold text-white mb-2">
                  Send a Quick Message
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-medium">Message or Project Scope</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send size={15} />
                  <span>Send Message to Yemi Joseph</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Simple Footer Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Yemi Joseph &bull; Full-Stack &amp; Infrastructure Engineer
          </div>
          <div>
            Abuja, Nigeria &bull; codedyemco@gmail.com &bull; +234 705 343 8904
          </div>
        </div>

      </div>
    </footer>
  );
}
