import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

type Props = {
    isDarkMode: boolean;
};

const Footer = ({ isDarkMode }: Props) => {
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* <Image
                    src={isDarkMode ? assets.logo_dark : assets.logo}
                    alt="logo"
                    className="w-36 mx-auto mb-2"
                /> */}
                <h1 className="text-2xl uppercase ">Takara Truong</h1>
                <div className="flex items-center w-max gap-2 mx-auto">
                    <Image
                        src={
                            isDarkMode
                                ? assets.mail_icon_dark
                                : assets.mail_icon
                        }
                        alt="logo"
                        className="w-6"
                    />
                    takaraktruong@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Takara Truong. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <Link target="_blank" href="https://github.com/truont2">
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/takaratruong/"
                        >
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
