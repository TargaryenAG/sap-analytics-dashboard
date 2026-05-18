import { cn } from '@/lib/utils'

interface SectionCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function SectionCard({
  title,
  subtitle,
  children,
  className,
}: SectionCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/8 bg-white/4 overflow-hidden',
        className
      )}
    >
      <div className="border-b border-white/8 px-5 py-4">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
