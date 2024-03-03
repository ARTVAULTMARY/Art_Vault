import WhoItsFor from "./WhoItsFor";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ImageCarousel from "./ImageCarousel";
import ShareYourCreativity from "./ShareYourCreativity";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center h-fit min-w-[1268px] w-full 2xl:w-5/6 bg-white">
            <ImageCarousel />
            <WhoItsFor />
            <HowItWorks />
            <AboutUs />
            <ShareYourCreativity />
        </div>
    )
}
