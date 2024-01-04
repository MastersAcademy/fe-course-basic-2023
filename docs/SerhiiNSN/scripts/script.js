const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'check__custom';
const SUBMIT_BUTTON_ID = 'button-login';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'success-login.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

/**
 * Return input value by id.
 * @param {string} elementId
 * @return {string|boolean} input value
 */
function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

/**
 * Add errors to errors container.
 * @param {Object} inputData in format like: { [input_id]: error_text, ... }
 */
function setErrors(inputData) {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;
        errorContainerElement.appendChild(errorElement);
    });
}

function deleteErrors() {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.replaceChildren();
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    const cleanedEmail = email.replace(/\s/g, '');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(cleanedEmail);
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkCustom = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    const errors = {};

    if (!isEmail(email)) {
        errors[EMAIL_INPUT_ID] = 'Email is invalid';
    }

    if (password.length < 8 || password.length > 12) {
        errors[PASSWORD_INPUT_ID] = 'The password must contain from 8 to 12 characters';
    }

    if (!checkCustom) {
        errors[NOT_A_ROBOT_CHECKBOX_ID] = 'Please confirm you are not a robot';
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
