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
        `${inputName} required`,
        (inputValue, formObj) => inputValue.length !== 0
    );
};

export const minLengthRule = (inputName) => {
    return createValidationRule(
        "minLength",
        `${inputName} should contain `,
        (inputValue, formObj) => inputValue.length !== 0
    );
};
