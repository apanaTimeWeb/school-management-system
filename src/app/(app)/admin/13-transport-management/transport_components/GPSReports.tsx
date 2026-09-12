"use client";

import React from 'react';
import { Navigation, AlertTriangle, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function GPSReports() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Navigation size={20} className="text-primary"/> Live GPS & Tracking Reports
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-bg-page border border-border rounded-lg p-2 h-[400px] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Live Map Placeholder Simulation */}
            <div className="absolute inset-0 bg-secondary/10 grid grid-cols-6 grid-rows-6 opacity-30 pointer-events-none">
              {[...Array(36)].map((_, i) => <div key={i} className="border border-primary/10"></div>)}
            </div>
            
            <div className="relative z-10 flex flex-col items-center animate-pulse">
              <Navigation size={48} className="text-primary mb-2 drop-shadow-md"/>
              <span className="bg-card px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-border">Live API Map Integration Here</span>
            </div>
            
            {/* Simulated Live Vehicles */}
            <div className="absolute top-20 left-32 flex flex-col items-center">
               <div className="w-3 h-3 bg-success rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
               <span className="text-[10px] font-bold mt-1 bg-card px-1 rounded border border-border shadow-sm">BUS-01</span>
            </div>
            <div className="absolute bottom-32 right-40 flex flex-col items-center">
               <div className="w-3 h-3 bg-warning rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
               <span className="text-[10px] font-bold mt-1 bg-card px-1 rounded border border-border shadow-sm">VAN-03</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm flex items-center gap-2"><Activity size={16}/> Live Alerts</h3>
            
            <div className="flex flex-col gap-3">
              <div className="bg-warning-bg/50 border border-warning/30 p-3 rounded-lg flex items-start gap-3">
                 <AlertTriangle size={16} className="text-warning shrink-0 mt-0.5"/>
                 <div>
                   <p className="text-xs font-bold text-text-primary leading-tight">Over-speeding Alert</p>
                   <p className="text-[10px] text-text-secondary mt-1">VAN-03 exceeded 60km/h on Highway road.</p>
                   <p className="text-[9px] font-bold text-warning mt-1">2 mins ago</p>
                 </div>
              </div>
              <div className="bg-info-bg/50 border border-info/30 p-3 rounded-lg flex items-start gap-3">
                 <Navigation size={16} className="text-info shrink-0 mt-0.5"/>
                 <div>
                   <p className="text-xs font-bold text-text-primary leading-tight">Route Deviation</p>
                   <p className="text-[10px] text-text-secondary mt-1">BUS-01 took alternate route near Sector 15.</p>
                   <p className="text-[9px] font-bold text-info mt-1">15 mins ago</p>
                 </div>
              </div>
            </div>

            <button className="mt-auto bg-bg-page border border-border text-sm font-bold py-2.5 rounded-lg hover:border-primary hover:text-primary transition">
              Download Daily Route Report (PDF)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
