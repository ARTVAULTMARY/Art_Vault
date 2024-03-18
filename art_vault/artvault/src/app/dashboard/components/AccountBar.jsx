
export default function AccountBar(session) {
    return (
        <div className="flex flex-col items-center w-1/4">
            <img
                src="/images/ArtVault.svg"
                className="w-full"
            />
            <div className="flex flex-col justify-between w-full min-h-[350px] mt-10">
                <button className="dash-button w-full">Dashboard</button>                
                <button className="dash-button w-full">null</button>
                <button className="dash-button w-full">My Account</button>
                <button className="dash-button w-full">Memberships</button>
                <button className="dash-button w-full">Log Out</button>
            </div>
        </div>
    )
}
