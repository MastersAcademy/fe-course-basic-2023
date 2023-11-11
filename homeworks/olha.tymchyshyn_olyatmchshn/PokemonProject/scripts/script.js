const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'robotcheck';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './welcome.html';

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

function removeSpaces(email) {
    return email.replace(/\s/g, '');
}

function validPassword(password) {
    return password.length >= 8 && password.length <= 12;
}

function validateForm() {
    deleteErrors();
    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const validEmail = removeSpaces(email);

    if (!isEmail(validEmail)) {
        setErrors({ [ERRORS_CONTAINER_ID]: 'Check your email' });
    }

    if (!validPassword(password)) {
        setErrors({ [ERRORS_CONTAINER_ID]: 'Check your password. The length must be between 8 and 12 characters' });
    }

    if (!checkbox) {
        setErrors({ [ERRORS_CONTAINER_ID]: 'Confirm that you are not a robot' });
    }

    if (isEmail(validEmail) && validPassword(password) && checkbox) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
