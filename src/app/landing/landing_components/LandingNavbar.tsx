import React from 'react';
import Link from 'next/link';

export function LandingNavbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
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
        <Link href="/auth/login" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2">
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
