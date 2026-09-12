import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Users, LayoutDashboard, Settings } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-border sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-bold tracking-tight text-text-primary">
            School<span className="text-primary">ERP</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-secondary">
          <Link href="#" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div>
          <Link href="/login" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2">
            LOGIN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SMART SCHOOL MANAGEMENT v2.0
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl tracking-tight leading-tight">
            One Platform for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Complete School Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl">
            Manage Students • Academics • Attendance • Fees • Examinations • Staff • Communication & More
          </p>
          
          <Link href="/login" className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
            🔐 Login to ERP
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          <div className="flex items-center gap-6 mt-12 text-sm font-semibold text-text-secondary">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Secure</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Simple</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Centralized</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-success" size={18} /> Powerful</span>
          </div>
        </section>

        {/* Everything in one place */}
        <section id="features" className="py-24 bg-white px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-4">EVERYTHING IN ONE PLACE</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">All the modules you need to run your institution efficiently.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "Students", desc: "Complete profiles" },
                { icon: LayoutDashboard, label: "Academics", desc: "Curriculum config" },
                { icon: Settings, label: "Fees", desc: "Automated collection" },
                { icon: FileTextIcon, label: "Exams", desc: "Grades & reports" },
                { icon: Users, label: "Staff", desc: "HR & Payroll" },
                { icon: LayoutDashboard, label: "Reports", desc: "Deep analytics" },
                { icon: Shield, label: "Communication", desc: "SMS & Email" },
                { icon: Settings, label: "Transport", desc: "Live tracking" },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-bg-main hover:border-primary/50 transition-colors cursor-default">
                  <f.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-text-primary mb-1">{f.label}</h3>
                  <p className="text-sm text-text-secondary">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Modules Banner */}
        <section className="py-16 bg-primary text-white text-center px-6">
          <h2 className="text-2xl font-bold mb-6">COMPLETE SCHOOL MANAGEMENT</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-medium opacity-90">
            <span>Attendance</span> <span className="opacity-50">|</span>
            <span>Timetable</span> <span className="opacity-50">|</span>
            <span>Library</span> <span className="opacity-50">|</span>
            <span>Transport</span> <span className="opacity-50">|</span>
            <span>Hostel</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sidebar-header py-8 px-6 text-center text-text-secondary text-sm border-t border-border">
        <div className="flex justify-center gap-6 mb-4 font-semibold">
          <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="#" className="hover:text-primary transition-colors">Support</Link>
        </div>
        <p>© {new Date().getFullYear()} School ERP. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Small icon helper
function FileTextIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  )
}
