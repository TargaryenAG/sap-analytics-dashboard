import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KPICardProps {
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  icon: LucideIcon
  subtitle?: string
  className?: string
}

export default function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  subtitle,
  className,
}: KPICardProps) {
  const isPositive = trend === 'up'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm transition-all duration-200 hover:border-sapBlue/40 hover:bg-white/6',
        className
      )}
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-sapBlue/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {title}
          </p>
          <p className="mt-2 text-2xl font-bold text-white leading-none">
            {value}
          </p>
          {subtitle && (
            <p className="mt-1 text-xs text-slate-500 truncate">{subtitle}</p>
          )}
        </div>
        <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sapBlue/15 ring-1 ring-sapBlue/25">
          <Icon className="h-5 w-5 text-sapBlue" strokeWidth={1.75} />
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-1.5">
        <div
          className={cn(
            'flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
            isPositive
              ? 'bg-emerald-500/15 text-emerald-400'
              : 'bg-red-500/15 text-red-400'
          )}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {Math.abs(change).toFixed(1)}%
        </div>
        <span className="text-xs text-slate-500">vs. mês anterior</span>
      </div>
    </div>
  )
}
