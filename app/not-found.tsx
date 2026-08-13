'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared/Container'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/landing/Footer'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[70vh] flex items-center justify-center">
                <Container className="text-center py-20 max-w-2xl">
                    {/* 404 с эффектом */}
                    <div className="relative inline-block mb-8">
                        <div className="text-[120px] md:text-[160px] font-bold leading-none tracking-tighter text-gray-900 dark:text-white select-none">
                            404
                        </div>
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                    </div>

                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Страница не найдена
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-md mx-auto mb-10">
                        Возможно, вы перешли по старой ссылке или адрес был введён неверно.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/">
                            <Button size="2xl" className="min-w-[180px]">
                                <Home className="w-4 h-4 mr-2" />
                                На главную
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button
                                variant="outline"
                                size="2xl"
                                className="min-w-[180px]"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Назад
                            </Button>
                        </Link>
                    </div>

                    {/* Декоративный элемент */}
                    <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-600">
                        <Search className="w-4 h-4" />
                        <span>Поиск не помог? Вернитесь на главную</span>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    )
}