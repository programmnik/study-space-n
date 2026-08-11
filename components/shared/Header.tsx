import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { GraduationCap } from 'lucide-react'

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <GraduationCap className="w-8 h-8 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Study Space N
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}