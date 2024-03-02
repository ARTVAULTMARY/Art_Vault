//Validation functions for formConfig

function createValidationRule(ruleName, errorMessage, validateFunction ) {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunction,
    };
};

export const requiredRule = (inputName) => {
    return createValidationRule(
        "required",
        `${inputName} Required`,
        (inputValue, formObj) => inputValue.length !== 0
    );
};

export const minLengthRule = (inputName, minChars) => {
    return createValidationRule(
        "minLength",
        `${inputName} should contain at least ${minChars} characters`,
        (inputValue, formObj) => inputValue.length >= minChars
    );
};

export function maxLengthRule(inputName, maxChar) {
    return createValidationRule(
        'maxLength',
        `${inputName} cannot contain more than ${maxChar} characters`,
        (inputValue, formObj) => inputValue.length <= maxChar
    );
};

export function passwordMatchRule() {
    return createValidationRule(
        'passwordMatch',
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
}
