"use client";

import React, { useState } from 'react';
import { Map, MapPin, Plus, Save } from 'lucide-react';

export default function RoutesStops() {
  const [routes, setRoutes] = useState([
    { id: 1, name: 'Route A - City Center', distance: '12 km', stops: ['School', 'Sector 15', 'City Mall', 'Terminal'] },
    { id: 2, name: 'Route B - North End', distance: '18 km', stops: ['School', 'North Gate', 'Highway'] },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          Route Configured Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Map size={20} className="text-primary"/> Routes & Stops Configuration
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Add Route Form */}
          <div className="w-full lg:w-1/3 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <h3 className="font-bold text-sm">Create New Route</h3>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Route Name</label>
               <input type="text" placeholder="e.g. Route C - West Village" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Total Distance (km)</label>
               <input type="number" placeholder="20" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Pick-up Stops (Comma separated)</label>
               <textarea rows={3} placeholder="School, Point A, Point B..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none"></textarea>
             </div>
             
             <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2 mt-2">
               <Save size={16}/> Save Route
             </button>
          </div>

          {/* Active Routes Timeline Visualizer */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary">Active Routes Visualizer</h3>
            
            {routes.map(route => (
              <div key={route.id} className="bg-card border border-border rounded-lg p-5 shadow-sm">
                <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
                  <h4 className="font-bold text-primary">{route.name}</h4>
                  <span className="text-xs font-bold text-text-secondary">{route.distance}</span>
                </div>
                
                {/* Horizontal Timeline */}
                <div className="relative flex items-center justify-between mt-2 mb-4 px-4">
                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-border z-0"></div>
                  {route.stops.map((stop, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center gap-2 group">
                      <div className="w-5 h-5 rounded-full border-4 border-card bg-primary shadow-sm group-hover:scale-125 transition"></div>
                      <span className="text-[10px] font-bold text-text-secondary absolute top-7 w-20 text-center -ml-10">{stop}</span>
                    </div>
                  ))}
                </div>
                <div className="h-6"></div> {/* Spacer for absolute text */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
