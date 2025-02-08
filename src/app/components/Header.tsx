type Props = {};
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Header = (props: Props) => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <Image
                alt="profile image"
                src={assets.profile_img}
                className="rounded-full w-32"
            />
            <h3 className="flex items-end gap-2 md:text-2xl mb-3 font-Ovo">
                Hi! I'm Takara Truong{" "}
                <Image alt="hand wave" className="w-6" src={assets.hand_icon} />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Full stack developer based in Seattle,
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo ">
                I am a full stack developer from Seatte Washington. Currently
                pursuing a masters in computer science
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link
                    href="#contact"
                    className="px-10 py-3 border rounded-full bg-black flex items-center gap-2 text-white"
                >
                    Contact Me
                    <Image
                        src={assets.right_arrow_white}
                        alt="arrow"
                        className="w-4"
                    />
                </Link>

                <Link
                    href="/sample-resume.pdf"
                    download={true}
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                >
                    My Resume
                    <Image
                        src={assets.download_icon}
                        alt="arrow"
                        className="w-4"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Header;
