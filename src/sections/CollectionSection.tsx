import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Activity" subHeading="Check us out" />
                <span className="text-app_gray/80">
                    Check how we are chnging the ecosystem with our fearless, humorous naturre
                </span>
                <Button outline>View on DexScreener</Button>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
               
                    <div className="min-w-[200px] rounded-md" >
                        <img
                            className="object-cover"
                            src={`/assets/dex-screener.jpeg`}
                            alt="avatar"
                        />
                    </div>
           
            </div>
        </section>
    );
}
