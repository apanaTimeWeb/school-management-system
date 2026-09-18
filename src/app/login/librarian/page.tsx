"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, User, Library } from 'lucide-react';

export default function LibrarianLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Redirects exactly to our new massive dashboard!
      router.push('/librarian');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center p-6 font-sans relative">
      <Link href="/login" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Selection
      </Link>
      
      <div className="bg-white border border-border rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-indigo-500/5 p-8 text-center border-b border-border">
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
             <Library className="text-indigo-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Librarian</h1>
          <p className="text-text-secondary mt-1 text-sm">Books, Circulation & Records</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Username</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="head_librarian"
                  className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:border-indigo-500 outline-none transition-colors"
                />
                <User className="absolute left-3 top-3 text-text-secondary" size={18} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  defaultValue="library12345"
                  className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:border-indigo-500 outline-none transition-colors tracking-widest"
                />
                <Lock className="absolute left-3 top-3 text-text-secondary" size={18} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Login as Librarian"
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
