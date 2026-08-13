'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    ToggleGroup,
    ToggleGroupItem,
} from '@/components/ui/toggle-group'
import { ArrowRight, Mail, Send } from 'lucide-react'

export default function RegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        fullName: '',
        nickname: '',
        contactMethod: ['email'] as string[],
        email: '',
        telegram: '',
        groupCode: '',
        groupName: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Форма отправлена:', formData)
        // TODO: отправка на бэк
    }

    const getContactValue = () => {
        return formData.contactMethod[0] || 'email'
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
            <div className="w-full h-screen flex">
                {/* Левая часть - Форма */}
                <div className="flex-1 flex items-center justify-center p-12 lg:p-20">
                    <div className="w-full max-w-md">
                        {/* Заголовок */}
                        <div className="mb-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                                Создать аккаунт
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Присоединяйтесь к учебной группе
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    ФИО
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="Иванов Иван Иванович"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                    className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="nickname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Никнейм
                                </Label>
                                <Input
                                    id="nickname"
                                    placeholder="ivan_ivanov"
                                    value={formData.nickname}
                                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                                    required
                                    className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                />
                            </div>

                            {/* Выбор способа связи */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Способ связи
                                </Label>
                                <ToggleGroup
                                    value={formData.contactMethod}
                                    onValueChange={(value) => {
                                        if (value && value.length > 0) {
                                            setFormData({ ...formData, contactMethod: value })
                                        }
                                    }}
                                    className="justify-start gap-2"
                                >
                                    <ToggleGroupItem
                                        value="email"
                                        className="h-12 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 data-[pressed]:bg-blue-500 data-[pressed]:text-white data-[pressed]:border-blue-500 dark:data-[pressed]:bg-blue-800 dark:data-[pressed]:text-white dark:data-[pressed]:border-blue-600"
                                    >
                                        <Mail size={16} className="mr-2" />
                                        Email
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="telegram"
                                        className="h-12 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 data-[pressed]:bg-blue-500 data-[pressed]:text-white data-[pressed]:border-blue-500 dark:data-[pressed]:bg-blue-800 dark:data-[pressed]:text-white dark:data-[pressed]:border-blue-600"
                                    >
                                        <Send size={16} className="mr-2" />
                                        Telegram
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            {/* Поле в зависимости от выбора */}
                            {getContactValue() === 'email' ? (
                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ivan@mail.ru"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                    />
                                </div>
                            ) : (
                                <div className="space-y-1.5">
                                    <Label htmlFor="telegram" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Telegram
                                    </Label>
                                    <Input
                                        id="telegram"
                                        placeholder="@ivan_ivanov"
                                        value={formData.telegram}
                                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                        required
                                        className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                    />
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="groupCode" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Код группы
                                    </Label>
                                    <Input
                                        id="groupCode"
                                        placeholder="ABC-123"
                                        value={formData.groupCode}
                                        onChange={(e) => setFormData({ ...formData, groupCode: e.target.value })}
                                        required
                                        className="h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="groupName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Группа
                                    </Label>
                                    <Select
                                        value={formData.groupName}
                                        onValueChange={(value) => setFormData({ ...formData, groupName: value ?? '' })}
                                    >
                                        <SelectTrigger className="!h-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 px-4 text-base w-full">
                                            <SelectValue placeholder="Выберите группу" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="group1">Группа 1</SelectItem>
                                            <SelectItem value="group2">Группа 2</SelectItem>
                                            <SelectItem value="group3">Группа 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full h-12 text-base gap-2 mt-4 rounded-lg">
                                Зарегистрироваться
                                <ArrowRight className="w-4 h-4" />
                            </Button>

                            <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                                Уже есть аккаунт?{' '}
                                <Link href="/login" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                    Войти
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Правая часть - Картинка на всю высоту */}
                <div className="hidden lg:block relative w-1/2 h-screen overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&crop=center"
                        alt="Students studying together"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Свечение от картинки */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(99,102,241,0.15)]" />
                    <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/40 dark:from-black/40 to-transparent" />
                </div>
            </div>
        </main>
    )
}