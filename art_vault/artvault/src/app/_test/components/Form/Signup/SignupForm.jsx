"use client"

import useForm from "../useForm";
import { signupForm } from "../helpers/formConfig";

export default function SignupForm() {
    const { renderFormInputs, isFormValid, responseError } = useForm(signupForm);

    return (
        <div className="flex flex-col w-full h-full">
            <form className="flex flex-col w-full h-full py-10 justify-between items-center">
                {renderFormInputs()}
                <p className="h-5 text-sm text-maroon-flush m-0">{responseError}</p>
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
