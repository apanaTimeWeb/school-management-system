"use client";

import { useState } from "react";
import { PackageOpen, Book, Bus, Building2, Utensils, Boxes, Activity, ToggleLeft, Save } from "lucide-react";

export default function SuperAdminModuleEnableDisableConfig() {
  
  // Dummy State for Modules
  const [modules, setModules] = useState([
    { id: 'library', name: 'Library Management', icon: Book, enabled: true, desc: 'Manage books, members, issues, returns, and library fines.' },
    { id: 'transport', name: 'Transport Management', icon: Bus, enabled: true, desc: 'Manage vehicles, routes, stops, and transport fee allocation.' },
    { id: 'hostel', name: 'Hostel Management', icon: Building2, enabled: false, desc: 'Manage rooms, beds, hostel allocation, and visitors.' },
    { id: 'mess', name: 'Mess & Canteen', icon: Utensils, enabled: false, desc: 'Manage daily meals, mess fee, and dietary schedules.' },
    { id: 'inventory', name: 'Inventory & Store', icon: Boxes, enabled: true, desc: 'Manage stock, vendors, purchases, and material issuance.' },
    { id: 'medical', name: 'Medical Clinic', icon: Activity, enabled: false, desc: 'Manage student health records, treatments, and clinic visits.' },
  ]);

  const toggleModule = (id: string) => {
    setModules(modules.map(mod => mod.id === id ? { ...mod, enabled: !mod.enabled } : mod));
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <PackageOpen size={16} /> Optional Module Enable / Disable (हर school के लिए)
      </div>

      <div className="p-6">
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5"><ToggleLeft size={16} /> Global Module Toggles</h3>
            <span className="text-xs text-text-secondary mt-1">
              अगर किसी school में Hostel नहीं है तो पूरा Hostel module यहाँ से OFF करने पर UI से hide हो जाएगा।
            </span>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
            <Save size={16} /> Apply Changes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {modules.map((mod) => (
            <div 
              key={mod.id} 
              className={`flex flex-col gap-4 p-5 rounded-xl border transition-all ${
                mod.enabled ? 'border-primary/50 bg-primary/5 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.1)]' : 'border-border bg-bg-page opacity-70 grayscale-[50%]'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${mod.enabled ? 'bg-primary text-white' : 'bg-sidebar text-sidebar-text-muted'}`}>
                    <mod.icon size={24} />
                  </div>
                  <h4 className={`text-sm font-bold ${mod.enabled ? 'text-primary' : 'text-text-secondary'}`}>{mod.name}</h4>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={mod.enabled} onChange={() => toggleModule(mod.id)} className="sr-only peer" />
                  <div className={`w-10 h-5.5 peer-focus:outline-none rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all ${
                    mod.enabled ? 'bg-primary after:translate-x-full after:border-white' : 'bg-border'
                  }`}></div>
                </label>
              </div>
              <p className="text-xs font-semibold text-text-secondary h-10">
                {mod.desc}
              </p>
              
              <div className="pt-3 border-t border-border mt-auto flex justify-between items-center">
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${mod.enabled ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger'}`}>
                  {mod.enabled ? 'STATUS: ON (VISIBLE)' : 'STATUS: OFF (HIDDEN)'}
                </span>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </div>
  );
}
