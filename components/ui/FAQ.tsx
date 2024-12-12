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
            question: "What is an Instagram Story viewer?",
            answer: "An Instagram Story viewer is a tool that allows you to view Instagram Stories anonymously, without the story owner knowing you've seen their content."
        },
        {
            question: "Is it legal to use an Instagram Story viewer?",
            answer: "While it's not illegal to view public content, using third-party tools to access Instagram content may violate Instagram's terms of service. Always use such tools responsibly and at your own risk."
        },
        {
            question: "Can I download Stories using this viewer?",
            answer: "Our Instagram Story viewer is designed for viewing only. Downloading or saving others' content without permission may infringe on copyright laws and Instagram's terms of service."
        },
        {
            question: "Do I need an Instagram account to use this viewer?",
            answer: "No, you typically don't need an Instagram account to use most Instagram Story viewers. However, you'll need to know the username of the account whose stories you want to view."
        },
        {
            question: "Will the story owner know I viewed their story?",
            answer: "No, when using our Instagram Story viewer, the story owner will not be notified that you've viewed their story. Your viewing remains anonymous."
        },
        {
            question: "How recent are the stories I can view?",
            answer: "Our viewer typically shows stories posted within the last 24 hours, which is the standard lifespan of an Instagram Story."
        }
    ]

    return (
        <div className="w-full  mx-auto p-8 bg-[#0a061d]/60 backdrop-blur-sm rounded-xl border border-gray-800">
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

