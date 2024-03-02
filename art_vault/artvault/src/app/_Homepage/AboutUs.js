import Link from "next/link"

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center gap-16 w-full mt-20 mx-30 bg-white">
            <button className="flex justify-center items-center tracking-wider bg-teak rounded-standard">
                <Link
                    href="?signupModal=true"
                    scroll={false}
                    className="text-black hover:text-maroon-flush py-4 px-20 font-league-gothic text-2xl md:text-3xl xl:text-4xl"
                >
                    Sign Up 
                </Link>
            </button>
            <div className="flex flex-col justify-center items-center w-4/5 max-h-[350px] border-4 p-10 border-teak rounded-xl">
                <h1 className="font-league-gothic text-5xl tracking-wide mb-5">ABOUT US</h1>
                <p className="mx-10 mt-5">
                    Art Vault was built with the vision of creating a dynamic and inclusive space for artists and art lovers. In a world where galleries 
                    and museums dictate what is considered worthy of attention, Art Vault emerges as a self-curated archive that celebrates the 
                    diversity and authenticity of artistic expression. This platform is not just about showcasing art; it is a testament to the belief 
                    that every artist has a unique voice that deserves to be heard.
                    Art Vault serves as a digital sanctuary where creators can share their work directly with a global audience of art enthusiasts. 
                    Unlike conventional art spaces, Art Vault removes the barriers imposed by gatekeepers or curators, ensuring that the art experience remains unfiltered and true to the artist's vision. 
                    By empowering artists to preserve and showcase their work, Art Vault becomes a timeless repository for future generations to explore the rich tapestry of contemporary creativity. 
                    With its innovative approach, Art Vault is on a mission to build the world's largest artist-curated arts archive, fostering a vibrant community that connects artists 
                    and art lovers in a truly modern and inspirational way.
                </p>
            </div>
        </div>
    )
}
