const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'verification';
const SUBMIT_BUTTON_ID = 'submit_button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './result.html';

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

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.replaceChildren();
}

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID).replace(/\s/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkboxChecked = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    const errors = {};

    if (!isEmail(email)) {
        errors[EMAIL_INPUT_ID] = 'The email must be in the format of email@localDomain.domain';
    }

    if (password.length < 8 || password.length > 12) {
        errors[PASSWORD_INPUT_ID] = 'Password must be from 8 to 12 characters';
    }

    if (!checkboxChecked) {
        errors[NOT_A_ROBOT_CHECKBOX_ID] = 'You must indicate that you are not a robot';
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
