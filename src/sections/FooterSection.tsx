import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin, FaTelegram } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks } from "../constants";

const socialIcons = [{item :AiOutlineTwitter, link: 'https://x.com/czarcatsol'}, {item: RiDiscordFill, link: '#'}, {item: FaTelegram, link: "https://t.me/czarcatsol"}];

const links = [
    [ "About us", "Our team", "Team Details"],
    ["Company", "Wallet", "Create Page", ],
    ["Services", "Contact Us"],
];

export default function FooterSection() {
    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">CZAR CAT.</h3>
                    <div className="row gap-4">
                        {socialIcons.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                className="hover:text-white/50 text-white"
                            >
                                <item.item size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-app_gray text-sm">
                    All rights reserved &#169; <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="row md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i]}`}
                                        className={`font-nominee text-app_gray text-xs hover:text-white`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}
