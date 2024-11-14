import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "CZAR CAT is fearless",
        desc: "A meme token with a mission as bold and fearless as its namesake. Czar, the unshakable leader of the U.S. border, was appointed by none other than Donald Trump.",
    },
    {
        id: 2,
        title: "CZAR CAT is humorous",
        desc: "But behind that tough exterior, Czar knew the value of fun and freedom, the kind of spark that drives innovation. That’s where CZAR CAT comes in",
    },
    {
        id: 3,
        title: "CZAR CAT give financial freedom",
        desc: "With *CZAR CAT*, you’re not just investing in a token; you’re joining a movement of resilience, boldness, and a little bit of fun.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Key Features"
                subHeading="Access The Future"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-w-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
