import { TrendingUp, ShoppingBag, Package } from 'lucide-react'
import Header from '@/components/layout/Header'
import KPICard from '@/components/ui/KPICard'
import SectionCard from '@/components/ui/SectionCard'
import DataTable, { type Column } from '@/components/ui/DataTable'
import RevenueChart from '@/components/charts/RevenueChart'
import SalesRegionChart from '@/components/charts/SalesRegionChart'
import {
  salesData,
  salesByRegion,
  topCustomers,
  type CustomerData,
} from '@/lib/mockData'
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

export default function SalesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header
        title="Vendas & Distribuição"
        subtitle="Módulo SD"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KPICard
            title="Receita Bruta"
            value={formatBRL(4_200_000, true)}
            change={12.4}
            trend="up"
            icon={TrendingUp}
            subtitle="Jan – Dez 2026"
          />
          <KPICard
            title="Receita Líquida"
            value={formatBRL(3_800_000, true)}
            change={10.8}
            trend="up"
            icon={ShoppingBag}
            subtitle="Após impostos e devoluções"
          />
          <KPICard
            title="Volume de Pedidos"
            value="1.247"
            change={6.3}
            trend="up"
            icon={Package}
            subtitle="Pedidos de venda emitidos"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SectionCard
            title="Desempenho por Região"
            subtitle="Receita acumulada por região geográfica"
          >
            <SalesRegionChart data={salesByRegion} />
          </SectionCard>

          <SectionCard
            title="Tendência Mensal de Receita"
            subtitle="Receita realizada vs. meta — 2026"
          >
            <RevenueChart data={salesData} />
          </SectionCard>
        </div>

        {/* Top customers table */}
        <SectionCard title="Top Clientes" subtitle="Ranking por receita — Módulo SD">
          <DataTable<CustomerData>
            columns={customerColumns}
            data={topCustomers}
          />
        </SectionCard>
      </div>
    </div>
  )
}
