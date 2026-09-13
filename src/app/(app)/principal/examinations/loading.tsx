export default function PrincipalExaminationsLoading() {
  return (
    <div className="min-h-screen p-6 w-full h-full flex flex-col">
      <div className="mb-6">
        <div className="h-8 w-64 bg-skeleton-base animate-pulse rounded mb-2" />
        <div className="h-4 w-96 bg-skeleton-base animate-pulse rounded" />
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto mb-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="px-6 py-4 border-b-2 border-transparent">
            <div className="h-4 w-32 bg-skeleton-base animate-pulse rounded" />
          </div>
        ))}
      </div>

      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-card border border-border rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
