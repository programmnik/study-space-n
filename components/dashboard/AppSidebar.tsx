'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from '@/components/ui/sidebar'
import {
    Home,
    MessageSquare,
    Calendar,
    User,
    BookOpen,
    Bell,
    Settings,
    LogOut,
    GraduationCap,
    Users,
    ListChecks,
} from 'lucide-react'

const menuItems = [
    { icon: Home, label: 'Главная', href: '/dashboard' },
    { icon: Users, label: 'Группа', href: '/group' },
    { icon: MessageSquare, label: 'Чаты', href: '/chats' },
    { icon: Calendar, label: 'Календарь', href: '/calendar' },
    { icon: ListChecks, label: 'Задачи', href: '/tasks' },
    { icon: BookOpen, label: 'Материалы', href: '/materials' },
    { icon: Bell, label: 'Уведомления', href: '/notifications' },
]

const bottomMenuItems = [
    { icon: User, label: 'Профиль', href: '/profile' },
    { icon: Settings, label: 'Настройки', href: '/settings' },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar className="border-r border-gray-200 dark:border-gray-800">
            <SidebarHeader className="border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 px-2 py-3">
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Study Space N
                    </span>
                </div>
            </SidebarHeader>

            <SidebarContent className="py-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
                        Основное
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            className="relative transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 data-[active=true]:bg-blue-50 dark:data-[active=true]:bg-blue-950/30 data-[active=true]:text-blue-600 dark:data-[active=true]:text-blue-400"
                                        >
                                            <Link href={item.href} className="flex items-center gap-3 w-full">
                                                <Icon className="w-5 h-5" />
                                                <span className="text-sm font-medium">{item.label}</span>
                                            </Link>
                                            {isActive && (
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                                            )}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Разделитель */}
                <div className="my-4 mx-3 border-t border-gray-200 dark:border-gray-800" />

                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
                        Аккаунт
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {bottomMenuItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            className="relative transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 data-[active=true]:bg-blue-50 dark:data-[active=true]:bg-blue-950/30 data-[active=true]:text-blue-600 dark:data-[active=true]:text-blue-400"
                                        >
                                            <Link href={item.href} className="flex items-center gap-3 w-full">
                                                <Icon className="w-5 h-5" />
                                                <span className="text-sm font-medium">{item.label}</span>
                                            </Link>
                                            {isActive && (
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                                            )}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 p-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200">
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm font-medium">Выйти</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}