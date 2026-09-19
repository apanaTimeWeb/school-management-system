"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ParentLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('parent@schoolerp.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/parent/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B45309]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B45309]/10 rounded-full blur-3xl"></div>
      </div>

      <Link href="/login" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-[#B45309] transition-colors font-semibold text-sm z-10">
        <ArrowLeft size={16} /> Back to Roles
      </Link>
      
      <div className="w-full max-w-md bg-white border border-border rounded-3xl p-8 shadow-2xl relative z-10 transform transition-all">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#B45309]/10 flex items-center justify-center mb-6 shadow-inner">
            <Users className="text-[#B45309]" size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-text-primary mb-2">Parent Portal</h1>
          <p className="text-text-secondary text-sm">Welcome back! Please login to track your child's progress.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary ml-1" htmlFor="email">Email or Phone</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-text-tertiary" />
              </div>
              <input 
                id="email"
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone" 
                className="w-full pl-11 pr-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-[#B45309]/50 focus:border-[#B45309] transition-all text-sm font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-bold text-text-primary" htmlFor="password">Password</label>
              <Link href="#" className="text-xs font-semibold text-[#B45309] hover:text-[#78350F] hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-text-tertiary" />
              </div>
              <input 
                id="password"
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full pl-11 pr-12 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-[#B45309]/50 focus:border-[#B45309] transition-all text-sm font-medium"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-tertiary hover:text-text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3.5 bg-[#B45309] hover:bg-[#78350F] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#B45309]/30 hover:shadow-[#B45309]/50 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Login to Dashboard <LogIn size={18} />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center border-t border-border pt-6">
          <p className="text-xs text-text-tertiary">
            Having trouble logging in? <br/>
            Contact the school administration at <span className="font-semibold text-text-secondary">support@schoolerp.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
