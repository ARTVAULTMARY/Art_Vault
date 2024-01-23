
export default function ArtLovers() {
    return (
        <div className="flex flex-row justify-evenly w-full h-[400px] my-10 p-10 gap-3 bg-white">

            <div className="flex flex-col justify-start items-center w-1/4 min-w-[600px] max-w-[800px] max-h-[300px] border-4 border-black rounded-xl">
                <h1 className="font-league-gothic text-4xl tracking-wide my-5">FOR ART LOVERS</h1>
                <ul className="list-disc text-2xl m-2">
                    <li className="m-2"><span className="font-bold">Explore</span> our artist's self-curated galleries.</li>
                    <li className="m-2"><span className="font-bold">Discover</span> new artists and artwork.</li>
                    <li className="m-2"><span className="font-bold">Enjoy</span> a personalized art experience.</li>
                </ul>

                <button className="relative top-[35px] w-3/4 py-2 tracking-wider bg-teak rounded-standard">
                    <p className="text-black hover:text-maroon-flush text-2xl md:text-3xl xl:text-4xl font-league-gothic py-2 px-10">
                        Explore the galleries
                    </p>
                </button>
            </div>

            <div className="flex flex-col justify-start items-center w-1/4 min-w-[600px] max-w-[800px] max-h-[300px] border-4 border-black rounded-xl">
                <h1 className="font-league-gothic text-4xl tracking-wide my-5">FOR ARTISTS</h1>
                <ul className="list-disc text-2xl m-2">
                    <li className="m-2"><span className="font-bold">Deposit</span> your artwork in self-curated galleries.</li>
                    <li className="m-2"><span className="font-bold">Safekeep</span> your art for future generations.</li>
                    <li className="m-2"><span className="font-bold">Share</span> your art with the world.</li>
                </ul>

                <button className="relative top-[35px] w-3/4 py-2 tracking-wider bg-teak rounded-standard">
                    <p className="text-black hover:text-maroon-flush text-2xl md:text-3xl xl:text-4xl font-league-gothic py-2 px-10">
                        Create a gallery for free
                    </p>
                </button>
            </div>

        </div>
    )
}
