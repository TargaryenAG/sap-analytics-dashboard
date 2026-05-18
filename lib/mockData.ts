// ── SAP Analytics Dashboard — Mock Data ─────────────────────────────────────
// All values are representative of a mid-size Brazilian manufacturing company.
// Currency: BRL (R$). Fiscal year: Jan–Dec.

// ── Types ────────────────────────────────────────────────────────────────────

export interface MonthlyRevenue {
  month: string
  revenue: number
  target: number
}

export interface RegionData {
  region: string
  revenue: number
  orders: number
}

export interface CustomerData {
  id: string
  sapId: string
  name: string
  revenue: number
  orders: number
  status: 'Ativo' | 'Inativo' | 'Bloqueado'
}

export interface ProcurementMonth {
  month: string
  poValue: number
  poCount: number
}

export interface SpendCategory {
  name: string
  value: number
  color: string
}

export interface VendorData {
  id: string
  cnpj: string
  name: string
  score: number
  onTimeDelivery: number
  poCount: number
  totalSpend: number
}

export interface PLMonth {
  month: string
  revenue: number
  cost: number
  ebitda: number
}

export interface BudgetActual {
  month: string
  budget: number
  actual: number
  variance: number
}

export interface CostCenter {
  code: string
  description: string
  budget: number
  actual: number
  variancePct: number
}

// ── Sales Data (SD Module) ──────────────────────────────────────────────────

export const salesData: MonthlyRevenue[] = [
  { month: 'Jan', revenue: 312_000, target: 300_000 },
  { month: 'Fev', revenue: 298_500, target: 310_000 },
  { month: 'Mar', revenue: 341_200, target: 320_000 },
  { month: 'Abr', revenue: 327_800, target: 325_000 },
  { month: 'Mai', revenue: 356_400, target: 340_000 },
  { month: 'Jun', revenue: 389_700, target: 360_000 },
  { month: 'Jul', revenue: 372_100, target: 370_000 },
  { month: 'Ago', revenue: 401_600, target: 380_000 },
  { month: 'Set', revenue: 415_300, target: 395_000 },
  { month: 'Out', revenue: 438_900, target: 410_000 },
  { month: 'Nov', revenue: 452_100, target: 430_000 },
  { month: 'Dez', revenue: 447_200, target: 450_000 },
]

export const salesByRegion: RegionData[] = [
  { region: 'Sudeste', revenue: 1_845_300, orders: 623 },
  { region: 'Sul', revenue: 987_400, orders: 341 },
  { region: 'Nordeste', revenue: 654_200, orders: 228 },
  { region: 'Centro-Oeste', revenue: 432_100, orders: 156 },
  { region: 'Norte', revenue: 234_800, orders: 87 },
]

export const topCustomers: CustomerData[] = [
  { id: '1', sapId: 'C-100001', name: 'Petrobras Distribuidora S.A.', revenue: 487_200, orders: 42, status: 'Ativo' },
  { id: '2', sapId: 'C-100002', name: 'Vale Soluções em Energia', revenue: 421_600, orders: 38, status: 'Ativo' },
  { id: '3', sapId: 'C-100003', name: 'Embraer Componentes Ltda.', revenue: 378_900, orders: 31, status: 'Ativo' },
  { id: '4', sapId: 'C-100004', name: 'Gerdau Aço Brasil S.A.', revenue: 312_500, orders: 27, status: 'Ativo' },
  { id: '5', sapId: 'C-100005', name: 'Braskem Petroquímica', revenue: 289_300, orders: 24, status: 'Ativo' },
  { id: '6', sapId: 'C-100006', name: 'WEG Equipamentos Elétricos', revenue: 245_700, orders: 19, status: 'Ativo' },
  { id: '7', sapId: 'C-100007', name: 'Randon Implementos S.A.', revenue: 198_400, orders: 17, status: 'Inativo' },
  { id: '8', sapId: 'C-100008', name: 'Marcopolo Ônibus Ltda.', revenue: 167_800, orders: 14, status: 'Ativo' },
  { id: '9', sapId: 'C-100009', name: 'Fras-le Freios e Amortecedores', revenue: 134_200, orders: 11, status: 'Ativo' },
  { id: '10', sapId: 'C-100010', name: 'Tupy Fundições do Brasil', revenue: 98_600, orders: 8, status: 'Bloqueado' },
]

// ── Procurement Data (MM Module) ────────────────────────────────────────────

export const procurementData: ProcurementMonth[] = [
  { month: 'Jan', poValue: 187_400, poCount: 58 },
  { month: 'Fev', poValue: 163_200, poCount: 51 },
  { month: 'Mar', poValue: 214_500, poCount: 67 },
  { month: 'Abr', poValue: 198_700, poCount: 62 },
  { month: 'Mai', poValue: 231_300, poCount: 72 },
  { month: 'Jun', poValue: 245_800, poCount: 78 },
  { month: 'Jul', poValue: 219_600, poCount: 68 },
  { month: 'Ago', poValue: 258_400, poCount: 81 },
  { month: 'Set', poValue: 267_100, poCount: 84 },
  { month: 'Out', poValue: 281_900, poCount: 89 },
  { month: 'Nov', poValue: 293_400, poCount: 92 },
  { month: 'Dez', poValue: 274_600, poCount: 86 },
]

