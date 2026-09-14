"use client";
import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useComingSoonStore } from './useComingSoonStore';

export default function PrincipalComingSoonModal() {
  const { isOpen, message, openModal, closeModal } = useComingSoonStore();

  useEffect(() => {
    const handleOpen = (e: any) => {
      openModal(e.detail || 'Action completed successfully!');
      setTimeout(() => closeModal(), 2500);
    };
    window.addEventListener('open-coming-soon', handleOpen);
    return () => window.removeEventListener('open-coming-soon', handleOpen);
  }, [openModal, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 animate-in zoom-in-95 duration-200 text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4 border border-success/30">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-[18px] font-bold text-text-primary mb-2">Success</h2>
        <p className="text-[14px] font-medium text-success mb-2">{message}</p>
        <p className="text-[11px] text-text-secondary mt-4">This dialog will close automatically.</p>
      </div>
    </div>
  );
}
