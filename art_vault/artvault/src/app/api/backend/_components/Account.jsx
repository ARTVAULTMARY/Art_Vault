"use client";

import { useState } from "react";
import FormGenerator from "./FormGenerator";

export default function SignInOrUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const inputData = [["Email", email, setEmail, "artvault@email.com"], ["Username", username, setUsername, "artvault-username"], ["Password", password, setPassword, "SuperSecretPassword"]];

    async function formSubmit() {
        try {
            await fetch("/api/backend/add-user", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                }),
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <p className="text-xl">Sign In/Sign Up</p>
            <FormGenerator inputData={inputData} />
            <button
                className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200"
                onClick={formSubmit}
            >
                Sign In/Sign Up
            </button>
        </div>
    );
}
