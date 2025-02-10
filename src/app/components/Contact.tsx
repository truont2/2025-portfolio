"use client";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";

type Props = {
    isDarkMode: boolean;
};

const Contact = ({ isDarkMode }: Props) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isPending, startTransition] = useTransition();
    const form = useRef<HTMLFormElement | null>(null);

    // Visibility tracking for animation
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        if (!form.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY!
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current?.reset();
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contactme"
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                Connect with me
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                Get in touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                I'd love to hear from you! If you have any questions, comments,
                or feedback, please use the form below.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="max-w-2xl mx-auto"
                onSubmit={sendEmail}
                ref={form}
            >
                <div className="mt-10 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <label htmlFor="fullName" className="font-medium">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName" // Match state key
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500 dark:bg-darkHover/30 dark:border-white/90  dark:text-white"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <label htmlFor="email" className="font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email" // Match state key
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500 dark:bg-darkHover/30 dark:border-white/90  dark:text-white"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                    >
                        <label htmlFor="message" className="font-medium">
                            Message
                        </label>
                        <textarea
                            rows={6}
                            id="message"
                            name="message" // Match state key
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500 dark:bg-darkHover/30 dark:border-white/90  dark:text-white"
                        ></textarea>
                    </motion.div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    type="submit"
                    className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 active:bg-black dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
                >
                    {isPending ? <>Sending ...</> : "Submit now"}
                    <Image
                        alt="right arrow"
                        src="/right-arrow-white.png"
                        className="w-4"
                        width={16}
                        height={16}
                    />
                </motion.button>
                <div className="text-center mt-5 ">
                    {success && (
                        <span className="text-green-600 font-semibold">
                            Your message has been sent successfully!
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold">
                            Something went wrong!
                        </span>
                    )}
                </div>
            </motion.form>
        </motion.div>
    );
};

export default Contact;
