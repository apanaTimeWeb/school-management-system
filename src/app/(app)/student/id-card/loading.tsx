import React from 'react';

export default function StudentIdCardLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
        {/* Buttons Skeleton */}
        <div className="flex gap-4 w-full max-w-sm mb-6">
          <div className="flex-1 h-10 bg-skeleton-base rounded-lg"></div>
          <div className="flex-1 h-10 bg-skeleton-base rounded-lg"></div>
        </div>

        {/* Card Skeleton */}
        <div className="w-[320px] h-[500px] bg-card border border-border rounded-2xl bg-skeleton-base"></div>
      </div>
    </div>
  );
}
