import AccountBar from "./components/AccountBar"
import UserGalleries from "./components/UserGalleries"

export default function UserDashboard({ session }) {
    return (
        <div className="flex flex-row items-center justify-center h-fit w-full min-w-[1268px] m-20 2xl:w-5/6 bg-white">
            <AccountBar props={ session } />
            <UserGalleries />
        </div>
    )
}
