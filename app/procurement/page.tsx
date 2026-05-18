import { ShoppingCart, Users, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import KPICard from '@/components/ui/KPICard'
import SectionCard from '@/components/ui/SectionCard'
import DataTable, { type Column } from '@/components/ui/DataTable'
import SpendCategoryChart from '@/components/charts/SpendCategoryChart'
import RevenueChart from '@/components/charts/RevenueChart'
import {
  spendByCategory,
  procurementData,
  vendorData,
  type VendorData,
} from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

// Adapt procurementData to the MonthlyRevenue shape expected by RevenueChart
const poMonthlyData = procurementData.map((d) => ({
  month: d.month,
  revenue: d.poValue,
  target: d.poValue * 1.05, // illustrative 5% over-budget target line
}))

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
        score >= 90
          ? 'text-emerald-400'
          : score >= 80
          ? 'text-yellow-400'
          : 'text-red-400'
      return <span className={`font-semibold ${color}`}>{score}</span>
    },
  },
  {
    key: 'onTimeDelivery',
    header: 'OTIF %',
    align: 'center',
    render: (v) => `${(v as number).toFixed(1)}%`,
  },
  {
    key: 'poCount',
    header: 'Qtd OCs',
    align: 'center',
  },
  {
    key: 'totalSpend',
    header: 'Gasto Total',
    align: 'right',
    render: (v) => formatBRL(v as number),
  },
]

export default function ProcurementPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header
        title="Compras & Suprimentos"
        subtitle="Módulo MM"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KPICard
            title="Valor Total OC"
            value={formatBRL(1_900_000, true)}
            change={4.2}
            trend="up"
            icon={ShoppingCart}
            subtitle="Ordens de compra emitidas"
          />
          <KPICard
            title="Fornecedores Ativos"
            value="42"
            change={2.4}
            trend="up"
            icon={Users}
            subtitle="Homologados no período"
          />
          <KPICard
            title="OTIF"
            value="94.7%"
            change={1.3}
            trend="up"
            icon={TrendingUp}
            subtitle="On-time in-full médio"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SectionCard
            title="Gastos por Categoria"
            subtitle="Distribuição de compras por tipo de material/serviço"
          >
            <SpendCategoryChart data={spendByCategory} />
          </SectionCard>

          <SectionCard
            title="Volume Mensal de OCs"
            subtitle="Valor das ordens de compra emitidas por mês"
          >
            <RevenueChart data={poMonthlyData} />
          </SectionCard>
        </div>

        {/* Vendor performance table */}
        <SectionCard title="Performance de Fornecedores" subtitle="Scorecard — 2026">
          <DataTable<VendorData>
            columns={vendorColumns}
            data={vendorData}
          />
        </SectionCard>
      </div>
    </div>
  )
}
