
export default function UserGalleries(session) {
    return (
        <div className="flex flex-col items-center w-2/3 min-h-[350px]">
            <div className="flex flex-row w-full">
                <button className="dash-button w-full m-2">Artist Name</button>                
                <button className="dash-button w-full m-2">Artist Package</button>                
            </div>

            <div className="flex flex-row h-1/5 w-full">
                <button className="dash-button w-full m-2">Bio</button>                
                <button className="dash-button w-full m-2">Add File</button>                
                <button className="dash-button w-full m-2">Create Gallery</button>                
                <button className="dash-button w-full m-2">Museum Shop</button>                
            </div>
                        
            <div className="flex flex-col items-center w-full h-full mt-10 font-league-gothic tracking-wider text-3xl">
                <h1>Galleries</h1>
                <div className="dash-button h-full w-full"></div>
            </div>
        </div>
    )
}
