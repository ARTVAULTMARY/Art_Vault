'use client'

import Footer from "@/_sharedComponents/Footer/Footer"
import Header from "@/_sharedComponents/Header/Header"

export default function UserDashboard(session) {
    return (
        <div className="flex flex-col items-center w-full h-screen bg-transparent">
            <Header />
            <h1>Dashboard</h1>
            <p>{ session.user ? session.user?.name : "Data not found"}</p>
            <Footer />
        </div>
    )
}
