"use client"

import * as motion from "motion/react-client"
import {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Accordion,
} from "@/components/ui/accordion"

type FAQItem = {
    value: string
    question: string
    answer: string
}

type Props = {
    faqs: FAQItem[]
}

const itemVariant = {
    hidden: { opacity: 0, y: 150 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
}

export default function AnimatedFAQAccordion({ faqs }: Props) {
    return (
        <Accordion type="single" collapsible className="max-w-lg space-y-3">
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq.value}
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    custom={index}
                >
                    <AccordionItem value={faq.value} className="rounded-xl border px-4 bg-background">
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                </motion.div>
            ))}
        </Accordion>
    )
}
