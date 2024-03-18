export default function UserDashboard(session) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h1>Dashboard</h1>
            <p>{ session?.user ? session?.user.name : "Data not found"}</p>
        </div>
    )
}
