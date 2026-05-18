'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  type TooltipProps,
} from 'recharts'
import type { RegionData } from '@/lib/mockData'

interface SalesRegionChartProps {
  data: RegionData[]
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-white/15 bg-sapDark/90 p-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-xs font-semibold text-slate-400">{label}</p>
      <div className="text-xs">
        <span className="text-slate-400">Receita: </span>
        <span className="font-semibold text-white">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
          }).format(payload[0].value as number)}
        </span>
      </div>
    </div>
  )
}

const COLORS = ['#0070f3', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']

export default function SalesRegionChart({ data }: SalesRegionChartProps) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 12, left: 80, bottom: 4 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
        <XAxis
          type="number"
          tick={{ fill: '#64748b', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
        />
        <YAxis
          type="category"
          dataKey="region"
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={76}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
        <Bar dataKey="revenue" radius={[0, 4, 4, 0]} barSize={18}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
