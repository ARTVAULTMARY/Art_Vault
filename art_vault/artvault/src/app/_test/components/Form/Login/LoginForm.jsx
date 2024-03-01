"use client"

import useForm from "../useForm";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'
import { loginForm } from "../helpers/formConfig";

export default function LoginForm() {
    const { renderFormInputs, isFormValid, form } = useForm(loginForm);
    const [responseError, setResponseError] = useState("");
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signIn('credentials', {
            username: form?.email.value,
            password: form?.password.value,
            redirect: false,
        });

        if (response.ok) {
            console.log({ response });
            router.push("/");
            router.refresh();
        } else {
            setResponseError(response.error);
        }
    };

    return (
        <div className="flex flex-col w-full h-full">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full py-10 justify-between items-center">
                {renderFormInputs()}
                <p className="h-5 text-sm text-maroon-flush m-0">{responseError}</p>
                <button 
                    type="submit" 
                    disabled={!isFormValid()} 
                    formNoValidate="formNoValidate"
                    className="w-1/3 bg-teak-200 font-semibold mt-2 py-2 px-8 rounded enabled:bg-teak-300 enabled:cursor-pointer enabled:hover:bg-teak enabled:hover:text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
