import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

export const metadata: Metadata = {
  title: 'SAP Analytics Dashboard',
  description: 'Business Intelligence dashboard inspired by SAP Analytics Cloud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#0b0f1a] text-white antialiased">
        <div className="flex min-h-screen">
          {/* Fixed sidebar */}
          <aside className="fixed inset-y-0 left-0 z-30 w-60 flex-shrink-0">
            <Sidebar />
          </aside>
          {/* Main content offset by sidebar width */}
          <main className="ml-60 flex-1 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
