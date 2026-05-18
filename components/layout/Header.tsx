import { Download } from 'lucide-react'

interface HeaderProps {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  const dateStr = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  // Capitalise first letter
  const formattedDate = dateStr.charAt(0).toUpperCase() + dateStr.slice(1)

  return (
    <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
      <div>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-0.5 text-sm text-slate-400">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-xs text-slate-500 capitalize">
          {formattedDate}
        </span>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-sapBlue px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Download className="h-3.5 w-3.5" strokeWidth={2} />
          Export
        </button>
      </div>
    </div>
  )
}
