'use client'

import DataTable, { type Column } from './DataTable'
import { type CostCenter } from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

const costCenterColumns: Column<CostCenter>[] = [
  { key: 'code', header: 'Centro de Custo', sortable: false },
  { key: 'description', header: 'Descrição', sortable: false },
  {
    key: 'budget',
    header: 'Orçado',
    align: 'right',
    render: (v) => formatBRL(v as number),
  },
  {
    key: 'actual',
    header: 'Realizado',
    align: 'right',
    render: (v) => formatBRL(v as number),
  },
  {
    key: 'variancePct',
    header: 'Variação %',
    align: 'center',
    render: (v) => {
      const pct = v as number
      const color = pct > 0 ? 'text-red-400' : 'text-emerald-400'
      return (
        <span className={`font-semibold ${color}`}>
          {pct > 0 ? '+' : ''}
          {pct.toFixed(1)}%
        </span>
      )
    },
  },
]

export default function CostCenterTable({ data }: { data: CostCenter[] }) {
  return <DataTable<CostCenter> columns={costCenterColumns} data={data} />
}
