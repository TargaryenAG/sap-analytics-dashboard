import { BarChart2, Banknote, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import KPICard from '@/components/ui/KPICard'
import SectionCard from '@/components/ui/SectionCard'
import CostCenterTable from '@/components/ui/CostCenterTable'
import PLChart from '@/components/charts/PLChart'
import RevenueChart from '@/components/charts/RevenueChart'
import { plData, budgetActualData, costCenterData } from '@/lib/mockData'
import { formatBRL } from '@/lib/utils'

const budgetChartData = budgetActualData.map((d) => ({
  month: d.month,
  revenue: d.actual,
  target: d.budget,
}))

export default function FinancePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header
        title="Finanças & Contabilidade"
        subtitle="Módulo FI"
      />

      <div className="flex-1 p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KPICard
            title="Margem EBITDA"
            value="18.4%"
            change={2.1}
            trend="up"
            icon={BarChart2}
            subtitle="Jan – Dez 2026"
          />
          <KPICard
            title="Lucro Líquido"
            value={formatBRL(540_000, true)}
            change={9.3}
            trend="up"
            icon={Banknote}
            subtitle="Resultado do período"
          />
          <KPICard
            title="DSO"
            value="32 dias"
            change={4.5}
            trend="down"
            icon={Clock}
            subtitle="Days Sales Outstanding"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SectionCard
            title="DRE — Receita, Custo e EBITDA"
            subtitle="Demonstração do resultado por mês"
          >
            <PLChart data={plData} />
          </SectionCard>

          <SectionCard
            title="Budget vs. Realizado"
            subtitle="Comparativo de receita orçada x realizada"
          >
            <RevenueChart data={budgetChartData} />
          </SectionCard>
        </div>

        {/* Cost centers table */}
        <SectionCard title="Centros de Custo" subtitle="Orçado vs. Realizado — 2026">
          <CostCenterTable data={costCenterData} />
        </SectionCard>
      </div>
    </div>
  )
}
