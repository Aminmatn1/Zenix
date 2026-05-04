'use client';

import { useState } from 'react';
import { Download, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export default function DownloadPage() {
  const [showAd, setShowAd] = useState(false);
  const [adCompleted, setAdCompleted] = useState(false);

  const completeAd = () => {
    setAdCompleted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>

      <header className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ApexPVP Client</h1>
          <a href="/" className="text-gray-300 hover:text-white">← Back to Home</a>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-2">Download ApexPVP Client</h1>
        <p className="text-center text-gray-400 mb-8">Version 1.21.11 – For Fabric & Fabric API</p>

        {/* Ad and download section */}
        <div className="bg-gray-900/50 rounded-2xl p-6 mb-8 text-center">
          {!showAd && !adCompleted && (
            <div>
              <p className="mb-4">Click the button below to start your download. A short ad will appear to support the project.</p>
              <button
                onClick={() => setShowAd(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto"
              >
                <Download size={20} /> Start Download
              </button>
            </div>
          )}

          {showAd && !adCompleted && (
            <div>
              <p className="mb-4">Please watch the ad below to unlock your download.</p>
              <button
                onClick={completeAd}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold"
              >
                📺 I watched the ad
              </button>
              <p className="text-xs text-gray-500 mt-4">(This is a simulation – replace with real ad network later)</p>
            </div>
          )}

          {adCompleted && (
            <div>
              <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
                <CheckCircle size={24} /> Ad completed! Your download is ready.
              </div>
              <a
                href="/client/ApexPVP-1.21.11.jar"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
                download
              >
                Click to Download ApexPVP Client (.jar)
              </a>
            </div>
          )}
        </div>

        {/* Tutorial / Instructions */}
        <div className="bg-gray-900/50 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📖 Installation Guide</h2>
          <div className="space-y-4 text-gray-300">
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-bold">✅ Requirements</p>
              <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                <li>Minecraft <strong>1.21.11</strong> (other versions will not work)</li>
                <li><a href="https://fabricmc.net/use/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Fabric Loader</a> + <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Fabric API</a> installed</li>
                <li>⚠️ <strong>Do not use 1.21.1</strong> – it will not receive updates or support</li>
                <li>🚫 Lunar Client is <strong>not supported</strong></li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold">📥 How to install</p>
              <ol className="list-decimal list-inside ml-2 mt-1 space-y-1">
                <li>Download the <code className="bg-gray-800 px-1 rounded">.jar</code> file above</li>
                <li>Open your Minecraft <strong>mods folder</strong> (%appdata%/.minecraft/mods)</li>
                <li><strong>Rename the file</strong> to <code className="bg-gray-800 px-1 rounded">dynamic-fps-4.3.5.jar</code> (this helps during screenshare checks)</li>
                <li>Place the file in your mods folder</li>
                <li>Make sure you do <strong>NOT</strong> have another Dynamic FPS mod already installed (conflict)</li>
                <li>Launch Minecraft with Fabric profile</li>
              </ol>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-bold">⚠️ Troubleshooting</p>
              <ul className="list-disc list-inside ml-2 mt-1">
                <li>If it doesn't work, remove any existing Dynamic FPS mod.</li>
                <li>Ensure Fabric API is up to date.</li>
                <li>Double-check your Minecraft version is exactly 1.21.11.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
