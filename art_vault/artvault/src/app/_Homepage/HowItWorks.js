export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="font-league-gothic text-5xl tracking-wide m-10">How Art Vault works for artists</h1>

            <div className="flex flex-row justify-evenly w-full h-[300px] bg-black">

                <div className="flex flex-row items-center w-1/4 max-w-[270px] gap-5">
                    <h2 className="text-white text-5xl font-bold">1</h2> 
                    <div className="flex flex-col bg-white aspect-square p-6 rounded-md">
                        <h2 className="font-league-gothic h-1/2 text-superxl text-center">CREATE YOUR ACCOUNT</h2>
                        <img src="/Images/paint_icon.svg" className="h-1/2 fill-teak"></img>
                    </div>
                </div>

                <div className="flex flex-row items-center w-1/4 max-w-[270px] gap-5">
                    <h2 className="text-white text-5xl font-bold">2</h2> 
                    <div className="flex flex-col bg-white aspect-square p-6 rounded-md">
                        <h2 className="font-league-gothic h-1/2 text-superxl text-center">SET UP YOUR GALLERY</h2>
                        <img src="/Images/hanging_frame.svg" className="h-1/2 fill-teak"></img>
                    </div>
                </div>

                <div className="flex flex-row items-center w-1/4 max-w-[270px] gap-5">
                    <h2 className="text-white text-5xl font-bold">3</h2> 
                    <div className="flex flex-col bg-white aspect-square p-6 rounded-md">
                        <h2 className="font-league-gothic h-1/2 text-superxl text-center">SAVE YOUR ARTWORK</h2>
                        <img src="/Images/upload_icon.svg" className="h-1/2 fill-teak"></img>
                    </div>
                </div>

                <div className="flex flex-row items-center w-1/4 max-w-[270px] gap-5">
                    <h2 className="text-white text-5xl font-bold">4</h2> 
                    <div className="flex flex-col justify-center bg-white aspect-square p-6 rounded-md">
                        <div className="flex font-league-gothic text-superxl text-center">
                            <h2><span className="text-teak">SHARE YOUR ART</span> WITH THE WORLD</h2>
                        </div>
                    </div>
                </div>


            </div>    
        </div>

    )
}
