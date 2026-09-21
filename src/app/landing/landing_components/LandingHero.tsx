import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function LandingHero() {
  return (
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
      
      <Link href="/auth/login" className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
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
  );
}
