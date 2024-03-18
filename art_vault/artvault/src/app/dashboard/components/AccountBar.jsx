import Logout from "@/_sharedComponents/Header/Logout";

export default function AccountBar(session) {
    return (
        <div className="flex flex-col items-center w-1/5">
            <img
                src="/images/ArtVault.svg"
                className="w-full"
            />
            <div className="flex flex-col justify-between w-full min-h-[350px] mt-10">
                <button className="dash-button hover:dash-button-hover">Dashboard</button>                
                <button className="dash-button hover:dash-button-hover">null</button>
                <button className="dash-button hover:dash-button-hover">My Account</button>
                <button className="dash-button hover:dash-button-hover">Memberships</button>
                <button className="dash-button hover:dash-button-hover"><Logout /></button>
                
            </div>
        </div>
    )
}
