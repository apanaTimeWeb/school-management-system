import React from 'react';
import Link from 'next/link';
import { Shield, School, GraduationCap, ArrowLeft, ArrowRight, UserCircle, Calculator, Building2, Users, BookOpen, Bus, Key } from 'lucide-react';

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
        
        {/* Super Admin Card */}
        <Link href="/login/super-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Shield className="text-[#1E3A8A]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SUPER ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">System Control & Global Settings</p>
          <div className="mt-auto flex items-center gap-2 text-[#1E3A8A] font-bold bg-[#1E3A8A]/5 px-6 py-2.5 rounded-full group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* School Admin Card */}
        <Link href="/login/school-admin" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#0F766E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <School className="text-[#0F766E]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">SCHOOL ADMIN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">School Management & Operations</p>
          <div className="mt-auto flex items-center gap-2 text-[#0F766E] font-bold bg-[#0F766E]/5 px-6 py-2.5 rounded-full group-hover:bg-[#0F766E] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Principal Card */}
        <Link href="/login/principal" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 className="text-[#7C3AED]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">PRINCIPAL</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Executive Overview & Dashboards</p>
          <div className="mt-auto flex items-center gap-2 text-[#7C3AED] font-bold bg-[#7C3AED]/5 px-6 py-2.5 rounded-full group-hover:bg-[#7C3AED] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Teacher Card */}
        <Link href="/login/teacher" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#15803D]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <GraduationCap className="text-[#15803D]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">TEACHER</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Classes, Grades & Students</p>
          <div className="mt-auto flex items-center gap-2 text-[#15803D] font-bold bg-[#15803D]/5 px-6 py-2.5 rounded-full group-hover:bg-[#15803D] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Accountant Card */}
        <Link href="/login/accountant" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#475569]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Calculator className="text-[#475569]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">ACCOUNTANT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Finance, Fees & Expense Tracking</p>
          <div className="mt-auto flex items-center gap-2 text-[#475569] font-bold bg-[#475569]/5 px-6 py-2.5 rounded-full group-hover:bg-[#475569] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* HR / Office Card */}
        <Link href="/login/hr" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#BE185D]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="text-[#BE185D]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">HR / OFFICE</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Staff, Payroll & HR Operations</p>
          <div className="mt-auto flex items-center gap-2 text-[#BE185D] font-bold bg-[#BE185D]/5 px-6 py-2.5 rounded-full group-hover:bg-[#BE185D] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Student Card */}
        <Link href="/login/student" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#0284C7]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UserCircle className="text-[#0284C7]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">STUDENT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Academics, Timetable & Exams</p>
          <div className="mt-auto flex items-center gap-2 text-[#0284C7] font-bold bg-[#0284C7]/5 px-6 py-2.5 rounded-full group-hover:bg-[#0284C7] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Parent / Guardian Card */}
        <Link href="/login/parent" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#B45309]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="text-[#B45309]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">PARENT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Fees, Attendance & Progress</p>
          <div className="mt-auto flex items-center gap-2 text-[#B45309] font-bold bg-[#B45309]/5 px-6 py-2.5 rounded-full group-hover:bg-[#B45309] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Librarian Card */}
        <Link href="/login/librarian" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#6D28D9]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <BookOpen className="text-[#6D28D9]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">LIBRARIAN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Books, Circulation & Records</p>
          <div className="mt-auto flex items-center gap-2 text-[#6D28D9] font-bold bg-[#6D28D9]/5 px-6 py-2.5 rounded-full group-hover:bg-[#6D28D9] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Transport Manager Card */}
        <Link href="/login/transport-manager" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#0891B2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Bus className="text-[#0891B2]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">TRANSPORT</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Vehicles, Routes & Tracking</p>
          <div className="mt-auto flex items-center gap-2 text-[#0891B2] font-bold bg-[#0891B2]/5 px-6 py-2.5 rounded-full group-hover:bg-[#0891B2] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

        {/* Hostel Warden Card */}
        <Link href="/login/hostel-warden" className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#166534]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Key className="text-[#166534]" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">HOSTEL WARDEN</h2>
          <p className="text-text-secondary text-[13px] font-medium mb-8">Hostels, Rooms & Allocations</p>
          <div className="mt-auto flex items-center gap-2 text-[#166534] font-bold bg-[#166534]/5 px-6 py-2.5 rounded-full group-hover:bg-[#166534] group-hover:text-white transition-colors w-full justify-center text-[14px]">
            Continue <ArrowRight size={16} />
          </div>
        </Link>

      </div>
    </div>
  );
}
