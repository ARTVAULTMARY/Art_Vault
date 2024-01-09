
export default function ArtLovers() {
    return (
        <div className="flex flex-row justify-evenly w-full h-[400px] m-10 bg-white">

            <div className="flex flex-col justify-start items-center w-1/4 max-h-[300px] border-4 border-black rounded-xl">
                <h1 className="font-league-gothic text-4xl tracking-wide my-5">FOR ART LOVERS</h1>
                <ul className="list-disc">
                    <li>Explore our artist's self-curated galleries.</li>
                    <li>Discover new artists and artwork.</li>
                    <li>Enjoy a personalized art experience.</li>
                </ul>
            </div>

            <div className="flex flex-col justify-start items-center w-1/4 max-h-[300px] border-4 border-black rounded-xl">
                <h1 className="font-league-gothic text-4xl tracking-wide my-5">FOR ARTISTS</h1>
                <ul className="list-disc">
                    <li>Deposit your artwork in self-curated galleries.</li>
                    <li>Safekeep your art for future generations.</li>
                    <li>Share your art with the world.</li>
                </ul>
            </div>

        </div>
    )
}
