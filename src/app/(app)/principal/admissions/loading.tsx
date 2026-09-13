export default function PrincipalAdmissionsLoading() {
  return (
    <div className="min-h-screen p-6 w-full h-full flex flex-col">
      <div className="mb-6">
        <div className="h-8 w-64 bg-skeleton-base animate-pulse rounded mb-2" />
        <div className="h-4 w-96 bg-skeleton-base animate-pulse rounded" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-skeleton-base animate-pulse rounded-lg h-24" />
        ))}
      </div>

      <div className="h-16 w-full bg-skeleton-base animate-pulse rounded-lg mb-6" />
      
      <div className="bg-card border border-border rounded-lg overflow-hidden flex-1">
        <div className="h-12 bg-skeleton-base animate-pulse" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-4 border-b border-border/50 flex gap-4">
            <div className="h-4 w-12 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-48 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-32 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-24 bg-skeleton-base animate-pulse rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
