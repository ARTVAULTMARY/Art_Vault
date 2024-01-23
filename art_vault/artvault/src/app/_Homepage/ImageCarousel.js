
export default function ImageCarousel() {
    return (
        <div className="flex flex-row w-full h-[600px]">
            <div className="flex flex-row justify-evenly h-full w-full bg-carousel-large">
                <img className="h-3/5 aspect-square mt-[80px] border-none bg-white shadow-2xl"></img>
                <img className="h-3/5 aspect-square mt-[80px] border-none bg-white shadow-2xl"></img>
                <img className="h-3/5 aspect-square mt-[80px] border-none bg-white shadow-2xl"></img>
            </div>
        </div>
    )
}