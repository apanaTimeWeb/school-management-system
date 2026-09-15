import React from 'react';

export default function StudentFeesLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Summary Blocks Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="bg-card border border-border rounded-xl h-[88px] bg-skeleton-base"></div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Main Installments Skeleton */}
          <div className="flex-1 w-full h-[500px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
          
          {/* History Sidebar Skeleton */}
          <div className="w-full md:w-[400px] h-[400px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
        </div>
      </div>
    </div>
  );
}
