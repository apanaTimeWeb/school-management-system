"use client";

import React, { useEffect } from 'react';
import { BellOff, RefreshCw } from 'lucide-react';

export default function StudentNotificationsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Student Notifications Error:", error);
  }, [error]);

  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4">
        <BellOff size={32} className="text-danger" />
      </div>
      <h2 className="text-xl font-bold text-text-primary mb-2">Could not load notifications</h2>
      <p className="text-sm text-text-secondary max-w-md mb-6">
        There was an error connecting to the notification server. Please check your connection and try again.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors shadow-sm"
      >
        <RefreshCw size={16} />
        Retry Connection
      </button>
    </div>
  );
}
