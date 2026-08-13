'use client'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard/AppSidebar'
import { Footer } from '@/components/landing/Footer'
import { Header } from '@/components/shared/Header'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 min-h-screen">
                <div className="justify-between sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 px-4 py-3 flex items-center gap-4">
                    <SidebarTrigger />

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
                <div >
                    {children}
                </div>
                <Footer />
            </main>
        </SidebarProvider>
    )
}