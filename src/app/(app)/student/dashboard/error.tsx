"use client";

import React, { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function StudentDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Student Dashboard Error:", error);
  }, [error]);

  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4">
        <AlertTriangle size={32} className="text-danger" />
      </div>
      <h2 className="text-xl font-bold text-text-primary mb-2">Failed to load dashboard</h2>
      <p className="text-sm text-text-secondary max-w-md mb-6">
        We encountered a problem while fetching your academic data. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors"
      >
        <RotateCcw size={16} />
        Try Again
      </button>
    </div>
  );
}
