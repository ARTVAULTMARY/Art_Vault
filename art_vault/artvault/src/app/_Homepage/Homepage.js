import ArtLovers from "./ArtLoversPanel";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import ImageCarousel from "./ImageCarousel";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center h-fit w-full min-w-[1200px] 2xl:w-5/6 bg-white">
            <ImageCarousel />
            <ArtLovers />
            <HowItWorks />
            <AboutUs />
        </div>
    )
}
