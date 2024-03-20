'use client';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardButton(){
    const router = useRouter();
    const pathName = usePathname();
    const [dashSelected, setDashSelected] = useState();

    useEffect(() => {
        if (pathName === '/dashboard') setDashSelected(true);
        else setDashSelected(false);
    }, [dashSelected])

    const handleRedirect = () => {
        if (dashSelected) router.push('/')
        else router.push('/dashboard')
    }

    return(
        <span className="flex ml-[145px] text-black font-league-gothic text-5xl tracking-wide hover:text-maroon-flush"
            onClick={handleRedirect}>
            {dashSelected ? 'HOME' : 'DASHBOARD'}
        </span>
    )
}
