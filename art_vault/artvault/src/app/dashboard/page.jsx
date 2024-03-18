import { getServerSession } from 'next-auth'
import UserDashboard from "./dashboard";
import Header from '@/_sharedComponents/Header/Header';
import Footer from '@/_sharedComponents/Footer/Footer';

export default async function DashboardPage() {
    const session = await getServerSession();
    console.log('session: ', session)

    return (
        <div className="flex flex-col items-center w-full h-screen bg-transparent">
            <Header />
            <UserDashboard props={session} />
            <Footer />
        </div>
    )
}
