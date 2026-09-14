export default function AdminHrDashboardLoading() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="h-7 w-64 bg-skeleton-base rounded mb-2"></div>
          <div className="h-4 w-96 bg-skeleton-base rounded"></div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6">
        {/* Row 1: Core KPIs Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-skeleton-base border border-border rounded-lg p-4 h-[120px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-skeleton-highlight to-transparent -translate-x-full motion-safe:animate-[shimmer_1.5s_infinite]"></div>
            </div>
          ))}
        </div>

        {/* Row 2: Attendance KPIs Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-skeleton-base border border-border rounded-lg p-4 h-[120px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-skeleton-highlight to-transparent -translate-x-full motion-safe:animate-[shimmer_1.5s_infinite]"></div>
            </div>
          ))}
        </div>

        {/* Row 3: Actionable Cards Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-skeleton-base border border-border rounded-lg p-5 h-[240px] relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-skeleton-highlight to-transparent -translate-x-full motion-safe:animate-[shimmer_1.5s_infinite]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
