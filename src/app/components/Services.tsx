"use client";

import { serviceData } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Scene from "./Scene";

type Props = {
    isDarkMode: boolean;
};

const Services = ({ isDarkMode }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-200px" });

    return (
        <div
            ref={ref}
            id="services"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                What I Offer
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My Services
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                I am a Full Stack Software Engineer from Seattle, Washington,
                with experience building web and mobile applications in
                industries like education and healthcare. I have worked on
                improving accessibility, redesigning user experiences, and
                migrating databases to optimize performance and scalability.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex overflow-hidden flex-col md:flex-row"
            >
                {/* Left Section */}
                <div className="flex flex-col justify-center px-2 md:px-12 md:w-1/2 mt-2">
                    {/* Service List */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col gap-4 w-full my-1 md:my-5"
                    >
                        {serviceData.map((service, idx) => (
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                key={idx}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighHover hover:-translate-y-1 ease-in-out duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex items-center gap-4"
                            >
                                {/* <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                /> */}
                                <div>
                                    <h2 className="text-lg font-medium">
                                        {service.title}
                                    </h2>
                                    <p className="text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex justify-center items-center w-2/3">
                    <Scene />
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
