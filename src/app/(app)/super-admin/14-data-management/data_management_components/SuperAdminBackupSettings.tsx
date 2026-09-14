"use client";

import { useState } from "react";
import { DownloadCloud, CheckCircle2, Loader2, Save } from "lucide-react";

export default function SuperAdminBackupSettings() {
  const [isManualBackingUp, setIsManualBackingUp] = useState(false);
  const [isAutoEnabled, setIsAutoEnabled] = useState(false);
  const [schedule, setSchedule] = useState("Daily");

  const handleManualBackup = async () => {
    setIsManualBackingUp(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsManualBackingUp(false);
    alert("Manual backup completed successfully!");
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      <div className="border-b border-border pb-3">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Backup</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Manual Backup Section */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-bold text-text-primary">Instant Backup</h3>
            <p className="text-xs text-text-secondary mt-1">Create an immediate snapshot of the entire ERP database and file storage.</p>
          </div>
          <button 
            onClick={handleManualBackup}
            disabled={isManualBackingUp}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-black text-sm font-bold rounded-md hover:bg-primary-hover transition-all shadow-sm disabled:opacity-70 w-fit"
          >
            {isManualBackingUp ? <Loader2 size={16} className="animate-spin" /> : <DownloadCloud size={16} />}
            Manual backup
          </button>
        </div>

        {/* Automatic Backup Section */}
        <div className="flex flex-col gap-4 border-l border-border pl-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={isAutoEnabled}
              onChange={(e) => setIsAutoEnabled(e.target.checked)}
              className="w-5 h-5 text-primary bg-input border-border rounded focus:ring-primary accent-primary" 
            />
            <span className="text-sm font-bold text-text-primary">Automatic backup</span>
          </label>
          
          <div className={`flex flex-col gap-3 transition-opacity ${isAutoEnabled ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            <span className="text-xs font-bold text-text-secondary uppercase">Schedule Frequency</span>
            <div className="flex flex-wrap gap-4">
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="schedule" 
                  value="Daily"
                  checked={schedule === "Daily"}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-4 h-4 accent-primary" 
                />
                <span className="text-sm text-text-primary">Daily</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="schedule" 
                  value="Weekly"
                  checked={schedule === "Weekly"}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-4 h-4 accent-primary" 
                />
                <span className="text-sm text-text-primary">Weekly</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="schedule" 
                  value="Monthly"
                  checked={schedule === "Monthly"}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-4 h-4 accent-primary" 
                />
                <span className="text-sm text-text-primary">Monthly</span>
              </label>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-bg-page border border-border text-text-primary text-xs font-bold rounded-md hover:bg-card transition-all w-fit">
              <Save size={14} /> Save Schedule
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
