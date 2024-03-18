import WhoItsFor from "./WhoItsFor";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ImageCarousel from "./ImageCarousel";
import ShareYourCreativity from "./ShareYourCreativity";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center h-fit w-full bg-white">
            <ImageCarousel />
            <WhoItsFor />
            <HowItWorks />
            <AboutUs />
            <ShareYourCreativity />
        </div>
    )
}
