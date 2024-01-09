export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center w-full">
            <h1>How Art Vault works for artists</h1>

            <div className="flex flex-row justify-evenly w-full h-[300px] bg-black">

                <div className="flex flex-row items-center justify-center w-1/4 max-w-[250px] gap-5">
                    <h2 className="text-white">1</h2> 
                    <div className="bg-white aspect-square p-8 rounded-md">
                        <h2 className="">CREATE YOUR ACCOUNT</h2>
                        <img className=""></img>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center w-1/4 max-w-[250px] gap-5">
                    <h2 className="text-white">2</h2> 
                    <div className="bg-white aspect-square p-8 rounded-md">
                        <h2>SET UP YOUR GALLERY</h2>
                        <img className=""></img>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center w-1/4 max-w-[250px] gap-5">
                    <h2 className="text-white">3</h2> 
                    <div className="bg-white aspect-square p-8 rounded-md">
                        <h2>SAVE YOUR ARTWORK</h2>
                        <img className=""></img>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center w-1/4 max-w-[250px] gap-5">
                    <h2 className="text-white">4</h2> 
                    <div className="bg-white aspect-square p-8 rounded-md">
                        <h2>SHARE YOUR ART WITH THE WORLD</h2>
                        <img className=""></img>
                    </div>
                </div>


            </div>    
        </div>

    )
}
