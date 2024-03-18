import { getServerSession } from 'next-auth'
import UserDashboard from "./Dashboard";
import Header from '@/_sharedComponents/Header/Header';
import Footer from '@/_sharedComponents/Footer/Footer';

export default async function DashboardPage() {
    const session = await getServerSession();

    return (
        <div className="flex flex-col items-center max-w-[2300px] min-w-[1268px] 2xl:w-9/12 h-screen bg-transparent">
            <Header />
            <UserDashboard props={session} />
            <Footer />
        </div>
    )
}
