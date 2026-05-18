'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  LayoutDashboard,
  TrendingUp,
  ShoppingCart,
  DollarSign,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', icon: LayoutDashboard, label: 'Overview' },
  { href: '/sales', icon: TrendingUp, label: 'Vendas (SD)' },
  { href: '/procurement', icon: ShoppingCart, label: 'Compras (MM)' },
  { href: '/finance', icon: DollarSign, label: 'Finanças (FI)' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-60 flex-col bg-[#0d1117] border-r border-white/5">
      {/* Logo area */}
      <div className="flex h-16 items-center gap-2.5 px-5 border-b border-white/5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sapBlue/15 ring-1 ring-sapBlue/30">
          <BarChart3 className="h-4.5 w-4.5 text-sapBlue" strokeWidth={1.75} />
        </div>
        <span className="text-sm font-semibold text-white tracking-tight">
          SAP Analytics
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Módulos
        </p>
        {navLinks.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
                isActive
                  ? 'bg-sapBlue/10 text-sapBlue border-l-2 border-sapBlue pl-[10px]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent pl-[10px]'
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4 flex-shrink-0',
                  isActive ? 'text-sapBlue' : 'text-slate-500'
                )}
                strokeWidth={1.75}
              />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom area */}
      <div className="border-t border-white/5 px-5 py-4">
        <p className="text-[10px] text-slate-600">SAP Analytics v1.0</p>
      </div>
    </div>
  )
}
