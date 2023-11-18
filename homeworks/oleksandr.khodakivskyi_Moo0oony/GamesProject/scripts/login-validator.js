const EMAIL_INPUT_ID = 'email_address';
const PASSWORD_INPUT_ID = 'pswrd';
const NOT_A_ROBOT_CHECKBOX_ID = 'login_robot';
const SUBMIT_BUTTON_ID = 'submit_button';
const EMAIL_ERROR_CONTAINER_ID = 'email-error-container';
const PASSWORD_ERROR_CONTAINER_ID = 'password-error-container';
const CHECKBOX_ERROR_CONTAINER_ID = 'checkbox-error-container';
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
function setErrors(errorContainerId, error) {
    const errorContainerElement = document.getElementById(errorContainerId);
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.textContent = error;
    errorContainerElement.appendChild(errorElement);
}

const inputData = {
    [EMAIL_INPUT_ID]: 'Email must be in format "email@localDomain.domain"',
    [PASSWORD_INPUT_ID]: 'Password must be at least 8 and maximum of 12 characters',
    [NOT_A_ROBOT_CHECKBOX_ID]: 'Checkbox must be checked to submit',
};

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const emailErrorContainerElement = document.getElementById(EMAIL_ERROR_CONTAINER_ID);
    const passwordErrorContainerElement = document.getElementById(PASSWORD_ERROR_CONTAINER_ID);
    const checkboxErrorContainerElement = document.getElementById(CHECKBOX_ERROR_CONTAINER_ID);
    emailErrorContainerElement.replaceChildren();
    passwordErrorContainerElement.replaceChildren();
    checkboxErrorContainerElement.replaceChildren();
}

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    const trimmedEmail = email.trim();
    const correctEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    return correctEmail.test(trimmedEmail);
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    let isValid = true;

    if (!isEmail(email)) {
        setErrors(EMAIL_ERROR_CONTAINER_ID, inputData[EMAIL_INPUT_ID]);
        isValid = false;
    }

    if (password.length < 8 || password.length > 12) {
        setErrors(PASSWORD_ERROR_CONTAINER_ID, inputData[PASSWORD_INPUT_ID]);
        isValid = false;
    }

    if (!checkbox) {
        setErrors(CHECKBOX_ERROR_CONTAINER_ID, inputData[NOT_A_ROBOT_CHECKBOX_ID]);
        isValid = false;
    }

    if (!isValid) { return; }

    navigateToResultPage();
}

submitButton.onclick = validateForm;
