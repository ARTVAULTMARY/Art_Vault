"use client"
import useForm from "../useForm";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'
import { loginForm } from "../helpers/formConfig";

export default function LoginForm() {
    const { renderFormInputs, isFormValid, form } = useForm(loginForm);
    const router = useRouter()
    console.log('theformishere', form)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form data handleSubmit: ', form.email.value, form.password.value)
        const response = await signIn('credentials', {
            username: form.email.value,
            password: form.password.value,
            redirect: false,
        });
        console.log({response})
        if(!response?.error){
            router.push("/")
            router.refresh()
        }
    };

    return (
        <div className="flex flex-col w-full h-full">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full py-10 justify-between items-center">
                {renderFormInputs()}
                <button 
                    type="submit" 
                    disabled={!isFormValid()} 
                    className="w-1/3 bg-teak-200 font-semibold mt-10 py-2 px-8 rounded enabled:cursor-pointer enabled:hover:bg-teak enabled:hover:text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
