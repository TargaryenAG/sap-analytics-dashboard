'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  caption?: string
}

type SortDir = 'asc' | 'desc' | null

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  caption,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [sortDir, setSortDir] = useState<SortDir>(null)

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'))
      if (sortDir === 'desc') setSortKey(null)
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const sorted = [...data].sort((a, b) => {
    if (!sortKey || !sortDir) return 0
    const av = a[sortKey]
    const bv = b[sortKey]
    if (typeof av === 'number' && typeof bv === 'number') {
      return sortDir === 'asc' ? av - bv : bv - av
    }
    return sortDir === 'asc'
      ? String(av).localeCompare(String(bv), 'pt-BR')
      : String(bv).localeCompare(String(av), 'pt-BR')
  })

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/8 bg-white/4">
      {caption && (
        <div className="border-b border-white/8 px-5 py-3.5">
          <p className="text-sm font-semibold text-white">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/8 bg-white/2">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  className={cn(
                    'px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 whitespace-nowrap',
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left',
                    col.sortable !== false && 'cursor-pointer select-none hover:text-slate-200 transition-colors'
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.header}
                    {col.sortable !== false && (
                      <span className="text-slate-600">
                        {sortKey === col.key && sortDir === 'asc' ? (
                          <ChevronUp className="h-3 w-3 text-sapBlue" />
                        ) : sortKey === col.key && sortDir === 'desc' ? (
                          <ChevronDown className="h-3 w-3 text-sapBlue" />
                        ) : (
                          <ChevronsUpDown className="h-3 w-3" />
                        )}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  'border-b border-white/5 transition-colors hover:bg-white/4',
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/2'
                )}
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={cn(
                      'px-4 py-3 text-slate-300',
                      col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                    )}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
