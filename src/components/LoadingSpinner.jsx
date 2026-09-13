export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="loading loading-spinner loading-lg text-pink-500"></span>
      <p className="mt-4 text-slate-500 text-sm">Loading technologies...</p>
    </div>
  )
}
