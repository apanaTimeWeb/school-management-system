import React from 'react';

export default function StudentNotificationsLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Filter Skeleton */}
        <div className="w-full lg:w-64 h-[400px] bg-card border border-border rounded-xl bg-skeleton-base shrink-0"></div>

        {/* List Skeleton */}
        <div className="flex-1 w-full flex flex-col gap-3">
          <div className="w-full h-14 bg-card border border-border rounded-xl bg-skeleton-base mb-2"></div>
          {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className="w-full h-28 bg-card border border-border rounded-xl bg-skeleton-base"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
