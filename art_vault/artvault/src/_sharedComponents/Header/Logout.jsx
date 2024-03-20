'use client';
import { signOut } from "next-auth/react";

export default function Logout(){
    return(
        <span className="flex text-black font-league-gothic text-3xl justify-center hover:text-maroon-flush"
        onClick={() => {
            signOut({ callbackUrl: '/', redirect: true });
        }}>
            Logout
        </span>
    )
}
