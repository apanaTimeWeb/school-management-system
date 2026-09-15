import React from 'react';

export default function StudentTimetableLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-64 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Toggle Controls Skeleton */}
        <div className="w-48 h-10 bg-skeleton-base rounded-lg"></div>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-5 h-[600px] bg-skeleton-base"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-5 h-[300px] bg-skeleton-base"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
