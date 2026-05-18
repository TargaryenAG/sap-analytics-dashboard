'use client'

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from 'recharts'
import type { PLMonth } from '@/lib/mockData'

interface PLChartProps {
  data: PLMonth[]
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null

  const labelMap: Record<string, string> = {
    revenue: 'Receita',
    cost: 'Custo',
    ebitda: 'EBITDA',
  }

  return (
    <div className="rounded-lg border border-white/15 bg-sapDark/90 p-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 text-xs mt-1">
          <span
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-slate-400">{labelMap[entry.name as string] ?? entry.name}:</span>
          <span className="font-semibold text-white">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            }).format(entry.value as number)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function PLChart({ data }: PLChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.2)" />
        <XAxis
          dataKey="month"
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
          width={48}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconSize={8}
          formatter={(value) => {
            const map: Record<string, string> = { revenue: 'Receita', cost: 'Custo', ebitda: 'EBITDA' }
            return <span style={{ color: '#94a3b8', fontSize: '11px' }}>{map[value] ?? value}</span>
          }}
        />
        <Bar dataKey="revenue" fill="#0070f3" radius={[3, 3, 0, 0]} barSize={14} name="revenue" />
        <Bar dataKey="cost" fill="#f97316" radius={[3, 3, 0, 0]} barSize={14} name="cost" />
        <Line
          type="monotone"
          dataKey="ebitda"
          stroke="#10b981"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
          name="ebitda"
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
