import Header from '@/_sharedComponents/Header/Header'
import Footer from '@/_sharedComponents/Footer/Footer'

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen items-center bg-white">
            <Header />
            <Footer />
        </div>
    )
}
