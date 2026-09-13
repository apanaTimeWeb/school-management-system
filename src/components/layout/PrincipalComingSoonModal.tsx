"use client";
import React, { useEffect } from 'react';
import { Hammer, X } from 'lucide-react';
import { useComingSoonStore } from './useComingSoonStore';

export default function PrincipalComingSoonModal() {
  const { isOpen, message, openModal, closeModal } = useComingSoonStore();

  useEffect(() => {
    const handleOpen = (e: any) => {
      openModal(e.detail || 'This feature is currently under development.');
    };
    window.addEventListener('open-coming-soon', handleOpen);
    return () => window.removeEventListener('open-coming-soon', handleOpen);
  }, [openModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 animate-in zoom-in-95 duration-200 text-center">
        <div className="w-16 h-16 rounded-full bg-warning/10 text-warning flex items-center justify-center mx-auto mb-4 border border-warning/30">
          <Hammer size={32} />
        </div>
        <h2 className="text-[18px] font-bold text-text-primary mb-2">Feature Coming Soon</h2>
        <p className="text-[13px] text-text-secondary mb-6">{message}</p>
        <button 
          onClick={closeModal} 
          className="w-full py-2 bg-primary hover:bg-primary-hover text-black font-bold text-[13px] rounded transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
