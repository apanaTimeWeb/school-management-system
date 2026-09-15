"use client";

import React, { useEffect, useState } from 'react';
import { MapPin, Navigation2, Map as MapIcon, SignalHigh } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Simulates a live GPS tracking view.
 */
export default function StudentTransportGPSMap() {
  const [pulse, setPulse] = useState(false);

  // Mock a pulsing blip to simulate live tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm w-full h-full flex flex-col relative overflow-hidden group">
      
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent flex justify-between items-start pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <MapIcon size={16} />
          </div>
          <span className="text-sm font-bold text-white shadow-black drop-shadow-md">Live Tracking</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/20 backdrop-blur-md border border-success/30 text-white text-[10px] font-bold shadow-sm uppercase tracking-wider">
          <SignalHigh size={12} className="animate-pulse text-success" /> GPS Active
        </div>
      </div>

      {/* Mock Map Background (CSS Grid/Gradient based since we don't have an actual Maps API key here) */}
      <div className="flex-1 w-full h-full bg-[#E5E3DF] relative overflow-hidden flex items-center justify-center">
        
        {/* Fake streets pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)',
          backgroundSize: '100px 100px',
          backgroundPosition: '-10px -10px'
        }}></div>
        
        {/* Diagonal "Main Road" */}
        <div className="absolute w-[150%] h-4 bg-white/50 rotate-45"></div>

        {/* Bus Marker (Simulated) */}
        <div className="relative z-20 flex flex-col items-center justify-center transform -translate-y-4 translate-x-12">
          <div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md mb-1 whitespace-nowrap">
            DL-1PC-4567 • 25 km/h
          </div>
          <div className="w-10 h-10 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)] flex items-center justify-center border-2 border-white relative">
            <Navigation2 size={20} className="text-white transform -rotate-45" />
            
            {/* Pulse Effect */}
            <div className={clsx(
              "absolute inset-0 rounded-full border-2 border-primary transition-all duration-1000 ease-out",
              pulse ? "scale-[2.5] opacity-0" : "scale-100 opacity-100"
            )}></div>
          </div>
        </div>

        {/* Home/Stop Marker (Simulated) */}
        <div className="absolute bottom-1/4 left-1/4 z-10 flex flex-col items-center">
          <div className="text-danger">
            <MapPin size={32} fill="currentColor" className="text-white drop-shadow-md" />
          </div>
          <span className="bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold text-text-primary mt-1">Your Stop</span>
        </div>

      </div>

      {/* Footer Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md border border-border p-3 rounded-lg shadow-lg flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-text-secondary uppercase">ETA to Stop</span>
            <span className="text-sm font-bold text-primary">Approx. 12 mins</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold text-text-secondary uppercase">Distance</span>
            <span className="text-sm font-bold text-text-primary">2.4 km away</span>
          </div>
        </div>
      </div>

    </div>
  );
}
