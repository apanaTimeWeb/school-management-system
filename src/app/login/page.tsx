import React from 'react';
import Link from 'next/link';
import { Shield, School, GraduationCap, ArrowLeft, ArrowRight, UserCircle, Calculator, Building2, Users } from 'lucide-react';

export default function LoginSelectionPage() {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 font-sans relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-md">
            S
          </div>
          <span className="text-3xl font-bold tracking-tight text-text-primary">
            School<span className="text-primary">ERP</span>
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-text-primary mb-2">Welcome to School ERP</h1>
        <p className="text-text-secondary text-base">Select your account type to continue securely.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        
        {/* Student Card */}
        <Link href="/login/student" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UserCircle className="text-blue-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">STUDENT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Academics, Timetable & Exams</p>
          <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold bg-blue-500/5 px-6 py-2.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Parent Card */}
        <Link href="/login/parent" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="text-pink-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">PARENT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Fees, Attendance & Progress</p>
          <div className="mt-auto flex items-center gap-2 text-pink-600 font-bold bg-pink-500/5 px-6 py-2.5 rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Teacher Card */}
        <Link href="/login/teacher" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#F0FDF4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <GraduationCap className="text-[#15803D]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">TEACHER</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Classroom Management & Grading</p>
          <div className="mt-auto flex items-center gap-2 text-[#15803D] font-bold bg-[#F0FDF4] px-6 py-2.5 rounded-full group-hover:bg-[#15803D] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Super Admin Card */}
        <Link href="/login/super-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Shield className="text-[#1E3A8A]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SUPER ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">System Control & Global Settings</p>
          <div className="mt-auto flex items-center gap-2 text-[#1E3A8A] font-bold bg-[#EFF6FF] px-6 py-2.5 rounded-full group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* School Admin Card */}
        <Link href="/login/school-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <School className="text-[#0F766E]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SCHOOL ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">School Management & Operations</p>
          <div className="mt-auto flex items-center gap-2 text-[#0F766E] font-bold bg-[#ECFDF5] px-6 py-2.5 rounded-full group-hover:bg-[#0F766E] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Principal Card */}
        <Link href="/login/principal" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 className="text-[#7C3AED]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">PRINCIPAL</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Executive Overview & Dashboards</p>
          <div className="mt-auto flex items-center gap-2 text-[#7C3AED] font-bold bg-[#F5F3FF] px-6 py-2.5 rounded-full group-hover:bg-[#7C3AED] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Accountant Card */}
        <Link href="/login/accountant" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Calculator className="text-emerald-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">ACCOUNTANT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Finance, Fees & Expense Tracking</p>
          <div className="mt-auto flex items-center gap-2 text-emerald-600 font-bold bg-emerald-500/5 px-6 py-2.5 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* HR / Office Card */}
        <Link href="/login/hr" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-fuchsia-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 className="text-fuchsia-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">HR / OFFICE</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Staff, Payroll & HR Operations</p>
          <div className="mt-auto flex items-center gap-2 text-fuchsia-600 font-bold bg-fuchsia-500/5 px-6 py-2.5 rounded-full group-hover:bg-fuchsia-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Transport Manager Card */}
        <Link href="/login/transport-manager" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">TRANSPORT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Vehicles, Routes & Tracking</p>
          <div className="mt-auto flex items-center gap-2 text-teal-600 font-bold bg-teal-500/5 px-6 py-2.5 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Hostel Warden Card */}
        <Link href="/login/hostel-warden" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 className="text-orange-600" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">HOSTEL WARDEN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Hostels, Rooms & Allocations</p>
          <div className="mt-auto flex items-center gap-2 text-orange-600 font-bold bg-orange-500/5 px-6 py-2.5 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Librarian Card */}
        <Link href="/login/librarian" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">LIBRARIAN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Books, Circulation & Records</p>
          <div className="mt-auto flex items-center gap-2 text-indigo-600 font-bold bg-indigo-500/5 px-6 py-2.5 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

      </div>
    </div>
  );
}
