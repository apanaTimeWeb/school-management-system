import React from 'react';

export default function StudentResultsLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Sidebar Skeleton */}
        <div className="w-full md:w-72 h-[300px] bg-card border border-border rounded-xl bg-skeleton-base"></div>

        <div className="flex-1 flex flex-col gap-6 w-full">
          {/* Main Report Card Skeleton */}
          <div className="w-full h-[600px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
        </div>
      </div>
    </div>
  );
}
