import { GraduationCap, Mail } from 'lucide-react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <GraduationCap className="w-8 h-8 text-blue-500" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Study Space N
                            </span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Умное пространство для твоего обучения
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Навигация</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/" className="hover:text-blue-500 transition-colors">Главная</Link></li>
                            <li><Link href="/login" className="hover:text-blue-500 transition-colors">Вход</Link></li>
                            <li><Link href="/register" className="hover:text-blue-500 transition-colors">Регистрация</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Контакты</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>support@studyspace.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                                <FaGithub className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                                <FaTwitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Study Space N. Все права защищены.
                </div>
            </div>
        </footer>
    )
}