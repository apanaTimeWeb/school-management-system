"use client";

import { useEffect } from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";

export default function HrDashboardError({
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
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center min-h-[400px]">
      <div className="bg-card border border-danger rounded-lg p-8 max-w-md w-full text-center flex flex-col items-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4">
          <AlertOctagon size={32} className="text-danger" />
        </div>
        
        <h2 className="text-lg font-bold text-foreground mb-2">
          Dashboard Failed to Load
        </h2>
        
        <p className="text-sm text-muted-foreground mb-6">
          We encountered an issue loading the HR Dashboard data. Please try again or contact support if the issue persists.
        </p>

        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-card font-medium rounded-md hover:bg-yellow-500 active:scale-95 transition-all duration-200"
        >
          <RefreshCw size={16} />
          Retry Now
        </button>
      </div>
    </div>
  );
}

