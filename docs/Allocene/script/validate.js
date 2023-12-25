const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const ERRORS_CONTAINER_CHECKBOX_ID = 'errors-container-checkbox';
const ERRORS_CONTAINER_PASSWORD_ID = 'errors-container-password';
const ERRORS_CONTAINER_EMAIL_ID = 'errors-container-email';
const RESULT_PAGE_PATH = './login-success.html';

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

function setErrors(errorContainerId, error) {
    const errorContainerElement = document.getElementById(errorContainerId);
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.textContent = error;
    errorContainerElement.appendChild(errorElement);
}

const inputData = {
    [EMAIL_INPUT_ID]: 'Email must be in format email@localDomen.domen',
    [PASSWORD_INPUT_ID]: 'Password must be from 8 to 12 characters',
    [NOT_A_ROBOT_CHECKBOX_ID]: 'Please check the checkbox',
};

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const errorContainerCheckboxElement = document.getElementById(ERRORS_CONTAINER_CHECKBOX_ID);
    const errorContainerPasswordElement = document.getElementById(ERRORS_CONTAINER_PASSWORD_ID);
    const errorContainerEmailElement = document.getElementById(ERRORS_CONTAINER_EMAIL_ID);
    errorContainerCheckboxElement.replaceChildren();
    errorContainerPasswordElement.replaceChildren();
    errorContainerEmailElement.replaceChildren();
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

function removeSpaces(email) {
    return email.replace(/\s+/g, '');
}

function replaceEmailText(inputEmailElement, newEmailText) {
    inputEmailElement.value = newEmailText;
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const isChecked = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    let isValid = true;

    replaceEmailText(document.getElementById(EMAIL_INPUT_ID), removeSpaces(email));

    if (!email.length || !isEmail(email)) {
        setErrors(ERRORS_CONTAINER_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
        isValid = false;
    }

    if (!password.length || password.length < 8 || password.length > 12) {
        setErrors(ERRORS_CONTAINER_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
        isValid = false;
    }

    if (!isChecked) {
        setErrors(ERRORS_CONTAINER_CHECKBOX_ID, inputData[NOT_A_ROBOT_CHECKBOX_ID]);
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    navigateToResultPage();
}

submitButton.onclick = validateForm;
