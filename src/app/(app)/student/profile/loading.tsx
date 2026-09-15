import React from 'react';

export default function StudentProfileLoading() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Page Header Skeleton */}
      <div className="mb-6">
        <div className="w-40 h-8 bg-skeleton-base rounded-md mb-2"></div>
        <div className="w-80 h-4 bg-skeleton-base rounded-md"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Profile Header Skeleton */}
        <div className="bg-card border border-border rounded-xl p-6 h-[140px] w-full relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-skeleton-highlight/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
           <div className="flex items-center gap-6">
             <div className="w-24 h-24 rounded-full bg-skeleton-base shrink-0"></div>
             <div className="flex flex-col gap-3 flex-1">
               <div className="w-48 h-8 bg-skeleton-base rounded-md"></div>
               <div className="w-32 h-6 bg-skeleton-base rounded-md"></div>
             </div>
             <div className="w-32 h-10 bg-skeleton-base rounded-md shrink-0"></div>
           </div>
        </div>

        {/* Main Grid Skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-5 h-[280px] bg-skeleton-base"></div>
            <div className="bg-card border border-border rounded-xl p-5 h-[400px] bg-skeleton-base"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-5 h-[500px] bg-skeleton-base"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
