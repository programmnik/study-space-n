import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Layers, Sparkles, Users, Zap } from 'lucide-react'

export function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Beta версия</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    Умное пространство для
                    <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        твоего обучения
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Study Space N — платформа для эффективной учебы в университете
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="2xl" className="group relative">
                        <Link href="/register" className="flex gap-2">
                            <p className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>Начать</p>
                            <ArrowRight size={20} className="absolute top-1/2 right-9 transition duration-300 -translate-x-7 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                    </Button>
                    <Button size="2xl" variant="outline">
                        <Link href="/login">Войти</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto">
                    <Card>
                        <CardContent className="pt-2">
                            <Layers size={32} className="text-blue-500 mx-auto mb-2" />
                            <div className="font-semibold">Структурно</div>
                            <div className="text-sm text-gray-500">Четкая организация учебного процесса</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-2">
                            <Users size={32} className="text-blue-500 mx-auto mb-2" />
                            <div className="font-semibold">Команда</div>
                            <div className="text-sm text-gray-500">Работайте вместе эффективно</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-2">
                            <Zap size={32} className="text-blue-500 mx-auto mb-2" />
                            <div className="font-semibold">Быстро</div>
                            <div className="text-sm text-gray-500">Все инструменты в одном месте</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}