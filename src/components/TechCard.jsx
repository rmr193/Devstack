import { Star, Check } from 'lucide-react'

// Badge color mapping to match UI aesthetic
const badgeColorMap = {
  Popular: 'bg-blue-50 text-blue-600 border-blue-200/60',
  Essential: 'bg-blue-50 text-blue-600 border-blue-200/60',
  'Top SQL': 'bg-blue-50 text-blue-600 border-blue-200/60',
  Containers: 'bg-blue-50 text-blue-600 border-blue-200/60',
  Versatile: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
  Standard: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
  Fast: 'bg-orange-50 text-orange-600 border-orange-200/60',
  Cache: 'bg-rose-50 text-rose-600 border-rose-200/60',
  Ubiquitous: 'bg-amber-50 text-amber-700 border-amber-200/60',
  Robust: 'bg-cyan-50 text-cyan-600 border-cyan-200/60',
  Modern: 'bg-teal-50 text-teal-600 border-teal-200/60',
  Flexible: 'bg-purple-50 text-purple-600 border-purple-200/60',
  'High Demand': 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeStyle =
    badgeColorMap[tech.badge] || 'bg-slate-50 text-slate-600 border-slate-200'

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 p-1 border border-slate-100 group-hover:scale-105 transition-transform">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </div>

          {tech.badge && (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
            >
              {tech.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-slate-900 mt-4 tracking-tight">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2 min-h-[32px]">
          {tech.description}
        </p>

        {/* Metadata: Category Chip, Difficulty, Rating */}
        <div className="flex items-center justify-between gap-1 text-xs pt-4 mt-2 border-t border-slate-100">
          {/* Category Chip */}
          <span className="bg-slate-100/90 text-slate-700 px-2 py-0.5 rounded-md font-medium text-[11px]">
            {tech.category}
          </span>

          {/* Difficulty */}
          <span className="text-slate-500 font-normal text-[11px]">
            {tech.difficulty}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1 font-semibold text-slate-700 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tech.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Action Button: Add to Stack / Added state */}
      <div className="pt-4">
        {isAdded ? (
          <button
            type="button"
            disabled
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-medium text-xs flex items-center justify-center gap-1.5 cursor-not-allowed border border-slate-200 transition-colors"
          >
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Added to Stack</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAdd(tech)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-all active:scale-98 cursor-pointer shadow-xs hover:shadow"
          >
            Add to Stack
          </button>
        )}
      </div>
    </div>
  )
}
