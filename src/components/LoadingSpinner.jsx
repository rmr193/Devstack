export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 w-full">
      <div className="relative w-16 h-16">
        {/* Outer pulsating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
        {/* Inner gradient spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-amber-500 animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-600 font-medium text-sm animate-pulse tracking-wide">
        Loading technologies...
      </p>
    </div>
  )
}
