'use client'

import { useCallback, useEffect, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from "next/link";

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
                <div ref={wrapper} className="bg-white m-auto p-10">
                    <h3>Signup</h3>
                    <Link href={pathname}>
                        <button type="button" onClick={dismissModal} className="">Close</button>
                    </Link>
                </div>
            </div> : null }

            { loginModalActive ? <div ref={overlay} onClick={onClick} className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-25 backdrop-blur">
                <div ref={wrapper} className="bg-white m-auto p-10">
                    <h3>Login</h3>
                    <Link href={pathname}>
                        <button type="button" onClick={dismissModal} className="p-2">Close</button>
                    </Link>
                </div>
            </div> : null }
        </>
    );
};
