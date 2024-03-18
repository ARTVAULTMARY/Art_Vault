import AccountBar from "./components/AccountBar"
import UserGalleries from "./components/UserGalleries"

export default function UserDashboard({ session }) {
    return (
        <div className="flex flex-row justify-center gap-20 h-full w-3/4 p-20">
            <AccountBar props={ session } />
            <UserGalleries />
        </div>
    )
}
