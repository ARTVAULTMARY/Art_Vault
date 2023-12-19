'use client'
import { useState } from "react"
import NewsSignupInputs from "./NewsSignupInputs"

export default function NewsSignup() {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <div className="flex flex-row w-1/3">
            <form className="flex flex-col items-center">
                <h1 className="text-xl mb-3">Sign up for Art Vault News</h1>
                <NewsSignupInputs props={{ setEmail, setFirstName, setLastName }} />
                <button className="flex  justify-center items-center tracking-wider bg-teak rounded-standard">
                        <p
                            href="/test"
                            className="p-3 text-black hover:text-maroon-flush font-open-sans font-bold text-2xl md:text-3xl xl:text-2xl"
                        >
                            Subscribe
                        </p>
                </button>
            </form>
        </div>
    )
}
