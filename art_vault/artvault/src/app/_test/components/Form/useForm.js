import { useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'

export default function useForm(formObj) {
    const [form, setForm] = useState(formObj);
    const [responseError, setResponseError] = useState("");

    function renderFormInputs() {
        return Object.values(form).map((inputObj) => {
            const { value, label, errorMessage, valid, renderInput } = inputObj;
            return renderInput(onInputChange, value, valid, errorMessage, label);
        });
    };

    const isFormValid = useCallback(() => {
        let isValid = true;
        const arr = Object.values(form);

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].valid) {
              isValid = false;
              break;
            }
        }

        return isValid;
    }, [form]);

    const isInputFieldValid = useCallback((inputField) => {
        for (const rule of inputField.validationRules) {
            if (!rule.validate(inputField.value, form)) {
                inputField.errorMessage = rule.message;
                return false;
            };
        };
        return true;
    }, [form]);

    const onInputChange = useCallback((e) => {
        const { name, value } = e.target;
        const inputObj = { ...form[name] };
        inputObj.value = value;

        const isValidInput = isInputFieldValid(inputObj);

        setResponseError(null);

        if (isValidInput && !inputObj.valid) {
            inputObj.valid = true;
        } else if (!isValidInput && inputObj.valid) {
            inputObj.valid = false;
        }

        inputObj.touched = true;
        setForm({...form, [name]: inputObj})
    }, [form, isInputFieldValid]);

    return { renderFormInputs, isFormValid, form, responseError, setResponseError };
};
