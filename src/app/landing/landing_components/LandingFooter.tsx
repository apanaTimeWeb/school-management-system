import React from 'react';
import Link from 'next/link';

export function LandingFooter() {
  return (
    <footer className="bg-bg-card py-10 px-6 text-center border-t border-border">
      <div className="flex justify-center items-center gap-2 mb-6">
        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xs">
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
  );
}
