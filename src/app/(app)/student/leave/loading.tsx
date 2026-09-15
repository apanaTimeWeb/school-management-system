import React from 'react';

export default function StudentLeaveLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Tabs Skeleton */}
        <div className="w-64 h-12 bg-card border border-border rounded-lg bg-skeleton-base"></div>

        {/* Content Skeleton */}
        <div className="w-full max-w-3xl h-[600px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
      </div>
    </div>
  );
}
