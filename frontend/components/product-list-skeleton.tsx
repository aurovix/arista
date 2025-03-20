export default function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="bg-muted/30 rounded-lg p-4 h-[400px] animate-pulse">
            <div className="aspect-square bg-muted rounded-md mb-4" />
            <div className="h-4 bg-muted rounded w-1/4 mb-2" />
            <div className="h-6 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-full mb-2" />
            <div className="h-4 bg-muted rounded w-5/6 mb-4" />
            <div className="h-6 bg-muted rounded w-1/3 mb-4" />
            <div className="h-10 bg-muted rounded w-full" />
          </div>
        ))}
    </div>
  )
}

