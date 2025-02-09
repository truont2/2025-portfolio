import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
    const [scroll, setScroll] = useState<boolean>(false);
    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image
                    alt="navbar background"
                    src={assets.header_bg_color}
                    className="w-full"
                />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                    scroll
                        ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white"
                        : ""
                }`}
            >
                <Link href="#top">
                    {/* <Image
                        alt=""
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        className="w-28"
                    /> */}
                    <h1 className="text-2xl uppercase ">Takara Truong</h1>
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        scroll
                            ? ""
                            : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
                    } `}
                >
                    <li>
                        <Link href="#top" className="font-Ovo">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="font-Ovo">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="font-Ovo">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#work" className="font-Ovo">
                            My Work
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="font-Ovo">
                            Contact Me
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode((prev) => !prev)}>
                        <Image
                            alt="dark mode button"
                            src={
                                isDarkMode ? assets.sun_icon : assets.moon_icon
                            }
                            className="w-6"
                        />
                    </button>
                    <Link
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
                    >
                        Contact{" "}
                        <Image
                            alt=""
                            src={
                                isDarkMode
                                    ? assets.arrow_icon_dark
                                    : assets.arrow_icon
                            }
                            className="w-3"
                        />
                    </Link>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            alt="dark mode button"
                            src={
                                isDarkMode
                                    ? assets.menu_white
                                    : assets.menu_black
                            }
                            className="w-6"
                        />
                    </button>
                </div>

                {/* mobile menu bar */}

                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white "
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={
                                isDarkMode
                                    ? assets.close_white
                                    : assets.close_black
                            }
                            alt="close button"
                            className="w-5 curser-pointer"
                        />
                    </div>
                    <li>
                        <Link
                            href="#top"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#services"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#work"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            My Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            className="font-Ovo"
                            onClick={closeMenu}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
