'use client'

import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/landing/Footer'
import { Container } from '@/components/shared/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, CheckSquare, Activity, Star } from 'lucide-react'

export default function DashboardPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 pb-10">
                <Container>
                    {/* Приветствие */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">Добро пожаловать, Иван!</h1>
                        <p className="text-gray-600 dark:text-gray-400">Группа: ИС-21</p>
                    </div>

                    {/* Статистика */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3">
                                    <CheckSquare className="w-8 h-8 text-blue-500" />
                                    <div>
                                        <div className="text-2xl font-bold">12</div>
                                        <div className="text-sm text-gray-500">Задач</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="w-8 h-8 text-green-500" />
                                    <div>
                                        <div className="text-2xl font-bold">5</div>
                                        <div className="text-sm text-gray-500">Дедлайнов</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3">
                                    <Star className="w-8 h-8 text-yellow-500" />
                                    <div>
                                        <div className="text-2xl font-bold">47</div>
                                        <div className="text-sm text-gray-500">Звёзд</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-8 h-8 text-purple-500" />
                                    <div>
                                        <div className="text-2xl font-bold">89%</div>
                                        <div className="text-sm text-gray-500">Прогресс</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Основной контент */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Задачи */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Мои задачи</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                            <input type="checkbox" className="w-4 h-4" />
                                            <div>
                                                <div className="font-medium">Лабораторная работа №3</div>
                                                <div className="text-sm text-gray-500">Дедлайн: 15.12.2024</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                            <input type="checkbox" className="w-4 h-4" />
                                            <div>
                                                <div className="font-medium">Подготовиться к экзамену</div>
                                                <div className="text-sm text-gray-500">Дедлайн: 20.12.2024</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Календарь */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Календарь</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center text-gray-500 py-8">
                                        <CalendarDays className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">Мини-календарь</p>
                                        <p className="text-xs">(будет позже)</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    )
}