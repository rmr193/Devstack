export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-500 text-sm">Loading technologies...</p>
    </div>
  )
}
