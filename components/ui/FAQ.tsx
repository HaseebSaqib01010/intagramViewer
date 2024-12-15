import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function InstagramStoryViewerFAQ() {
    const faqs = [
        {
            question: "What is Anonysview?",
            answer: "Anonysview is a free tool for viewing Instagram profiles, stories, reels, and highlights anonymously without logging in or registering ."
        },
        {
            question: "Do I need to pay to use Anonysview?",
            answer: "No, Anonysview is entirely free to use, with no hidden charges."
        },
        {
            question: "Can I download Instagram content?",
            answer: "You can download stories, reels, and posts directly to your device while remaining anonymous."
        },
        {
            question: "Is Anonysview safe?",
            answer: "Absolutely yes. We use advanced encryption to protect your identity and ensure your privacy.."
        },
        {
            question: "How do I get started?",
            answer: "Enter the Instagram username or link into the search bar, select the content you want to view, and start exploring anonymously."
        },
 
    ]

    return (
        <div className="FAQ w-full  mx-auto p-8 bg-[#0a061d]/60 backdrop-blur-sm rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-gray-800 rounded-lg px-4 bg-[#0a061d]/40"
                    >
                        <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

