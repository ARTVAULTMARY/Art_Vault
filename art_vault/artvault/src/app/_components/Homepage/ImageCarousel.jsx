export default function ImageCarousel() {
    return (
        <div className="flex flex-row w-full h-[600px]">
            <div className="flex flex-row justify-evenly h-full w-full bg-carousel bg-center">
                <div width="0" height="0" className="h-3/5 w-auto aspect-square mt-[80px] border-none bg-shapes bg-center bg-cover shadow-carousel-image" />
                <div width="0" height="0" className="h-3/5 w-auto aspect-square mt-[80px] border-none bg-spiral bg-center bg-cover shadow-carousel-image" />
                <div width="0" height="0" className="h-3/5 w-auto aspect-square mt-[80px] border-none bg-hallway bg-center bg-cover shadow-carousel-image" />
            </div>
        </div>
    )
}
