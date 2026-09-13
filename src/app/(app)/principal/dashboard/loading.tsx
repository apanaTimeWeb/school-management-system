export default function PrincipalDashboardLoading() {
  return (
    <div className="min-h-screen p-6 w-full h-full flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="h-8 w-64 bg-skeleton-base animate-pulse rounded mb-2" />
          <div className="h-4 w-96 bg-skeleton-base animate-pulse rounded" />
        </div>
      </div>
      
      {/* KPIs Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-[120px] rounded-lg bg-skeleton-base animate-pulse border border-border" />
        ))}
      </div>

      {/* Row 2 Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[350px] bg-skeleton-base animate-pulse rounded-lg border border-border" />
        <div className="lg:col-span-1 h-[350px] bg-skeleton-base animate-pulse rounded-lg border border-border" />
      </div>

      {/* Row 3 Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[350px] bg-skeleton-base animate-pulse rounded-lg border border-border" />
        <div className="h-[350px] bg-skeleton-base animate-pulse rounded-lg border border-border" />
      </div>
    </div>
  );
}
