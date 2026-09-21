"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, User } from 'lucide-react';

export default function TransportManagerLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/transport-manager/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#ECFEFF] flex items-center justify-center p-6 font-sans relative">
      <Link href="/auth/login" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-[#0891B2] transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Selection
      </Link>
      
      <div className="bg-white border border-border rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-[#ECFEFF] p-8 text-center border-b border-border">
          <div className="w-16 h-16 rounded-full bg-[#0891B2]/10 flex items-center justify-center mx-auto mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0891B2]"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Transport Manager</h1>
          <p className="text-text-secondary mt-1 text-sm">Vehicles, Routes & Tracking</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Username</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="transport_admin"
                  className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:border-[#0891B2] outline-none transition-colors"
                  
                />
                <User className="absolute left-3 top-3 text-text-secondary" size={18} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  defaultValue="bus12345"
                  className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:border-[#0891B2] outline-none transition-colors tracking-widest"
                  
                />
                <Lock className="absolute left-3 top-3 text-text-secondary" size={18} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 w-full bg-[#0891B2] hover:bg-[#164E63] text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Login as Transport Manager"
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-text-secondary/70">
              Demo mode enabled. Credentials are pre-filled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
