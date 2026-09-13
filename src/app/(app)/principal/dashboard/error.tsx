"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function PrincipalDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Principal Dashboard Error:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full text-center shadow-2xl shadow-black/50">
        <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-danger" size={32} />
        </div>
        <h2 className="text-[20px] font-bold text-text-primary mb-2">Something went wrong!</h2>
        <p className="text-[14px] text-text-secondary mb-8">
          We encountered an issue loading the Principal Dashboard. Please try again or contact support if the issue persists.
        </p>
        <button
          onClick={() => reset()}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black font-semibold text-[14px] py-3 px-4 rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      </div>
    </div>
  );
}
