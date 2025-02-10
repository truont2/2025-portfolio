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
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image
                    alt="navbar background"
                    src="/header-bg-color.png"
                    width={1920}
                    height={1080}
                    className="w-full"
                    priority
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
                    <h1 className="text-2xl uppercase">Takara Truong</h1>
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        scroll
                            ? ""
                            : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
                    } `}
                >
                    {[
                        "Home",
                        "About Me",
                        "Services",
                        "My Work",
                        "Contact Me",
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                className="font-Ovo"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode((prev) => !prev)}>
                        <Image
                            alt="dark mode button"
                            src={
                                isDarkMode ? "/sun-icon.png" : "/moon-icon.png"
                            }
                            width={24}
                            height={24}
                            className="w-6"
                        />
                    </button>
                    <Link
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
                    >
                        Contact{" "}
                        <Image
                            alt="arrow icon"
                            src={
                                isDarkMode
                                    ? "/arrow-icon.png"
                                    : "/arrow-icon-dark.png"
                            }
                            width={16}
                            height={16}
                            className="w-3"
                        />
                    </Link>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            alt="menu button"
                            src={
                                isDarkMode
                                    ? "/menu-white.png"
                                    : "/menu-black.png"
                            }
                            width={24}
                            height={24}
                            className="w-6"
                        />
                    </button>
                </div>

                {/* mobile menu bar */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={
                                isDarkMode
                                    ? "/close-white.png"
                                    : "/close-black.png"
                            }
                            alt="close button"
                            width={20}
                            height={20}
                            className="w-5 cursor-pointer"
                        />
                    </div>
                    {[
                        "Home",
                        "About Me",
                        "Services",
                        "My Work",
                        "Contact Me",
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                className="font-Ovo"
                                onClick={closeMenu}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
