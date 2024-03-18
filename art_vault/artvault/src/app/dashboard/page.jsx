import { getServerSession } from 'next-auth'
import UserDashboard from "./dashboard";

export default async function DashboardPage() {
    const session = await getServerSession();
    console.log('session: ', session)

    return (
        <div className="flex flex-col items-center w-full h-screen bg-transparent">
            <UserDashboard props={session} />
        </div>
    )
}
