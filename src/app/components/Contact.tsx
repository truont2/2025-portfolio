"use client";
import { assets } from "@/assets/assets";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";

const Contact: React.FC = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isPending, startTransition] = useTransition();
    const form = useRef<HTMLFormElement | null>(null);

    // Visibility tracking for animation
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, {
        margin: "-100px",
    });

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

        console.log(formData);

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
            ref={sectionRef}
            className="h-full"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
        >
            <div
                id="contact"
                className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
            >
                <h4 className="text-center mb-2 text-lg font-Ovo">
                    Connect with me
                </h4>
                <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                    I'd love to hear from you! If you have any questions,
                    comments, or feedback, please use the form below.
                </p>

                <form
                    className="max-w-2xl mx-auto"
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <div className="mt-10 mb-8">
                        <div>
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
                                className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
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
                                className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
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
                                className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 active:bg-black"
                    >
                        {isPending ? <>Sending ...</> : "Submit now"}
                        <Image
                            alt="right arrow"
                            src={assets.right_arrow_white}
                            className="w-4"
                        />
                    </button>
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
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
