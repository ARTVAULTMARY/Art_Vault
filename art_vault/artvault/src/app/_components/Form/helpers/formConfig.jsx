import InputField from "../InputField";

import { minLengthRule, passwordMatchRule, requiredRule, maxLengthRule } from "./loginValidationRules";

function createFormFieldConfig(label, name, type, defaultValue = "") {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <InputField 
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    handleChange={handleChange}
                    errorMessage={error}
                    isValid={isValid}
                    value={value}
                />
            );
        },
        label,
        value: defaultValue,
        valid: false,
        errorMessage: "",
        touched: false,
    };
};

//TODO: Add validation rules to form objects
export const signupForm = {
    name: {
        ...createFormFieldConfig("Name", "name", "text"),
        validationRules: [
            requiredRule("Name"),
            minLengthRule("Name", 2),
            maxLengthRule("Name", 25),
        ],
    },
    email: {
        ...createFormFieldConfig("Email", "email", "email"),
        validationRules: [requiredRule("Email")],
    },
    password: {
        ...createFormFieldConfig("Password", "password", "password"),
        validationRules: [
            requiredRule("Password"),
            minLengthRule("Password", 8),
            maxLengthRule("Password", 20),
        ],
    },
    confirmPassword: {
        ...createFormFieldConfig("Confirm Password", "confirmPassword", "password"),
        validationRules: [passwordMatchRule()],
    }
};

export const loginForm = {
    email: {
        ...createFormFieldConfig("Username", "email", "email"),
        validationRules: [requiredRule("Username")],
    },
    password: {
        ...createFormFieldConfig("Password", "password", "password"),
        validationRules: [requiredRule("Password")],
    },
};
