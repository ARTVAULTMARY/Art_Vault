import Link from "next/link";
import { getServerSession } from 'next-auth'

export default async function UserDashboard(){
    const session = await getServerSession();
    console.log('session: ', session)

    return (
        <div className="flex flex-col">
            dash test
            {session.user?.name}
        </div>
    )
}
