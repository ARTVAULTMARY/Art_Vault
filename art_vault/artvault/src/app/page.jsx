import Header from '@/_sharedComponents/Header/Header'
import Homepage from './_components/Homepage/Homepage'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col items-center max-w-[2300px] min-w-[1268px] 2xl:w-9/12 h-screen bg-transparent">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
};
