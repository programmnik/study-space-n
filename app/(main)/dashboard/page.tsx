'use client'

import { Container } from '@/components/shared/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, CheckSquare, Activity, Star, Clock, TrendingUp, Users } from 'lucide-react'

export default function DashboardPage() {
    return (
        <main className="relative min-h-screen py-8">
            {/* Фон с сеткой */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-dashboard" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="1" fill="rgba(99, 102, 241, 0.08)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-dashboard)" />
                </svg>
            </div>

            <Container className="relative z-10">
                {/* Приветствие */}
                <div className="mb-8">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                Добро пожаловать, Иван! 👋
                            </h1>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-gray-600 dark:text-gray-400">Группа: ИС-21</span>
                                <span className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
                                <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    24 участника
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>Последний вход: сегодня, 14:30</span>
                        </div>
                    </div>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <CheckSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Активных задач</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <CalendarDays className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Дедлайнов</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                    <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">47</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Звёзд</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">89%</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Прогресс</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Основной контент */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Задачи */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                                    Мои задачи
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-4 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200">
                                        <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-900 dark:text-white">Лабораторная работа №3</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Дедлайн: 15.12.2024</div>
                                        </div>
                                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                                            Средний
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200">
                                        <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-900 dark:text-white">Подготовиться к экзамену</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Дедлайн: 20.12.2024</div>
                                        </div>
                                        <span className="px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full">
                                            Высокий
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 opacity-60">
                                        <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500" />
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-500 dark:text-gray-400 line-through">Отчет по практике</div>
                                            <div className="text-sm text-gray-400 dark:text-gray-500">Выполнено</div>
                                        </div>
                                        <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                                            Выполнено
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Календарь */}
                    <div>
                        <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 h-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                                    Календарь
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <CalendarDays className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">Мини-календарь</p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Будет доступен позже</p>
                                    <div className="mt-6 flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">Д</div>
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">П</div>
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">В</div>
                                        <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-medium">С</div>
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">Ч</div>
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">П</div>
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">С</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </main>
    )
}