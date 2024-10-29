'use client'

import { SidebarProvider } from "@/components/ui/sidebar"

export default function RosterLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </main>
  )
} 