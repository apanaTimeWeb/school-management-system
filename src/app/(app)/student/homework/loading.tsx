import React from 'react';

export default function StudentHomeworkLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Filters Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-8 bg-skeleton-base rounded-full"></div>
          <div className="w-20 h-8 bg-skeleton-base rounded-full"></div>
          <div className="w-20 h-8 bg-skeleton-base rounded-full"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 h-[220px] bg-skeleton-base"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
