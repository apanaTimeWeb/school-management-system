"use client";

import { X, QrCode, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Hr2faModalProps {
  isOpen: boolean;
  close: () => void;
  completeSetup: () => void;
}

export default function Hr2faModal({ isOpen, close, completeSetup }: Hr2faModalProps) {
  const [code, setCode] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-xl font-bold text-foreground">Setup 2FA</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">Google Authenticator</p>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center">
          
          <p className="text-sm text-foreground mb-6 font-medium leading-relaxed">
            Scan the QR code below with your Google Authenticator or Authy app.
          </p>
          
          <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-inner border-2 border-primary mb-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <QrCode size={160} className="text-black" />
          </div>

          <div className="w-full mb-6">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Or enter manual code</p>
            <div className="flex items-center justify-between p-3 bg-input border border-border rounded-lg">
               <span className="font-mono text-sm text-foreground tracking-widest font-bold">AB12 CD34 EF56 GH78</span>
               <button className="text-primary hover:text-foreground transition-colors"><Copy size={16}/></button>
            </div>
          </div>

          <div className="w-full space-y-2">
            <label className="block text-[10px] font-bold text-muted-foreground text-left uppercase tracking-wider">Enter 6-digit App Code</label>
            <input 
              type="text" 
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              placeholder="000000" 
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-center text-2xl font-bold font-mono tracking-[0.5em] text-foreground outline-none focus:border-primary transition-colors" 
            />
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-overlay flex justify-end gap-3">
           <button onClick={close} className="px-6 py-2 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors">
             Cancel
           </button>
           <button 
             onClick={completeSetup}
             disabled={code.length !== 6}
             className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50"
           >
             <CheckCircle2 size={16}/> Verify & Enable
           </button>
        </div>

      </div>
    </div>
  );
}

