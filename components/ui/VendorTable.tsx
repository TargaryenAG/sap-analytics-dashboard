'use client'

import DataTable, { type Column } from './DataTable'
import { type VendorData } from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

const vendorColumns: Column<VendorData>[] = [
  { key: 'name', header: 'Fornecedor' },
  { key: 'cnpj', header: 'CNPJ', sortable: false },
  {
    key: 'score',
    header: 'Score',
    align: 'center',
    render: (v) => {
      const score = v as number
      const color =
        score >= 90 ? 'text-emerald-400' : score >= 80 ? 'text-yellow-400' : 'text-red-400'
      return <span className={`font-semibold ${color}`}>{score}</span>
    },
  },
  {
    key: 'onTimeDelivery',
    header: 'OTIF %',
    align: 'center',
    render: (v) => `${(v as number).toFixed(1)}%`,
  },
  { key: 'poCount', header: 'Qtd OCs', align: 'center' },
  {
    key: 'totalSpend',
    header: 'Gasto Total',
    align: 'right',
    render: (v) => formatBRL(v as number),
  },
]

export default function VendorTable({ data }: { data: VendorData[] }) {
  return <DataTable<VendorData> columns={vendorColumns} data={data} />
}
