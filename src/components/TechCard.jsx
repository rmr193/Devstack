import { Star } from 'lucide-react'

const badgeColors = {
  Fast: 'badge-warning',
  Versatile: 'badge-success',
  Standard: 'badge-success',
  Cache: 'badge-error',
  Ubiquitous: 'badge-warning',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, icon, description, category, difficulty, rating, badge } = tech
  const badgeColor = badgeColors[badge] || 'badge-info'

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 p-1 border border-slate-100">
            <img src={icon} alt={name} className="w-7 h-7 object-contain" />
          </div>
          {badge && (
            <span className={`badge badge-sm badge-soft ${badgeColor} text-xs font-medium`}>
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mt-4">{name}</h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-xs pt-4 mt-2 border-t border-slate-100">
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium text-xs">
            {category}
          </span>
          <span className="text-slate-500">{difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={() => onAdd(tech)}
          className={`btn btn-sm w-full rounded-xl text-xs font-medium border-none cursor-pointer ${
            isAdded
              ? 'bg-slate-100 text-slate-400 hover:bg-slate-200/60'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  )
}
