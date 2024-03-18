import AccountBar from "./components/AccountBar"
import UserGalleries from "./components/UserGalleries"

export default function UserDashboard({ session }) {
    return (
        <div className="flex flex-row ">
            <AccountBar props={ session } />
            <UserGalleries />
        </div>
    )
}
