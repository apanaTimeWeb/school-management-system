"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function PrincipalComplaintsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Principal Complaints Error:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full text-center shadow-2xl shadow-black/50">
        <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-danger" size={32} />
        </div>
        <h2 className="text-[20px] font-bold text-text-primary mb-2">Failed to load Complaints!</h2>
        <p className="text-[14px] text-text-secondary mb-8">
          We encountered an issue fetching the grievance records. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black font-semibold text-[14px] py-3 px-4 rounded-md transition-all duration-200"
        >
          <RefreshCcw size={16} />
          Reload Data
        </button>
      </div>
    </div>
  );
}
