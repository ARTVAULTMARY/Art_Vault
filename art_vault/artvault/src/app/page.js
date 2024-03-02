import Header from '@/_sharedComponents/Header/Header'
import Homepage from './_Homepage/Homepage'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen bg-transparent items-center">
            <div className='flex flex-col items-center max-w-[2300px]'>
                <Header />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
};
