"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function LandingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-danger-bg text-danger rounded-full flex items-center justify-center mb-6">
        <AlertTriangle size={32} />
      </div>
      <h2 className="text-2xl font-bold text-text-primary mb-2">Something went wrong!</h2>
      <p className="text-text-secondary mb-8">We encountered an error loading the landing page.</p>
      
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/auth/login"
          className="bg-bg-page border border-border text-text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-bg-page/80 transition-colors"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