export const spendByCategory: SpendCategory[] = [
  { name: 'Matéria-Prima', value: 1_234_700, color: '#0070f3' },
  { name: 'MRO', value: 487_300, color: '#7c3aed' },
  { name: 'Serviços', value: 356_800, color: '#059669' },
  { name: 'Capex', value: 289_400, color: '#d97706' },
  { name: 'TI', value: 164_200, color: '#dc2626' },
]

export const vendorData: VendorData[] = [
  { id: 'V-2001', cnpj: '12.345.678/0001-99', name: 'Steeltech Aços Especiais Ltda.', score: 94, onTimeDelivery: 97.3, poCount: 87, totalSpend: 423_100 },
  { id: 'V-2002', cnpj: '23.456.789/0001-88', name: 'QuimiFlex Produtos Químicos S.A.', score: 88, onTimeDelivery: 91.8, poCount: 64, totalSpend: 318_700 },
  { id: 'V-2003', cnpj: '34.567.890/0001-77', name: 'TransBrasil Logística e Transporte', score: 82, onTimeDelivery: 85.2, poCount: 112, totalSpend: 267_400 },
  { id: 'V-2004', cnpj: '45.678.901/0001-66', name: 'EletroTech Componentes Elétricos', score: 91, onTimeDelivery: 94.6, poCount: 53, totalSpend: 198_600 },
  { id: 'V-2005', cnpj: '56.789.012/0001-55', name: 'Plásticos do Sul Indústria Ltda.', score: 76, onTimeDelivery: 78.9, poCount: 41, totalSpend: 156_300 },
  { id: 'V-2006', cnpj: '67.890.123/0001-44', name: 'MetalPrime Fundição e Usinagem', score: 85, onTimeDelivery: 88.4, poCount: 38, totalSpend: 134_800 },
  { id: 'V-2007', cnpj: '78.901.234/0001-33', name: 'SoluTI Sistemas e Infraestrutura', score: 79, onTimeDelivery: 82.1, poCount: 29, totalSpend: 98_200 },
  { id: 'V-2008', cnpj: '89.012.345/0001-22', name: 'Borracharia Industrial Norte S.A.', score: 68, onTimeDelivery: 71.5, poCount: 22, totalSpend: 67_900 },
]

// ── Finance Data (FI Module) ────────────────────────────────────────────────

export const plData: PLMonth[] = [
  { month: 'Jan', revenue: 312_000, cost: 218_400, ebitda: 93_600 },
  { month: 'Fev', revenue: 298_500, cost: 209_000, ebitda: 89_500 },
  { month: 'Mar', revenue: 341_200, cost: 238_800, ebitda: 102_360 },
  { month: 'Abr', revenue: 327_800, cost: 229_500, ebitda: 98_340 },
  { month: 'Mai', revenue: 356_400, cost: 249_500, ebitda: 106_920 },
  { month: 'Jun', revenue: 389_700, cost: 272_800, ebitda: 116_910 },
  { month: 'Jul', revenue: 372_100, cost: 260_500, ebitda: 111_630 },
  { month: 'Ago', revenue: 401_600, cost: 281_100, ebitda: 120_480 },
  { month: 'Set', revenue: 415_300, cost: 290_700, ebitda: 124_590 },
  { month: 'Out', revenue: 438_900, cost: 307_200, ebitda: 131_670 },
  { month: 'Nov', revenue: 452_100, cost: 316_500, ebitda: 135_630 },
  { month: 'Dez', revenue: 447_200, cost: 313_000, ebitda: 134_160 },
]

export const budgetActualData: BudgetActual[] = [
  { month: 'Jan', budget: 320_000, actual: 312_000, variance: -2.5 },
  { month: 'Fev', budget: 310_000, actual: 298_500, variance: -3.7 },
  { month: 'Mar', budget: 330_000, actual: 341_200, variance: 3.4 },
  { month: 'Abr', budget: 340_000, actual: 327_800, variance: -3.6 },
  { month: 'Mai', budget: 355_000, actual: 356_400, variance: 0.4 },
  { month: 'Jun', budget: 370_000, actual: 389_700, variance: 5.3 },
]

export const costCenterData: CostCenter[] = [
  { code: 'CC-1000', description: 'Produção — Linha 1', budget: 487_000, actual: 512_300, variancePct: 5.2 },
  { code: 'CC-1100', description: 'Produção — Linha 2', budget: 423_000, actual: 398_700, variancePct: -5.7 },
  { code: 'CC-2000', description: 'Logística e Distribuição', budget: 318_000, actual: 327_400, variancePct: 3.0 },
  { code: 'CC-3000', description: 'Vendas & Marketing', budget: 256_000, actual: 249_100, variancePct: -2.7 },
  { code: 'CC-4000', description: 'Tecnologia da Informação', budget: 198_000, actual: 203_600, variancePct: 2.8 },
  { code: 'CC-5000', description: 'Recursos Humanos', budget: 167_000, actual: 161_300, variancePct: -3.4 },
]
