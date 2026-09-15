import React from 'react';

export default function StudentMessagesLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] flex flex-col motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6 shrink-0">
        <div className="w-48 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-72 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-0 md:gap-6 items-start">
        {/* Sidebar Skeleton */}
        <div className="w-full md:w-80 h-full bg-card border border-border rounded-xl bg-skeleton-base shrink-0"></div>

        {/* Chat Area Skeleton */}
        <div className="flex-1 w-full h-full bg-card border border-border rounded-xl bg-skeleton-base mt-4 md:mt-0"></div>
      </div>
    </div>
  );
}
