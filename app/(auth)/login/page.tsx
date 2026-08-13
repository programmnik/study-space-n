'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Вход:', formData)
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
            <div className="w-full h-screen flex">
                {/* Левая часть - Картинка на всю высоту */}
                <div className="hidden lg:block relative w-1/2 h-screen overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&crop=center"
                        alt="Обучение"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Свечение от картинки */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(99,102,241,0.15)]" />
                    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/40 dark:from-black/40 to-transparent" />
                </div>

                {/* Правая часть - Форма */}
                <div className="flex-1 flex items-center justify-center p-12 lg:p-20">
                    <div className="w-full max-w-md">
                        {/* Заголовок */}
                        <div className="mb-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                                Вход
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Войдите в свой аккаунт
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email или Telegram
                                </Label>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="ivan@mail.ru или @ivan_ivanov"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Пароль
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full h-12 text-base gap-2 mt-4 rounded-lg">
                                Войти
                                <ArrowRight className="w-4 h-4" />
                            </Button>

                            <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                                Нет аккаунта?{' '}
                                <Link href="/register" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                    Зарегистрироваться
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}