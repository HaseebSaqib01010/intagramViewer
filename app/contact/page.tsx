"use client";
import React from 'react'
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { Flex} from '@mantine/core';
import AppWrapper from '@/components/AppWrapper';
import MagicButton from '@/components/MagicButton';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { RiSendPlaneLine } from "react-icons/ri";
import Footer from '@/components/Footer';
import { navItems } from "@/data";
import InstagramStoryViewer from "@/components/InstagramStoryViewer";
import ContentSection from "@/components/ui/ContentSection";
import Hero from '@/components/Hero';

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
    const formSec: React.CSSProperties ={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',  
    }
    const formStyle: React.CSSProperties = {
        width: '50%',
        display: 'flex',
        // border: '2px solid white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const labelStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '16px',
        marginBottom: '5px',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'white !important' ,
        borderRadius: '5px',
        border : 'solid white 2px',
        outline: 'none',
    };

    return (
        <AppWrapper>

            <FloatingNav navItems={navItems} className="max-w-full mx-auto" />
            <Hero />
            <InstagramStoryViewer />
            <div style={formSec}>
                <h1 className="heading mb-10" style={{ color: "white", marginTop: "3rem" , width:"100"}}>
                    <span className="text-purple">Contact </span>
                    Us
                </h1>
                <ContentSection
                    title='Get in Touch with ' titleHighlight='Anonysview'
                    content=" Have questions, feedback, or need assistance? Reach out to us through our Contact Us page. Fill out the form to connect with our team, and we’ll respond promptly to address your inquiries. We’re here to help!"
                />
                <form onSubmit={form.onSubmit(handleSendEmail)} style={
                formStyle
                }>


                    <div  style={{ display: "flex", flexDirection: "column", gap: "15px",width:"100%" }}>
                        <label htmlFor="" style ={labelStyle}>Name</label>
                        <input
                        className="bg-white"
                            placeholder="Your Name"
                            {...form.getInputProps("name")}
                            style={{
                                width: '100%',
                                height: '60px',
                                padding: '10px',
                                fontSize: '16px',
                                color: 'white',
                                backgroundColor: 'white', 
                                borderRadius: '5px',
                                border: '2px solid white',
                                outline: 'none',

                            }}
                        />
                        <label htmlFor="" style={labelStyle}>Email</label>
                        <input
                            placeholder="Your Email"
                            {...form.getInputProps("email")}
                            style={{
                                width: '100%',
                                height: '60px',
                                padding: '10px',
                                fontSize: '16px',
                                color: 'white',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                border: '2px solid white',
                                outline: 'none',

                            }}
                        />
                        <label htmlFor="" style={labelStyle}>Message</label>
                        <textarea
                            placeholder="Your Message"
                            {...form.getInputProps("message")}
                            style={{
                                width: '100%',
                                height: '200px',
                                padding: '10px',
                                fontSize: '16px',
                                color: 'white',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                border: '2px solid white',
                                outline: 'none',

                            }}
                        />


                 </div>

                  <Flex align="center" justify="space-between" mt="xl" style={
                        {
                            width: "100%"
                        }}>
                        <MagicButton title='Send Email' fullWidth icon={<RiSendPlaneLine size={18} />} position="right" type='submit' />
                    </Flex>
                </form>
            </div>

            <Footer />
        </AppWrapper>

    )
}

export default Contact








import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
        </div>
    )
}

export default Contact
