import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Users, LayoutDashboard, Settings, BookOpen, Clock, Activity, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-page flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-bold tracking-tight text-text-primary">
            School<span className="text-secondary">ERP</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-secondary">
          <Link href="#" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#benefits" className="hover:text-primary transition-colors">Benefits</Link>
          <Link href="#modules" className="hover:text-primary transition-colors">Modules</Link>
        </div>
        <div>
          <Link href="/login" className="bg-primary hover:bg-primary-hover text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2">
            LOGIN
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-hover text-sm font-bold mb-6 border border-secondary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            SMART SCHOOL MANAGEMENT v2.0
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 max-w-4xl tracking-tight leading-tight">
            One Platform for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Complete School Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl font-medium">
            A secure, cloud-based ERP handling Students, Academics, Finance, HR, and 20+ other modules seamlessly from one centralized dashboard.
          </p>
          
          <Link href="/login" className="group bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
            🔐 Login to ERP
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm font-bold text-text-secondary">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Role-Based Security</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> 28+ Modules</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Deep Analytics</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Cloud Backup</span>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-24 bg-bg-page px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">EVERYTHING IN ONE PLACE</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">Powerful modules working together to run your institution efficiently.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "Student & Parent", desc: "Complete 360° profiles, attendance & medical records." },
                { icon: BookOpen, label: "Academics", desc: "Syllabus, timetable, assignments & live tracking." },
                { icon: Settings, label: "Fees & Finance", desc: "Automated fee collection, concessions & dual-entry accounting." },
                { icon: FileText, label: "Examinations", desc: "Custom grading scales, admit cards & report cards." },
                { icon: LayoutDashboard, label: "Staff & HR", desc: "Leave management, payroll & biometric sync." },
                { icon: Activity, label: "Reports & Analytics", desc: "Advanced dashboards with customizable exports." },
                { icon: Shield, label: "Security & Audit", desc: "2FA, active sessions, and Who-What-When logging." },
                { icon: Clock, label: "Operations", desc: "Library, Transport, Hostel, Inventory & Asset tracking." },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-bg-card hover:border-secondary hover:shadow-md transition-all cursor-default group">
                  <f.icon className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-lg font-bold text-primary mb-2">{f.label}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us / Capabilities */}
        <section id="benefits" className="py-24 bg-white px-6 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Designed for Scale & Security</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                Unlike traditional school management systems, our ERP separates global configuration from daily operations. 
                With distinct <strong>Super Admin</strong> and <strong>School Admin</strong> roles, your data remains secure, compliant, and perfectly organized.
              </p>
              <ul className="space-y-4">
                {[
                  "Strict Permission-Based Access Control",
                  "Centralized Approval Center for operations",
                  "Automated Academic Session Rollovers",
                  "Comprehensive Audit Trails & Login History"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary font-medium">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-primary/5 rounded-3xl p-8 border border-primary/10 relative">
               <div className="bg-bg-card rounded-xl shadow-lg p-6 border border-border">
                 <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                   <div className="flex items-center gap-3">
                     <Shield className="text-primary" />
                     <span className="font-bold text-primary">System Audit Log</span>
                   </div>
                   <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded">SECURE</span>
                 </div>
                 <div className="space-y-3">
                   <div className="h-4 bg-skeleton-base rounded w-3/4"></div>
                   <div className="h-4 bg-skeleton-base rounded w-1/2"></div>
                   <div className="h-4 bg-skeleton-base rounded w-5/6"></div>
                 </div>
               </div>
            </div>
          </div>
        </section>
        
        {/* Full Module List Banner */}
        <section id="modules" className="py-20 bg-primary text-black text-center px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">28 COMPREHENSIVE MODULES</h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base font-medium text-white/80">
              {["Dashboard", "Students", "Admissions", "Parents", "Academics", "Attendance", "Timetable", "Examinations", "Results", "Fees & Finance", "Staff & HR", "Leave Management", "Communication", "Events", "Documents", "Library", "Transport", "Hostel", "Inventory", "Purchase", "Health", "Discipline", "Approval Center", "Reports", "Website Content", "Settings", "Profile", "Security & Audit"].map((mod, i) => (
                <span key={i} className="hover:text-secondary transition-colors cursor-default">{mod}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-card py-10 px-6 text-center border-t border-border">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-black font-bold text-xs">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">
            School<span className="text-secondary">ERP</span>
          </span>
        </div>
        <div className="flex justify-center gap-8 mb-8 font-semibold text-text-secondary text-sm">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-primary transition-colors">Help Center</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contact Support</Link>
        </div>
        <p className="text-text-disabled text-sm">© {new Date().getFullYear()} School ERP 360. All rights reserved.</p>
      </footer>
    </div>
  );
}
