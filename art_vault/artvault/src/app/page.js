import Header from '@/_sharedComponents/Header/Header'
import Homepage from './_Homepage/Homepage'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col max-w-[2300px] h-screen items-center bg-transparent">
            <Header />
            <Homepage />
            <Footer />
        </div>
    )
}
