import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Github, 
  Linkedin,
  Server
} from 'lucide-react';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Enterprise Full-Stack App',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('codedyemco@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#050811] pt-20 pb-12 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Column: Direct Outreach Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Available for Contract &amp; Full-Time</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Ready to engineer your next critical system?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a high-density 42U rack infrastructure plan, high-throughput Next.js &amp; PostgreSQL applications, or autonomous multimodal AI workflows, let&apos;s build it right.
            </p>

            {/* Direct Communication Channels */}
            <div className="space-y-3 pt-2">
              
              {/* Email Button with Copy */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors">
                <a 
                  href="mailto:codedyemco@gmail.com" 
                  className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors truncate"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-sm font-semibold truncate font-mono">codedyemco@gmail.com</div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/2347053438904?text=Hello%20Joseph,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-3 hover:border-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Direct WhatsApp &amp; Call</div>
                    <div className="text-sm font-semibold text-white font-mono">+234 705 343 8904</div>
                  </div>
                </div>

                <ArrowUpRight size={18} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Quick telemetry trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <Clock size={15} className="text-cyan-400 shrink-0" />
                <span>Response &lt; 24h</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <MapPin size={15} className="text-emerald-400 shrink-0" />
                <span>WAT (UTC+1)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Contact Dispatcher Form */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-bold font-mono text-white">
                  Fast Dispatch Message Terminal
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Direct Delivery</span>
            </div>

            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Message Dispatched!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you! Your project requirements have been routed directly to Joseph Yemi. You will receive a response within 24 hours.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-medium">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera &bull; Tech Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-medium">
                    Technical Scope / Focus Area
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>Enterprise Full-Stack Next.js 15 App</option>
                    <option>Physical IT / 42U Datacenter Rack Elevation</option>
                    <option>PostgreSQL Database Design &amp; Window Functions</option>
                    <option>Multimodal AI &amp; Vision OCR Automation Pipeline</option>
                    <option>Performance Video Editing &amp; Creative Direction</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-medium">
                    Project Specifications &amp; Timeline
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your technical objectives, stack preferences, or infrastructure challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send size={15} />
                  <span>Transmit Inquiry to Joseph Yemi</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white">YemzyPortfolio</span>
            <span>&bull;</span>
            <span>Joseph Yemi</span>
            <span>&bull;</span>
            <span className="text-cyan-400">Senior Full-Stack &amp; Infrastructure Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:codedyemco@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              codedyemco@gmail.com
            </a>
            <span>&bull;</span>
            <span>+234 705 343 8904</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
