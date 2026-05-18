'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from 'recharts'
import type { SpendCategory } from '@/lib/mockData'

interface SpendCategoryChartProps {
  data: SpendCategory[]
}

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null
  const item = payload[0]
  return (
    <div className="rounded-lg border border-white/15 bg-sapDark/90 p-3 shadow-xl backdrop-blur-sm">
      <p className="mb-1 text-xs font-semibold text-white">{item.name}</p>
      <p className="text-xs text-slate-300">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 0,
        }).format(item.value as number)}
      </p>
    </div>
  )
}

export default function SpendCategoryChart({ data }: SpendCategoryChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          innerRadius={60}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} stroke="transparent" />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconSize={8}
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: '#94a3b8', fontSize: '11px' }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
