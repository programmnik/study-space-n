'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { GraduationCap, MessageSquare, Calendar, BookOpen } from 'lucide-react'

const slides = [
    {
        title: 'Учебные материалы',
        image: '/assets/chats.jpg'
    },
    {
        title: 'Общение',
        image: '/assets/chats.jpg'
    },
    {
        title: 'Календарь',
        image: '/assets/chats.jpg'
    },
    {
        title: 'Журнал',
        image: '/assets/chats.jpg'
    }
]

export function Slider() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    Как это работает
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Все ключевые функции Study Space N
                </p>

                <Carousel className="max-w-7xl mx-auto">
                    <CarouselContent>
                        {slides.map((_, idx) => {
                            return (
                                <CarouselItem key={idx}>
                                    <div key={idx} className="overflow-hidden rounded-xl h-full min-h-[200px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                        <img
                                            src={slides[idx].image}
                                            alt={slides[idx].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}