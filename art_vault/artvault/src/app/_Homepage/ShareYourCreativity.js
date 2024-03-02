import Link from "next/link"

export default function ShareYourCreativity() {
    return (
        <div className="flex justify-center items-center w-full h-[600px] bg-white">
            <div className="w-full h-[30px] bg-black"></div>
            <div className="absolute flex flex-col items-center w-[475px] h-[270px] border-4 p-16 border-teak bg-white rounded-xl text-center font-league-gothic tracking-wide text-4xl">
                <p>Share your creativity with the world</p>
                <p>Get a <span className="text-teak">FREE</span> membership</p>
                <button className="relative w-2/3 top-[45px] py-2 tracking-wide bg-teak rounded-standard">
                    <Link
                        href="?signupModal=true"
                        className="text-black hover:text-maroon-flush text-2xl md:text-3xl xl:text-4xl font-league-gothic py-2 px-10"
                    >
                        Sign Up 
                    </Link>
                </button>
            </div>
        </div>
    )
}
