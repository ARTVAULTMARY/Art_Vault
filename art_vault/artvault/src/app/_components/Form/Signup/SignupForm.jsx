"use client"

import { useState } from "react";
import useForm from "../useForm";
import { signupForm } from "../helpers/formConfig";

export default function SignupForm() {
    const { renderFormInputs, isFormValid, form, responseError, setResponseError } = useForm(signupForm);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        setResponseError(null);
        e.preventDefault();
        setIsLoading(true);
        //TODO move query into separate file 
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email.value,
                username: form.username.value,
                password: form.password.value,
            }),
        });

        if(response.ok) {
            setIsLoading(false);
            console.log({ response });
        } else {
            setIsLoading(false);
            setResponseError(response.error)
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
