'use client'

import DataTable, { type Column } from './DataTable'
import { type CustomerData } from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

const customerColumns: Column<CustomerData>[] = [
  { key: 'sapId', header: 'SAP ID', sortable: false },
  { key: 'name', header: 'Cliente' },
  {
    key: 'revenue',
    header: 'Receita',
    align: 'right',
    render: (v) => formatBRL(v as number),
  },
  {
    key: 'orders',
    header: 'Pedidos',
    align: 'center',
  },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
    sortable: false,
    render: (v) => {
      const status = v as CustomerData['status']
      const styles: Record<CustomerData['status'], string> = {
        Ativo: 'bg-emerald-500/15 text-emerald-400',
        Inativo: 'bg-slate-500/15 text-slate-400',
        Bloqueado: 'bg-red-500/15 text-red-400',
      }
      return (
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${styles[status]}`}>
          {status}
        </span>
      )
    },
  },
]

export default function CustomerTable({ data }: { data: CustomerData[] }) {
  return <DataTable<CustomerData> columns={customerColumns} data={data} />
}
