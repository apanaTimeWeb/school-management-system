import React from 'react';

export default function StudentTransportLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Top Row Skeleton */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="flex-1 w-full h-[300px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
          <div className="flex-1 w-full h-[400px] lg:h-auto bg-card border border-border rounded-xl bg-skeleton-base"></div>
        </div>

        {/* Bottom Notifications Skeleton */}
        <div className="w-full h-[200px] bg-card border border-border rounded-xl bg-skeleton-base"></div>

      </div>
    </div>
  );
}
