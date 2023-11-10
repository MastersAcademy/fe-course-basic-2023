const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checking-for-non-robot';
const SUBMIT_BUTTON_ID = 'login-main-submit-button';
const EMAIL_ERRORS_CONTAINER_ID = 'email-errors-container';
const PASSWORD_ERRORS_CONTAINER_ID = 'password-errors-container';
const CHECKBOX_ERRORS_CONTAINER_ID = 'checkbox-errors-container';
const RESULT_PAGE_PATH = './successfulLogin.html';

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
function setEmailErrors(inputData) {
    const errorContainerElement = document.getElementById(EMAIL_ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;
        errorContainerElement.appendChild(errorElement);
    });
}

function setPasswordErrors(inputData) {
    const errorContainerElement = document.getElementById(PASSWORD_ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;
        errorContainerElement.appendChild(errorElement);
    });
}

function setCheckboxErrors(inputData) {
    const errorContainerElement = document.getElementById(CHECKBOX_ERRORS_CONTAINER_ID);
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
    const emailErrorContainerElement = document.getElementById(EMAIL_ERRORS_CONTAINER_ID);
    emailErrorContainerElement.replaceChildren();
    const passwordErrorContainerElement = document.getElementById(PASSWORD_ERRORS_CONTAINER_ID);
    passwordErrorContainerElement.replaceChildren();
    const checkboxErrorContainerElement = document.getElementById(CHECKBOX_ERRORS_CONTAINER_ID);
    checkboxErrorContainerElement.replaceChildren();
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
    // place your code here
    const checkedOnSpaceEmail = getValueById(EMAIL_INPUT_ID).replace(/\s/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const notRobotCheckbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    deleteErrors();

    if (!isEmail(checkedOnSpaceEmail) || checkedOnSpaceEmail.length === 0) {
        return setEmailErrors({ [EMAIL_INPUT_ID]: 'Not correct email' });
    }

    if (password.length < 7) {
        return setPasswordErrors({ [PASSWORD_INPUT_ID]: 'The password must be at least 8 characters long.' });
    }
    if (password.length > 13) {
        return setPasswordErrors({ [[PASSWORD_INPUT_ID]]: 'The password should not exceed 12 characters.' });
    }

    if (!notRobotCheckbox) {
        return setCheckboxErrors({ [NOT_A_ROBOT_CHECKBOX_ID]: 'You must confirm that you are not a robot' });
    }

    return navigateToResultPage();
}

submitButton.onclick = validateForm;
