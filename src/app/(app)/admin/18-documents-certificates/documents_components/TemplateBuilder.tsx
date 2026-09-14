"use client";

import React, { useState } from 'react';
import { Palette, FileCode, Hash, Save, CheckCircle } from 'lucide-react';

export default function TemplateBuilder() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Template Configuration Saved!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Palette size={20} className="text-primary"/> Custom Certificate Templates
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-6">
             <div className="bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><FileCode size={16}/> Certificate Templates</h3>
                <p className="text-xs text-text-secondary font-semibold">Build entirely new templates (e.g. "Sports Day Winner") using drag-and-drop or HTML variables.</p>
                
                <div className="flex flex-col gap-2">
                  <div className="border border-border p-3 rounded flex justify-between items-center bg-card">
                    <span className="text-sm font-bold">Annual Sports Winner</span>
                    <button className="text-xs font-bold text-primary">Edit Template</button>
                  </div>
                  <div className="border border-border p-3 rounded flex justify-between items-center bg-card">
                    <span className="text-sm font-bold">Workshop Participation</span>
                    <button className="text-xs font-bold text-primary">Edit Template</button>
                  </div>
                </div>
                
                <button className="bg-card border border-border text-sm font-bold py-2 rounded-lg mt-2 hover:border-primary transition">
                  + Create Custom Template
                </button>
             </div>
          </div>

          <div className="flex flex-col gap-6">
             <div className="bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><Hash size={16}/> Serial Number Configuration</h3>
                <p className="text-xs text-text-secondary font-semibold">Set the format for auto-generated certificate serial numbers to track authenticity.</p>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary uppercase">Prefix</label>
                  <input type="text" defaultValue="CERT-2026-" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Starting Number</label>
                  <input type="number" defaultValue="1001" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Preview</label>
                  <div className="bg-card border border-border rounded-md px-3 py-2 text-sm font-black text-primary font-mono text-center">
                    CERT-2026-1001
                  </div>
                </div>
                
                <button onClick={handleSave} className="bg-primary text-black py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-2">
                  <Save size={16}/> Save Configuration
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
