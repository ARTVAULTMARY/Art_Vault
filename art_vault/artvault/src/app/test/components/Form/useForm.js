import { useState, useCallback } from "react";

export default function useForm(formObj) {
    const [form, setForm] = useState(formObj);

    function renderFormInputs() {
        return Object.values(form).map((inputObj) => {
            const { value, label, errorMessage, valid, renderInput } = inputObj;
            return renderInput(onInputChange, value, label, errorMessage, valid);
        });
    };

    const isFormValid = useCallback(() => {
        let isValid = true;
        const arr = Object.values(form);

        let i = 0;
        while (i < arr.length) {
            if (!arr[i].valid) {
                isValid = false;
                break;
            };
            i++;
        };

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

        if (isValidInput && !inputObj.valid) {
            inputObj.valid = true;
        } else if (!isValidInput && inputObj.valid) {
            inputObj.valid = false;
        }

        inputObj.touched = true;
        setForm({...form, [name]: inputObj})
    }, [form, isInputFieldValid]);

    return { renderFormInputs, isFormValid };
};
