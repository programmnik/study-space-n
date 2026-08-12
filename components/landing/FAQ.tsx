import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
    {
        question: 'Зачем нужна почта или Telegram?',
        answer: 'На почту или в Telegram приходят важные уведомления: изменения в расписании, срочные объявления от старосты, напоминания о дедлайнах, подтверждение отметок в журнале. Вы сами выбираете, куда получать уведомления. Это удобно и не даёт пропустить важное.'
    },
    {
        question: 'Зачем регистрироваться, если я просто хочу посмотреть?',
        answer: 'Без регистрации вы не попадёте в группу. Study Space N — это закрытая платформа для учебных групп. Только зарегистрированные участники видят задачи, журнал, материалы и чаты. Регистрация нужна, чтобы привязать вас к вашей группе и защитить данные от посторонних.'
    },
    {
        question: 'Безопасно ли хранить мои данные здесь?',
        answer: 'Да. Мы не передаём ваши данные третьим лицам. Доступ к группе защищён уникальным кодом. Владелец группы сам контролирует список участников: может добавить, исключить или изменить роль. Всё остаётся внутри вашей группы.'
    },
    {
        question: 'Кто видит мои оценки и прогресс?',
        answer: 'Только участники вашей группы. ФИО, никнейм, выполненные задачи и звёзды видны всем членам группы — как в реальной группе в университете. Это нужно для совместной работы и здоровой конкуренции. Посторонние не имеют доступа.'
    },
    {
        question: 'Что будет, если я забуду пароль или код группы?',
        answer: 'Для входа используется код группы, который вам даёт владелец. Если вы его потеряли — обратитесь к владельцу, он сможет сгенерировать новый код. Пароль восстанавливается через почту или Telegram, которые вы указали при регистрации.'
    }
]

export function FAQ() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Частые вопросы
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
                    Всё, что вы хотели знать о Study Space N
                </p>

                <Accordion className="w-full">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}