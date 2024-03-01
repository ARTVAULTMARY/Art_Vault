import Header from '@/_sharedComponents/Header/Header'
import Homepage from './_Homepage/Homepage'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col h-screen max-w-[2300px] bg-transparent items-center mx-auto">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
};
