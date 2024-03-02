import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Logout from '@/app/logout'

export default async function Header() {
    const session = await getServerSession();

    return (
        <div className="flex flex-col items-center h-2/5 max-h-[300px] min-h-[300px] w-full min-w-[1200px] 2xl:w-5/6">
            <img
                src="/images/ArtVault.svg"
                className="absolute h-1/4 max-h-[187px] min-h-[187px] scale-115 mt-2"
            />
            <div className="flex flex-row justify-start items-center w-full h-1/3 bg-alto">
                { !session ? <Link
                    href="?signupModal=true"
                    scroll={false}
                    className="ml-36 text-black font-league-gothic text-5xl tracking-wide hover:text-maroon-flush"
                >
                    SIGN UP
                </Link> : null } 
            </div>
            <div className="flex flex-row justify-between items-center w-full h-1/3 bg-white">
                { !session ? <Link
                    href="?loginModal=true"
                    scroll={false}
                    className="flex ml-40 text-black font-league-gothic text-5xl tracking-wide hover:text-maroon-flush"
                >
                    LOGIN
                </Link> : <Logout/> }
                <div className="flex flex-row justify-center items-center w-1/3 h-full gap-10">
                    <button className="flex w-1/4 h-4/6 justify-center items-center tracking-wider bg-teak rounded-standard">
                        <Link
                            href=""
                            className="text-black hover:text-maroon-flush p-3 text-2xl md:text-3xl xl:text-4xl font-league-gothic"
                        >
                            SEARCH
                        </Link>
                    </button>
                    <button className="flex w-1/4 h-4/6 justify-center items-center tracking-wider bg-teak rounded-standard">
                        <Link
                            href=""
                            className="text-black hover:text-maroon-flush p-3 font-league-gothic text-2xl md:text-3xl xl:text-4xl"
                        >
                            BROWSE
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-1/3 bg-black">
                <h1 className="flex items-center pl-8 text-white font-league-gothic text-7xl tracking-widest">
                    ART VAULT
                </h1>
            </div>
        </div>
    )
}
