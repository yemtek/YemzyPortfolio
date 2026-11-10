import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function CommunicationHub() {
  const [copied, setCopied] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [packet, setPacket] = useState({
    sender: '',
    email: '',
    systemDomain: 'Full-Stack Next.js 15 Application',
    payload: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('codedyemco@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    setTransmitted(true);
  };

  return (
    <footer id="contact" className="py-20 lg:py-28 bg-[#05070e] text-slate-200 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Left Column: Direct Identity & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Direct Engineering Communication Hub</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to architect resilient systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Available for full-time senior roles, high-impact enterprise contracts, datacenter infrastructure advisory, and custom multimodal AI automations.
            </p>

            {/* Direct Connect Buttons */}
            <div className="space-y-3 pt-2">
              
              {/* Primary Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors">
                <a
                  href="mailto:codedyemco@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors truncate"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Inquiries</div>
                    <div className="text-sm font-semibold font-mono truncate text-cyan-300">
                      codedyemco@gmail.com
                    </div>
                  </div>
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Direct WhatsApp Card */}
              <a
                href="https://wa.me/2347053438904?text=Hello%20Joseph,%20let's%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-3 hover:border-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Fast Response Channel</div>
                    <div className="text-sm font-semibold font-mono text-white">
                      +234 705 343 8904
                    </div>
                  </div>
                </div>

                <ArrowUpRight size={18} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Telemetry info */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-400">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2">
                <Clock size={15} className="text-cyan-400 shrink-0" />
                <span>Response &lt; 24h</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2">
                <MapPin size={15} className="text-emerald-400 shrink-0" />
                <span>WAT (UTC+1)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Project Dispatch Form */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-cyan-400" />
                <span className="font-bold text-white">DISPATCH CONSOLE // TRANSMIT BRIEF</span>
              </div>
              <span className="text-slate-400 text-[11px]">Direct Route</span>
            </div>

            {transmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Transmission Confirmed
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Your project requirements have been safely transmitted to Joseph Yemi. You will receive an engineering response within 24 hours.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-white/10 text-white hover:bg-white/15"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleTransmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-medium">
                      Your Identity / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance &bull; VP Systems"
                      value={packet.sender}
                      onChange={(e) => setPacket({ ...packet, sender: e.target.value })}
                      className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block font-medium">
                      Return Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@enterprise.org"
                      value={packet.email}
                      onChange={(e) => setPacket({ ...packet, email: e.target.value })}
                      className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-medium">
                    Technical Domain Focus
                  </label>
                  <select
                    value={packet.systemDomain}
                    onChange={(e) => setPacket({ ...packet, systemDomain: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>Full-Stack Next.js 15 / React 19 Application</option>
                    <option>Datacenter &amp; 42U Server Rack Elevation Planning</option>
                    <option>PostgreSQL Database Design &amp; Window Functions</option>
                    <option>Multimodal AI &amp; Vision OCR Automation Pipeline</option>
                    <option>Enterprise Linux Daemons &amp; Managed Switch VLANs</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-medium">
                    Project Objectives &amp; Technical Specs
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide context regarding your architecture requirements, infrastructure constraints, or timeline..."
                    value={packet.payload}
                    onChange={(e) => setPacket({ ...packet, payload: e.target.value })}
                    className="w-full text-xs font-mono p-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs font-mono bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send size={15} />
                  <span>Transmit Inquiry to Joseph Yemi</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Minimalist Footnote (No heavy menus) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-bold">Joseph Yemi</span>
            <span>&bull;</span>
            <span className="text-cyan-400">Senior Full-Stack &amp; Infrastructure Engineer</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Direct: codedyemco@gmail.com</span>
            <span>&bull;</span>
            <span>+234 705 343 8904</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
