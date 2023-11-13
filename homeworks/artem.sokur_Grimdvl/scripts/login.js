const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CHECKBOX_ID = 'errors-checkbox';
const ERRORS_PASSWORD_ID = 'errors-password';
const ERRORS_EMAIL_ID = 'errors-email';
const RESULT_PAGE_PATH = './success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
const passwordInput = document.getElementById(PASSWORD_INPUT_ID);
const emailInput = document.getElementById(EMAIL_INPUT_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputData) {
    Object.entries(inputData).forEach(([inputId, error]) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;

        const containerId = `errors-${inputId}`;
        const containerElement = document.getElementById(containerId);

        if (containerElement) {
            containerElement.appendChild(errorElement);
        }
    });
}

function deleteErrors(containerId) {
    const errorContainerElement = document.getElementById(containerId);

    if (errorContainerElement) {
        errorContainerElement.replaceChildren();
    }
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function passwordLength(password) {
    return password.length >= 8 && password.length <= 12;
}

function validateForm() {
    const inputData = {};

    if (!getValueById(NOT_A_ROBOT_CHECKBOX_ID)) {
        deleteErrors(ERRORS_CHECKBOX_ID);
        deleteErrors(ERRORS_EMAIL_ID);
        deleteErrors(ERRORS_PASSWORD_ID);
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Checkbox is not checked';
    }
    if (!isEmail(emailInput.value)) {
        deleteErrors(ERRORS_CHECKBOX_ID);
        deleteErrors(ERRORS_EMAIL_ID);
        deleteErrors(ERRORS_PASSWORD_ID);
        inputData[EMAIL_INPUT_ID] = 'Invalid email format';
    }
    if (!passwordLength(passwordInput.value)) {
        deleteErrors(ERRORS_CHECKBOX_ID);
        deleteErrors(ERRORS_EMAIL_ID);
        deleteErrors(ERRORS_PASSWORD_ID);
        inputData[PASSWORD_INPUT_ID] = 'Password length should be between 8 and 12 characters';
    }

    setErrors(inputData);
    if (Object.keys(inputData).length === 0) {
        deleteErrors(ERRORS_CHECKBOX_ID);
        deleteErrors(ERRORS_EMAIL_ID);
        deleteErrors(ERRORS_PASSWORD_ID);
        navigateToResultPage();
        console.info('Підготовка успішна');
    }
}

submitButton.onclick = validateForm;
