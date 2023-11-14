const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submitButton';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './success.html';

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

function deleteSpaces(email) {
    return email.replace(/\s/g, '');
}

function passwordLength(password) {
    return password.length >= 8 && password.length <= 22;
}

function validateForm() {
    deleteErrors();
    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const validEmail = deleteSpaces(email);

    if (!isEmail(validEmail)) {
        setErrors({ ERRORS_CONTAINER_ID: 'Email invalid!' });
    }

    if (!passwordLength(password)) {
        setErrors({ ERRORS_CONTAINER_ID: 'Password should from 8 to 12 chars!' });
    }

    if (!checkbox) {
        setErrors({ ERRORS_CONTAINER_ID: 'Check the box that you are not a robot!' });
    }

    if (isEmail(validEmail) && passwordLength(password) && checkbox) {
        navigateToResultPage();
    }

    console.info('Підготовка успішна');
}

submitButton.onclick = validateForm;
