import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
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
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image
                    alt="navbar background"
                    src={assets.header_bg_color}
                    className="w-full"
                />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                    scroll
                        ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
                        : ""
                }`}
            >
                <Link href="#top">
                    <Image alt="" src={assets.logo} className="w-28" />
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        scroll ? "" : "bg-white shadow-sm bg-opacity-50"
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
                    <button>
                        <Image
                            alt="dark mode button"
                            src={assets.moon_icon}
                            className="w-6"
                        />
                    </button>
                    <Link
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
                    >
                        Contact{" "}
                        <Image alt="" src={assets.arrow_icon} className="w-3" />
                    </Link>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            alt="dark mode button"
                            src={assets.menu_black}
                            className="w-6"
                        />
                    </button>
                </div>

                {/* mobile menu bar */}

                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={assets.close_black}
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
