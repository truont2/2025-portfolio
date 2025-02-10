import Image from "next/image";

type Props = {
    isDarkMode: boolean;
};

const Header = (props: Props) => {
    return (
        <div>
            <Image
                alt="profile image"
                src="/work-1.png"
                className="rounded-full w-32"
                width={100}
                height={100}
            />
        </div>
        // <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        //     <motion.div
        //         initial={{ scale: 0 }}
        //         whileInView={{ scale: 1 }}
        //         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        //     >
        //         <Image
        //             alt="profile image"
        //             src="/profile_img.jpg"
        //             className="rounded-full w-32"
        //             fill
        //         />
        //     </motion.div>
        //     <motion.h3
        //         initial={{ y: -20, opacity: 0 }}
        //         whileInView={{ y: 0, opacity: 1 }}
        //         transition={{
        //             duration: 0.6,
        //             delay: 0.3,
        //         }}
        //         className="flex items-end gap-2 md:text-2xl mb-3 font-Ovo"
        //     >
        //         Hi! I'm Takara Truong{" "}
        //         <Image
        //             alt="hand wave"
        //             className="w-6"
        //             src="/hand_icon.png"
        //             width={24}
        //             height={24}
        //         />
        //     </motion.h3>
        //     <motion.h1
        //         initial={{ y: -30, opacity: 0 }}
        //         whileInView={{ y: 0, opacity: 1 }}
        //         transition={{
        //             duration: 0.8,
        //             delay: 0.5,
        //         }}
        //         className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        //     >
        //         Full Stack Developer based in Seattle,
        //     </motion.h1>
        //     <motion.p
        //         initial={{ opacity: 0 }}
        //         whileInView={{ opacity: 1 }}
        //         transition={{
        //             duration: 0.7,
        //             delay: 0.6,
        //         }}
        //         className="max-w-2xl mx-auto font-Ovo "
        //     >
        //         I am a full stack developer from Seattle, Washington. Currently
        //         pursuing a Master's in Computer Science.
        //     </motion.p>
        //     <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        //         <Link href="#contact">
        //             <motion.div
        //                 initial={{ y: 30, opacity: 0 }}
        //                 whileInView={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.6, delay: 1 }}
        //                 className="px-10 py-3 border rounded-full bg-black flex items-center gap-2 text-white dark:bg-transparent"
        //             >
        //                 Contact Me
        //                 <Image
        //                     src="/right_arrow_white.png"
        //                     alt="arrow"
        //                     className="w-4"
        //                     fill
        //                 />
        //             </motion.div>
        //         </Link>

        //         <Link href="/Takara_Truong_Resume.pdf" download>
        //             <motion.div
        //                 initial={{ y: 30, opacity: 0 }}
        //                 whileInView={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.6, delay: 1.2 }}
        //                 className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        //             >
        //                 My Resume
        //                 <Image
        //                     src="/download_icon.png"
        //                     alt="arrow"
        //                     className="w-4"
        //                     width={16}
        //                     height={16}
        //                 />
        //             </motion.div>
        //         </Link>
        //     </div>
        // </div>
    );
};

export default Header;
