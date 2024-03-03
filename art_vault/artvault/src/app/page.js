import Header from '@/_sharedComponents/Header/Header'
import Homepage from './_components/Homepage/Homepage'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen bg-transparent">
            <div className='flex flex-col items-center max-w-[2300px]'>
                <Header />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
};
