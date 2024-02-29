'use client'

import { useCallback, useEffect, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import Login from "@/app/test/components/LoginForm/Login";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const signupModalActive = searchParams.get("signupModal")
    const loginModalActive = searchParams.get("loginModal")
    const pathname = usePathname();

    const dismissModal = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback((e) => {
        if (e.target === overlay.current) {
            if (dismissModal) dismissModal();
        }
    }, [dismissModal, overlay, wrapper]);

    const onKeyPress = useCallback((e) => {
        if (e.key === "Escape") dismissModal();
    },[dismissModal]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress);
        return () => document.removeEventListener("keydown", onKeyPress);
    }, [onKeyPress]);

    return (
        <>
            { signupModalActive ? <div ref={overlay} onClick={onClick} className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-25 backdrop-blur">
                <div ref={wrapper} className="flex flex-col bg-white items-end p-3 w-1/4 h-[450px] min-w-[500px] max-w-[650px] rounded-md">
                    <Link href={pathname} className="flex w-fit">
                        <button type="button" onClick={dismissModal} className="flex fa-solid fa-xmark hover:text-maroon-flush" />
                    </Link>
                    <h1 className="w-full text-center text-black font-league-gothic text-5xl tracking-wide my-10">SIGNUP</h1>
                </div>
            </div> : null }

            { loginModalActive ? <div ref={overlay} onClick={onClick} className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-25 backdrop-blur">
                <div ref={wrapper} className="flex flex-col bg-white items-end p-3 w-1/4 h-[450px] min-w-[500px] max-w-[650px]  rounded-md">
                    <Link href={pathname} className="flex w-fit">
                        <button type="button" onClick={dismissModal} className="flex fa-solid fa-xmark hover:text-maroon-flush" />
                    </Link>
                    <h1 className="w-full text-center text-black font-league-gothic text-5xl tracking-wide my-10">LOGIN</h1>
                    <Login />
                </div>
            </div> : null }
        </>
    );
};
