import { X } from 'lucide-react'

export default function YourStack({ selectedStack, onRemove, onRemoveAll }) {
  const count = selectedStack.length
  const isEmpty = count === 0

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs sticky top-24">
      {/* Header */}
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        Your Stack
      </h3>
      <p className="text-sm text-slate-500 mt-0.5 mb-5 font-normal">
        {isEmpty
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

      {/* Empty State (matches YourStack-without.png) */}
      {isEmpty ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-12 px-4 flex items-center justify-center text-center">
          <p className="text-slate-400 text-sm font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* Populated State (matches YourStack-with.png) */
        <div className="space-y-3">
          <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 shadow-xs hover:border-slate-300 transition-colors animate-in fade-in duration-150"
              >
                {/* Left: Icon, Name & Category */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-50 p-1 border border-slate-100">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-semibold text-slate-900 truncate leading-tight">
                      {tech.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium capitalize mt-0.5">
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Right: Remove Button (✕) */}
                <button
                  type="button"
                  onClick={() => onRemove(tech.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors flex-shrink-0 cursor-pointer"
                  title={`Remove ${tech.name} from stack`}
                  aria-label={`Remove ${tech.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full mt-4 py-2.5 px-4 rounded-xl border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 hover:border-red-300 transition-colors cursor-pointer text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}
