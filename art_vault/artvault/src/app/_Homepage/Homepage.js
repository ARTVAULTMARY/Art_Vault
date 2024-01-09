import ArtLovers from "./ArtLoversPanel";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center h-fit w-full min-w-[1200px] m-10 2xl:w-5/6 bg-white">
            <ArtLovers />
            <HowItWorks />
            <AboutUs />
        </div>
    )
}
