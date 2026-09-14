import React from 'react';
import Link from 'next/link';
import { Shield, School, GraduationCap, ArrowLeft, ArrowRight, UserCircle } from 'lucide-react';

export default function LoginSelectionPage() {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 font-sans relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-black font-bold text-2xl shadow-md">
            S
          </div>
          <span className="text-3xl font-bold tracking-tight text-text-primary">
            School<span className="text-primary">ERP</span>
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-text-primary mb-2">Welcome to School ERP</h1>
        <p className="text-text-secondary text-base">Select your account type to continue securely.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {/* Super Admin Card */}
        <Link href="/login/super-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Shield className="text-primary" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SUPER ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">System Control & Global Settings</p>
          <div className="mt-auto flex items-center gap-2 text-primary font-bold bg-primary/5 px-6 py-2.5 rounded-full group-hover:bg-primary group-hover:text-black transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* School Admin Card */}
        <Link href="/login/school-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <School className="text-secondary" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SCHOOL ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">School Management & Operations</p>
          <div className="mt-auto flex items-center gap-2 text-secondary font-bold bg-secondary/5 px-6 py-2.5 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Principal Card */}
        <Link href="/login/principal" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <GraduationCap className="text-yellow-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">PRINCIPAL</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Executive Overview & Dashboards</p>
          <div className="mt-auto flex items-center gap-2 text-yellow-600 font-bold bg-yellow-500/5 px-6 py-2.5 rounded-full group-hover:bg-yellow-500 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Teacher Card */}
        <Link href="/login/teacher" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UserCircle className="text-info" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">TEACHER</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Academics & Classroom Management</p>
          <div className="mt-auto flex items-center gap-2 text-info font-bold bg-info/5 px-6 py-2.5 rounded-full group-hover:bg-info group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

      </div>
    </div>
  );
}
