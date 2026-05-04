'use client';

import { Download, Shield, Zap, Users, Sword, ChevronRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sword className="text-purple-500" size={28} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ApexPVP Client</h1>
          </div>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Sparkles size={14} className="text-purple-400" />
            <span>Next‑Gen Minecraft Client</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              ApexPVP
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The ultimate PVP client engineered for competitive players. 
            Dominate with unmatched performance, smooth gameplay, and powerful utilities.
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl text-lg font-bold transition transform hover:scale-105 shadow-lg"
          >
            <Download size={22} /> Get Client
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Why ApexPVP?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all group">
            <Zap className="mx-auto text-purple-400 mb-4 group-hover:scale-110 transition" size={48} />
            <h4 className="text-xl font-semibold mb-2">Ultra Performance</h4>
            <p className="text-gray-400">Optimized FPS and low ping for seamless PVP combat.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/50 transition-all group">
            <Shield className="mx-auto text-blue-400 mb-4 group-hover:scale-110 transition" size={48} />
            <h4 className="text-xl font-semibold mb-2">Advanced Protection</h4>
            <p className="text-gray-400">Secure and undetectable – stay ahead in every fight.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all group">
            <Users className="mx-auto text-pink-400 mb-4 group-hover:scale-110 transition" size={48} />
            <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
            <p className="text-gray-400">Constant updates based on player feedback.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center border-t border-white/10">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Ready to dominate?
        </h3>
        <p className="text-gray-300 mb-8">Download ApexPVP Client and start winning.</p>
        <a
          href="/download"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2 mx-auto transition transform hover:scale-105 shadow-lg inline-flex"
        >
          <Download size={22} /> Get Client
        </a>
        <p className="text-sm text-gray-500 mt-4">Version 1.21.11 | Windows / Mac / Linux</p>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
