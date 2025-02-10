import { workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    isDarkMode: boolean;
};

const Portfolio = ({ isDarkMode }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="mywork"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                My PortFolio
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My Latest Work
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                Welcome to my web development portfolio! Explore a collection of
                projects showcasing my expertise.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-auto my-10 gap-5 dark:text-black"
            >
                {workData.map((project, index) => (
                    <Link
                        href={project.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group  ${
                                isDarkMode
                                    ? "border-none"
                                    : "border-[0.5px] border-gray-400"
                            }`}
                            style={{
                                backgroundImage: `url(${project.bgImage})`,
                            }}
                        >
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        {project.description}
                                    </p>
                                </div>
                                {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                    <Image
                                        alt="icon"
                                        src={assets.send_icon}
                                        className="w-5"
                                    />
                                </div> */}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
            <div>
                <Link href="https://github.com/truont2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
                    >
                        {" "}
                        Show more
                        <Image
                            alt="arrow"
                            src={
                                isDarkMode
                                    ? "/right-arrow-white.png"
                                    : "/right-arrow.png"
                            }
                            className="w-4"
                            width={16}
                            height={16}
                        />
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Portfolio;
