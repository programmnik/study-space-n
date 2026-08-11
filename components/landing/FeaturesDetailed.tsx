import {
    BookOpen,
    CalendarCheck,
    ListChecks,
    UsersRound,
    Sparkles,
    Bell
} from "lucide-react";

export function FeaturesDetailed() {
    const features = [
        {
            icon: BookOpen,
            title: "Материалы",
            description: "Все учебные материалы хранятся в одном месте. Больше не нужно искать лекции в разных папках или переписываться с одногруппниками. Владелец группы загружает всё необходимое, а староста следит за актуальностью.",
        },
        {
            icon: CalendarCheck,
            title: "Журнал посещаемости",
            description: "Участники отмечаются на занятиях, староста подтверждает или отклоняет отметки. Можно редактировать текущие дни. В конце месяца староста закрывает период — и данные сохраняются. Это прозрачно и исключает споры.",
        },
        {
            icon: ListChecks,
            title: "Задачи и дедлайны",
            description: "Владелец группы выставляет задания с дедлайнами. Участники видят их в календаре и на главной. Можно ставить приоритеты — важное будет вверху. А если у тебя индивидуальное задание — добавь его сам.",
        },
        {
            icon: UsersRound,
            title: "Роли и управление",
            description: "Владелец создаёт группу и даёт доступ по коду. Он назначает старост и админов, управляет участниками. У каждого своя зона ответственности, но финальное слово всегда за владельцем.",
        },
        {
            icon: Sparkles,
            title: "Игровой процесс",
            description: "За выполненные задачи, сданные лабы и активность участник получает звёзды. Чем больше звёзд — тем выше место в рейтинге группы. Это добавляет азарт и мотивацию не отставать.",
        },
        {
            icon: Bell,
            title: "Умные уведомления",
            description: "Важные объявления приходят в Telegram или на почту. Срочное — сразу, обычное — в общем доступе. Информация не теряется и всегда под рукой.",
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Фон с сеткой */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
                {/* Сетка как в Prism */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="1" fill="rgba(99, 102, 241, 0.1)" />
                        </pattern>
                        <pattern id="dots" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1.5" fill="rgba(139, 92, 246, 0.08)" />
                            <circle cx="0" cy="0" r="1.5" fill="rgba(139, 92, 246, 0.08)" />
                            <circle cx="80" cy="0" r="1.5" fill="rgba(139, 92, 246, 0.08)" />
                            <circle cx="0" cy="80" r="1.5" fill="rgba(139, 92, 246, 0.08)" />
                            <circle cx="80" cy="80" r="1.5" fill="rgba(139, 92, 246, 0.08)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>

                {/* Пульсирующие градиенты */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>

            {/* Декоративные SVG по бокам */}
            {/* Левая сторона - 3D фигуры */}
            <div className="absolute left-0 top-1/4 hidden xl:block opacity-20">
                <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                    <circle cx="60" cy="100" r="50" stroke="#6366F1" strokeWidth="1" opacity="0.3" />
                    <circle cx="60" cy="100" r="35" stroke="#8B5CF6" strokeWidth="1" opacity="0.2" />
                    <circle cx="60" cy="100" r="20" stroke="#A78BFA" strokeWidth="1" opacity="0.15" />
                    <rect x="45" y="85" width="30" height="30" stroke="#6366F1" strokeWidth="1" opacity="0.2" transform="rotate(45 60 100)" />
                </svg>
            </div>

            {/* Правая сторона - 3D фигуры */}
            <div className="absolute right-0 top-1/3 hidden xl:block opacity-20">
                <svg width="140" height="220" viewBox="0 0 140 220" fill="none">
                    <rect x="20" y="20" width="100" height="100" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" transform="rotate(12 70 70)" />
                    <rect x="35" y="35" width="70" height="70" stroke="#6366F1" strokeWidth="1" opacity="0.2" transform="rotate(-8 70 70)" />
                    <circle cx="70" cy="70" r="30" stroke="#A78BFA" strokeWidth="1" opacity="0.15" />
                    <path d="M70 40 L90 70 L70 100 L50 70 Z" stroke="#818CF8" strokeWidth="1" opacity="0.2" />
                </svg>
            </div>

            {/* Левая сторона ниже - другая фигура */}
            <div className="absolute left-8 bottom-1/4 hidden xl:block opacity-15">
                <svg width="100" height="150" viewBox="0 0 100 150" fill="none">
                    <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="#A78BFA" strokeWidth="1" />
                    <path d="M50 50 L70 70 L50 90 L30 70 Z" stroke="#818CF8" strokeWidth="1" opacity="0.5" />
                    <circle cx="50" cy="50" r="15" stroke="#6366F1" strokeWidth="1" opacity="0.3" />
                </svg>
            </div>

            {/* Правая сторона ниже */}
            <div className="absolute right-8 bottom-1/3 hidden xl:block opacity-15">
                <svg width="130" height="160" viewBox="0 0 130 160" fill="none">
                    <path d="M65 30 L95 60 L65 90 L35 60 Z" stroke="#8B5CF6" strokeWidth="1" />
                    <path d="M65 50 L85 70 L65 90 L45 70 Z" stroke="#6366F1" strokeWidth="1" opacity="0.5" />
                    <rect x="55" y="40" width="20" height="20" stroke="#A78BFA" strokeWidth="1" opacity="0.3" transform="rotate(45 65 50)" />
                </svg>
            </div>

            {/* Контент */}
            <div className="container relative mx-auto px-4 max-w-2xl z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Как это работает
                </h2>

                <div className="relative">
                    {/* Вертикальная линия времени */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-30" />

                    <div className="space-y-16">
                        {features.map((feature, index) => (
                            <div key={index} className="relative flex items-start gap-6">
                                {/* Точка на линии времени */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-lg shadow-blue-500/20 border border-white/20 dark:border-gray-700/30">
                                        <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>

                                {/* Контент */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}