const VALIDATE_RULES = {
    email: {
        rule: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        message: 'Invalid email format',
        required: true,
    },
    password: {
        rule: (password) => password.length >= 8 && password.length <= 12,
        message: 'Password must be between 8 and 12 characters',
        required: true,
    },
    checkbox: {
        rule: (checkbox) => checkbox,
        message: 'Checkbox must be checked',
        required: true,
    },
};

const ERROR_STATE = Object.fromEntries(Object.keys(VALIDATE_RULES).map((key) => [key, false]));

function displayErrorMessage(field, message) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    errorContainer.setAttribute('data-field', field);
    errorContainer.innerText = message;

    const inputField = document.getElementById(field);
    const formGroup = inputField.closest('.form-group');
    formGroup.appendChild(errorContainer);
}

function getFieldValidity(field) {
    const value = document.getElementById(field).value.trim();
    const rule = VALIDATE_RULES[field];
    const isChecked = document.getElementById(field).checked;

    const isFieldEmpty = rule.required && !value;
    const isCheckboxInvalid = field === 'checkbox' && !rule.rule(isChecked);
    const isValueInvalid = rule.rule && !rule.rule(value);

    return {
        rule,
        isChecked,
        isFieldEmpty,
        isCheckboxInvalid,
        isValueInvalid,
    };
}

function clearErrorMessages(field) {
    if (field) {
        const errorMessages = document.querySelectorAll(`.error-message[data-field="${field}"]`);
        errorMessages.forEach((errorMessage) => errorMessage.remove());
        ERROR_STATE[field] = false;
    } else {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((errorMessage) => errorMessage.remove());
        Object.keys(VALIDATE_RULES).forEach((key) => {
            ERROR_STATE[key] = false;
        });
    }
}

function validateAndDisplayField(field) {
    clearErrorMessages(field);

    const {
        rule,
        isFieldEmpty,
        isCheckboxInvalid,
        isValueInvalid,
    } = getFieldValidity(field);

    if ((isFieldEmpty || isCheckboxInvalid || isValueInvalid) && !ERROR_STATE[field]) {
        displayErrorMessage(field, isFieldEmpty ? 'This field is required' : rule.message);
        ERROR_STATE[field] = true;
    } else if (!isFieldEmpty && !isCheckboxInvalid && !isValueInvalid) {
        clearErrorMessages(field);
        ERROR_STATE[field] = false;
    }

    document.getElementById('submit-button').disabled = Object.values(ERROR_STATE).some((error) => error);
}

function validateFormHandler(event) {
    event.preventDefault();

    clearErrorMessages();

    let isValid = true;

    Object.keys(VALIDATE_RULES).forEach((field) => {
        validateAndDisplayField(field);

        if (ERROR_STATE[field]) {
            isValid = false;
        }
    });

    document.getElementById('submit-button').disabled = !isValid;

    if (isValid) {
        window.location.href = 'success.html';
    }
}

Object.keys(VALIDATE_RULES).forEach((field) => {
    const inputField = document.getElementById(field);
    inputField.addEventListener('input', () => {
        validateAndDisplayField(field);
    });
});

document.getElementById('loginForm').addEventListener('submit', validateFormHandler);
