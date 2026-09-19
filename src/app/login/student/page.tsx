"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserCircle, Lock, EyeOff, Eye, Loader2, KeyRound } from 'lucide-react';

export default function StudentLoginPage() {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Auto-filled for testing
  const [admissionNo, setAdmissionNo] = useState('STU-2024-001');
  const [password, setPassword] = useState('student123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    // Mock Login Logic
    setTimeout(() => {
      if (admissionNo === 'STU-2024-001' && password === 'student123') {
        setIsLoading(false);
        router.push('/student/dashboard');
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex flex-col items-center justify-center p-6 relative font-sans">
      <Link href="/login" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-[#0284C7] transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Roles
      </Link>
      
      <div className="w-full max-w-md bg-white border border-border rounded-2xl shadow-xl overflow-hidden motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-[#0284C7] p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div>
          <div className="w-20 h-20 rounded-full bg-white/20 mx-auto flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 relative z-10 shadow-lg">
            <UserCircle size={48} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-white relative z-10 tracking-wide uppercase">Student Login</h1>
          <p className="text-white/80 font-medium text-sm mt-1 relative z-10">Access your academic dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8">
          
          {isError && (
             <div className="mb-4 p-3 bg-danger/10 border border-danger/30 text-danger text-sm font-bold rounded-lg flex items-center gap-2">
               <Lock size={16} /> Invalid Admission No. or Password.
             </div>
          )}

          <div className="mb-5">
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Admission Number / Student ID</label>
            <div className="relative">
              <input 
                type="text" required placeholder="e.g. STU-2024-001"
                value={admissionNo} onChange={(e) => setAdmissionNo(e.target.value)}
                className="w-full bg-page border border-border text-text-primary text-sm rounded-lg pl-10 pr-4 py-3 outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 font-semibold transition-all"
              />
              <UserCircle size={18} className="absolute left-3 top-3.5 text-text-secondary" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPwd ? "text" : "password"} required placeholder="Enter your password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-page border border-border text-text-primary text-sm rounded-lg pl-10 pr-10 py-3 outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 font-semibold transition-all"
              />
              <KeyRound size={18} className="absolute left-3 top-3.5 text-text-secondary" />
              <button 
                type="button" onClick={() => setShowPwd(!showPwd)} 
                className="absolute right-3 top-3.5 text-text-secondary hover:text-[#0284C7] transition-colors"
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border text-[#0284C7] focus:ring-[#0284C7]" />
              <span className="text-sm font-semibold text-text-secondary">Remember me</span>
            </label>
            <a href="#" className="text-sm font-bold text-[#0284C7] hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" disabled={isLoading}
            className="w-full py-3.5 bg-[#0284C7] text-white font-bold rounded-xl shadow-lg shadow-[#0284C7]/30 hover:bg-[#0C4A6E] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base"
          >
            {isLoading ? <><Loader2 size={20} className="animate-spin" /> Authenticating...</> : 'Login Securely'}
          </button>
        </form>

      </div>
    </div>
  );
}
