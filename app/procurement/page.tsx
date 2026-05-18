import { ShoppingCart, Users, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import KPICard from '@/components/ui/KPICard'
import SectionCard from '@/components/ui/SectionCard'
import VendorTable from '@/components/ui/VendorTable'
import SpendCategoryChart from '@/components/charts/SpendCategoryChart'
import RevenueChart from '@/components/charts/RevenueChart'
import { spendByCategory, procurementData, vendorData } from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

const poMonthlyData = procurementData.map((d) => ({
  month: d.month,
  revenue: d.poValue,
  target: d.poValue * 1.05,
}))

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
          <VendorTable data={vendorData} />
        </SectionCard>
      </div>
    </div>
  )
}
