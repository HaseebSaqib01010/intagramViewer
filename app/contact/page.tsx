"use client";
import React from 'react'
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { Flex, Textarea, TextInput } from '@mantine/core';
import AppWrapper from '@/components/AppWrapper';
import MagicButton from '@/components/MagicButton';
import { RiSendPlaneLine } from "react-icons/ri";


const formSchema = z.object({
    email: z
        .string()
        .trim().email({ message: "Must be a valid email" }),
    name: z.string().trim().min(2, { message: "Name must be at least 2 characters long" }),
    message: z.string().trim().min(10, { message: "Message must be at least 10 characters long" }),
});

const Contact = () => {

    const handleSendEmail = async () => {
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: form.values.email,
                    to: "farooq.rohaan@gmail.com",
                    name: form.values.name,
                    subject: `Contact Form - Message from ${form.values.name}`,
                    message: form.values.message,
                }),
            });

            if (response.ok) {
                alert("Email sent successfully!");
            } else {
                console.error('Error sending email');
            }
            form.reset();
        } catch (error) {
            console.error(error);
        }
    };

    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            message: "",
        },
        validate: (values) => zodResolver(formSchema)(values),
    });
    return (
        <AppWrapper>
            <h1 className="heading mb-10" style={{ color: "white" }}>
                <span className="text-purple">Contact </span>
                Us
            </h1>
            <form onSubmit={form.onSubmit(handleSendEmail)}>


                <div className='w-96' style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

                    <TextInput
                        label="Name"
                        placeholder="Your Name"
                        {...form.getInputProps("name")}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your Name"
                        {...form.getInputProps("email")}
                    />
                    <Textarea
                        label="Message"
                        placeholder="Your Message"
                        {...form.getInputProps("message")}
                    />


                </div>

                <Flex align="center" justify="space-between" mt="xl">
                    <MagicButton title='Send Email' fullWidth icon={<RiSendPlaneLine size={18} />} position="right" type='submit' />
                </Flex>
            </form>


        </AppWrapper>
    )
}

export default Contact








