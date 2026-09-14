"use client";
import React, { useEffect, useState } from 'react';
import { Hammer, X } from 'lucide-react';

export default function TeacherComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [featureMessage, setFeatureMessage] = useState("");

  useEffect(() => {
    const handleOpen = (e: CustomEvent<string>) => {
      setFeatureMessage(e.detail || "This feature is currently under development.");
      setIsOpen(true);
    };

    window.addEventListener('open-teacher-coming-soon', handleOpen as EventListener);
    return () => window.removeEventListener('open-teacher-coming-soon', handleOpen as EventListener);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-main border border-border rounded-xl shadow-2xl p-6 w-full max-w-sm flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Hammer className="text-primary animate-pulse" size={32} />
        </div>
        
        <h2 className="text-[18px] font-bold text-text-primary mb-2">Feature Coming Soon</h2>
        
        <p className="text-[14px] text-text-secondary mb-6">
          {featureMessage}
        </p>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="w-full py-2.5 bg-primary text-white font-bold text-[14px] rounded hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
        >
          <X size={16} /> Close
        </button>
      </div>
    </div>
  );
}
