'use client';
import { signOut } from "next-auth/react";

export default function Logout(){
    return(
        <span className="flex ml-[145px] text-black font-league-gothic text-5xl tracking-wide hover:text-maroon-flush"
        onClick={() => {
            signOut();
        }}>
            LOGOUT
        </span>
    )
}
