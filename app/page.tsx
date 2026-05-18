import { TrendingUp, ShoppingCart, RefreshCw, Banknote } from 'lucide-react'
import Header from '@/components/layout/Header'
import KPICard from '@/components/ui/KPICard'
import SectionCard from '@/components/ui/SectionCard'
import DataTable, { type Column } from '@/components/ui/DataTable'
import RevenueChart from '@/components/charts/RevenueChart'
import SpendCategoryChart from '@/components/charts/SpendCategoryChart'
import {
  salesData,
  spendByCategory,
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

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header
        title="Overview"
        subtitle="Company Code: BR01 — Exercício 2026"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Receita Total"
            value={formatBRL(4_200_000, true)}
            change={12.4}
            trend="up"
            icon={TrendingUp}
            subtitle="Acumulado 2026"
          />
          <KPICard
            title="OCs em Aberto"
            value="247"
            change={3.1}
            trend="down"
            icon={ShoppingCart}
            subtitle="Ordens de compra"
          />
          <KPICard
            title="Giro de Estoque"
            value="8.3x"
            change={5.2}
            trend="up"
            icon={RefreshCw}
            subtitle="Rotatividade anual"
          />
          <KPICard
            title="Posição de Caixa"
            value={formatBRL(1_800_000, true)}
            change={8.7}
            trend="up"
            icon={Banknote}
            subtitle="Disponível em conta"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SectionCard
            title="Receita — Últimos 12 Meses"
            subtitle="Receita realizada vs. meta mensal"
          >
            <RevenueChart data={salesData} />
          </SectionCard>

          <SectionCard
            title="Gastos por Categoria"
            subtitle="Distribuição de compras por tipo"
          >
            <SpendCategoryChart data={spendByCategory} />
          </SectionCard>
        </div>

        {/* Top customers table */}
        <SectionCard title="Top Clientes" subtitle="Por receita acumulada em 2026">
          <DataTable<CustomerData>
            columns={customerColumns}
            data={topCustomers}
          />
        </SectionCard>
      </div>
    </div>
  )
}
