import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                 WELCOME TO CZAR CAT
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                CZAR CAT is more than just a meme token; it’s a symbol of boldness, 
                agility, and community. Join the CZAR CAT movement and invest in a future where strength 
                meets fun in the crypto.
                </span>
                <div className="row gap-4">
                    <Button>BUY NOW</Button>
                    <Button outline={true}>
                        <a href="https://t.me/czarcatsol">

                        Join Telegram
                        </a>
                        </Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/czar-banner3.jpg"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
