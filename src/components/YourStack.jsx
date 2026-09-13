import { X } from 'lucide-react'

export default function YourStack({ selectedStack, onRemove, onRemoveAll }) {
  const count = selectedStack.length

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs sticky top-24">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-500 mt-1 mb-5">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-12 text-center">
          <p className="text-slate-400 text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 p-1 border border-slate-100">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{tech.name}</h4>
                    <p className="text-xs text-slate-400 capitalize">{tech.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="btn btn-sm btn-outline border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 hover:text-red-600 font-semibold w-full mt-4 rounded-xl cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}
