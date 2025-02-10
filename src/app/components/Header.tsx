import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
    isDarkMode: boolean;
};

const Header = (props: Props) => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative w-60 h-72"
            >
                <Image
                    alt="Profile Image"
                    src="/profile-img.jpg"
                    className="rounded-xl object-cover object-center"
                    fill
                />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                }}
                className="flex items-end gap-2 md:text-2xl mb-3 font-Ovo"
            >
                Hi! I'm Takara Truong{" "}
                <Image
                    alt="Hand Wave"
                    className="w-6 h-6"
                    src="/hand-icon.png"
                    width={24}
                    height={24}
                />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                className="text-3xl sm:text-6xl lg:text-[60px] font-Ovo"
            >
                Full Stack Software Engineer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 0.6,
                }}
                className="max-w-2xl mx-auto font-Ovo"
            >
                I am a full stack software engineer from Seattle, Washington.
                Currently pursuing a Master's in Computer Science at
                Northeastern University.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="#contactme">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="px-10 py-3 border rounded-full bg-black flex items-center gap-2 text-white dark:bg-transparent"
                    >
                        Contact Me
                        <Image
                            src="/right-arrow-white.png"
                            alt="Right Arrow"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </motion.div>
                </Link>

                <Link href="/Takara_Truong_Resume.pdf" download>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
                    >
                        My Resume
                        <Image
                            src="/download-icon.png"
                            alt="Download Icon"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
