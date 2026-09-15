"use client";

import React, { useEffect } from 'react';
import { Wallet, RefreshCw } from 'lucide-react';

export default function StudentFeesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Student Fees Error:", error);
  }, [error]);

  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4">
        <Wallet size={32} className="text-danger" />
      </div>
      <h2 className="text-xl font-bold text-text-primary mb-2">Could not load fee details</h2>
      <p className="text-sm text-text-secondary max-w-md mb-6">
        There was an error retrieving your financial information. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors shadow-sm"
      >
        <RefreshCw size={16} />
        Retry Loading
      </button>
    </div>
  );
}
