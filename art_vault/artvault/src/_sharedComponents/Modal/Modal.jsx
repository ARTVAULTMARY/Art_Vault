'use client'

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import LoginForm from "@/app/_components/Form/Login/LoginForm";
import SignupForm from "@/app/_components/Form/Signup/SignupForm";

export default function Modal() {
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
    }, [dismissModal, overlay]);

    const onKeyPress = useCallback((e) => {
        if (e.key === "Escape") dismissModal();
    },[dismissModal]);

    useLayoutEffect(() => {
        if (signupModalActive || loginModalActive) {
            document.body.classList.add("overflow-y-hidden")
        } else {
        document.body.classList.remove("overflow-y-hidden")
        }
    }, [signupModalActive, loginModalActive]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress);
        return () => document.removeEventListener("keydown", onKeyPress);
    }, [onKeyPress]);

    return (
        <>
            { signupModalActive ? <div ref={overlay} onClick={onClick} className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40 backdrop-blur">
                <div ref={wrapper} className="flex flex-col bg-white items-end p-3 w-1/4 h-fit min-w-[500px] max-w-[650px] rounded-md shadow-modal">
                    <Link href={pathname} className="flex w-fit">
                        <button type="button" onClick={dismissModal} className="flex fa-solid fa-xmark hover:text-maroon-flush" />
                    </Link>
                    <h1 className="w-full text-center text-black font-league-gothic text-5xl tracking-wide mt-10">SIGNUP</h1>
                    <SignupForm />
                </div>
            </div> : null }

            { loginModalActive ? <div ref={overlay} onClick={onClick} className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-40 backdrop-blur">
                <div ref={wrapper} className="flex flex-col bg-white items-end p-3 w-1/4 h-fit min-w-[500px] max-w-[650px] rounded-md shadow-modal">
                    <Link href={pathname} className="flex w-fit">
                        <button type="button" onClick={dismissModal} className="flex fa-solid fa-xmark hover:text-maroon-flush" />
                    </Link>
                    <h1 className="w-full text-center text-black font-league-gothic text-5xl tracking-wide mt-10">LOGIN</h1>
                    <LoginForm />
                </div>
            </div> : null }
        </>
    );
};
