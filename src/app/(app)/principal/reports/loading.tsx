export default function PrincipalReportsLoading() {
  return (
    <div className="min-h-screen p-6 w-full h-full flex flex-col">
      <div className="mb-6">
        <div className="h-8 w-64 bg-skeleton-base animate-pulse rounded mb-2" />
        <div className="h-4 w-96 bg-skeleton-base animate-pulse rounded" />
      </div>

      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {[...Array(12)].map((_, i) => <div key={i} className="h-32 bg-skeleton-base animate-pulse rounded-xl" />)}
        </div>
      </div>
    </div>
  );
}
