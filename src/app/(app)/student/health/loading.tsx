import React from 'react';

export default function StudentHealthLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Banner Skeleton */}
        <div className="w-full h-16 bg-card border border-border rounded-xl bg-skeleton-base"></div>

        {/* Tabs Skeleton */}
        <div className="w-96 h-12 bg-card border border-border rounded-lg bg-skeleton-base"></div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[300px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
          <div className="flex flex-col gap-6">
             <div className="h-[150px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
             <div className="h-[150px] bg-card border border-border rounded-xl bg-skeleton-base"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
