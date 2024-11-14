import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Wide range of platforms",
    "World class artists",
    "Any type of assets",
    "Fast payments",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Introducing CZAR CAT"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                CZAR CAT—a meme token with a mission as bold and fearless as its namesake. 
Czar, the unshakable leader of the U.S. border, was appointed by none other than Donald Trump. 
Known for his unwavering strength and sharp focus, Czar stands as a protector, a guardian of 
borders, and a symbol of leadership
                </span>
                {/* <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div> */}
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/czar-banner2.jpg"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
