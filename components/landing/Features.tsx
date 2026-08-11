import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Calendar, BookOpen, Users, Award, Bell } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        icon: MessageSquare,
        title: 'Чаты по предметам',
        description: 'Общайся с группой в общем чате или по конкретным дисциплинам',
        image: '/assets/chats.jpg'
    },
    {
        icon: Calendar,
        title: 'Календарь задач',
        description: 'Все дедлайны и задачи в удобном календаре с приоритетами',
        image: '/assets/calendar.jpg'
    },
    {
        icon: BookOpen,
        title: 'Материалы и журнал',
        description: 'Доступ к учебным материалам и электронный журнал посещаемости',
        image: '/assets/materials.jpg'
    },
    {
        icon: Users,
        title: 'Роли и привилегии',
        description: 'Старосты, админы и владельцы групп с разными правами',
        image: '/assets/roles.jpg'
    },
    {
        icon: Award,
        title: 'Игровой процесс',
        description: 'Получай звезды за успехи и смотри рейтинг в группе',
        image: '/assets/gameplay.jpg'
    },
    {
        icon: Bell,
        title: 'Умные уведомления',
        description: 'Важная информация всегда будет у тебя в Telegram или почте',
        image: '/assets/notification.jpg'
    }
]

export function Features() {
    return (
        <section className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Всё, что нужно для учебы
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Study Space N объединяет все инструменты для эффективного обучения в одном месте
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Создаем виртуальный массив на 12 элементов на основе 6 */}
                {Array.from({ length: 12 }).map((_, idx) => {
                    // Берем элемент из исходного массива по остатку от деления (0-5, затем снова 0-5)
                    const feature = features[idx % features.length];
                    const Icon = feature.icon;

                    // Вычисляем строку (0 или 1) и колонку (от 0 до 5) для 6-колоночной сетки
                    const row = Math.floor(idx / 6);
                    const col = idx % 6;

                    // Шахматная проверка: сумма строки и колонки четная — карточка, нечетная — картинка
                    const isCard = (row + col) % 2 === 0;

                    return isCard ? (
                        /* 1, 3, 5 в первом ряду и 2, 4, 6 во втором ряду станут КАРТОЧКАМИ */
                        <Card key={idx} className="hover:shadow-lg transition-shadow h-full flex flex-col justify-center">
                            <CardContent className="py-3">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ) : (
                        /* 2, 4, 6 в первом ряду и 1, 3, 5 во втором ряду станут ИЗОБРАЖЕНИЯМИ */
                        <div key={idx} className="overflow-hidden rounded-xl h-full min-h-[200px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    );
                })}
            </div>


        </section>
    )
}