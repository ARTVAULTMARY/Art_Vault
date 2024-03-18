"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import useForm from "../useForm";
import { signupForm } from "../helpers/formConfig";

export default function SignupForm() {
    const { renderFormInputs, isFormValid, form, responseError, setResponseError } = useForm(signupForm);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        setResponseError(null);
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email.value,
                username: form.name.value,
                password: form.password.value,
            }),
        });
        
        const responseData = await response.json();

        if(response.ok) {
            setIsLoading(false);
            console.log({ response });
            router.push("/");
            router.refresh();
        } else {
            setIsLoading(false);
            setResponseError(responseData.message)
        };
    };

    return (
        <div className="flex flex-col w-full h-full">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full py-10 justify-between items-center">
                {renderFormInputs()}
                <div className=" min-h-[28px]">
                    {responseError && <p className="text-sm text-maroon-flush">{responseError}</p>}
                    {isLoading && <p className="fa-solid fa-spinner animate-spin text-spinnermd text-pampas-600" />}
                </div>
                <button 
                    type="submit" 
                    disabled={!isFormValid()} 
                    formNoValidate="formNoValidate"
                    className="w-1/3 bg-teak-200 font-semibold mt-10 py-2 px-8 rounded enabled:bg-teak-300 enabled:cursor-pointer enabled:hover:bg-teak enabled:hover:text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
