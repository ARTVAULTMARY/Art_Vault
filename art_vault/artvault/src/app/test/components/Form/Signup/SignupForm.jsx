import useForm from "../useForm";
import { signupForm } from "../helpers/formConfig";

export default function SignupForm() {
    const { renderFormInputs, isFormValid } = useForm(signupForm);

    return (
        <div className="flex flex-col w-full h-full">
            <form className="flex flex-col w-full h-full py-10 justify-between items-center">
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
