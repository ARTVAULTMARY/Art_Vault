import InputField from "../InputField";

import { requiredRule } from "../helpers/loginValidationRules";

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

export const signupForm = {
    name: {
        ...createFormFieldConfig("Full Name", "name", "text"),
        validationRules: [requiredRule("Name")],
    },
    email: {
        ...createFormFieldConfig("Email", "email", "email"),
        validationRules: [requiredRule("Email")],
    },
    password: {
        ...createFormFieldConfig("Password", "password", "password"),
        validationRules: [requiredRule("Password")],
    },
    confirmPassword: {
        ...createFormFieldConfig("Confirm Password", "confirmPassword", "password"),
        validationRules: [requiredRule("Confirm Password")],
    }
};

export const loginForm = {
    email: {
        ...createFormFieldConfig("Email", "email", "email"),
        validationRules: [requiredRule("Email")],
    },
    password: {
        ...createFormFieldConfig("Password", "password", "password"),
        validationRules: [requiredRule("Password")],
    },
};
