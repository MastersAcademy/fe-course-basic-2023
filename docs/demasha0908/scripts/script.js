const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const EMAIL_ERROR_ID = 'email__error';
const PASSWORD_ERROR_ID = 'password__error';
const CHECKBOX_ERROR_ID = 'checkbox__error';
const RESULT_PAGE_PATH = './success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

const inputData = {
    [EMAIL_INPUT_ID]: 'Email must be in the format email@localDomen.domen',
    [PASSWORD_INPUT_ID]: 'Password must be between 8 and 12 characters',
    [NOT_A_ROBOT_CHECKBOX_ID]: 'The checkbox must be checked',
};

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

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const errorEmail = document.getElementById(EMAIL_ERROR_ID);
    const errorPassword = document.getElementById(PASSWORD_ERROR_ID);
    const errorCheckbox = document.getElementById(CHECKBOX_ERROR_ID);
    errorEmail.replaceChildren();
    errorPassword.replaceChildren();
    errorCheckbox.replaceChildren();
}

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    const trimEmail = email.replace(/\s/g, '');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(trimEmail);
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkboxTrue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    if (!isEmail(email)) {
        setErrors(EMAIL_ERROR_ID, inputData[EMAIL_INPUT_ID]);
        return;
    }

    if (password.length < 8 || password.length > 12) {
        setErrors(PASSWORD_ERROR_ID, inputData[PASSWORD_INPUT_ID]);
        return;
    }

    if (!checkboxTrue) {
        setErrors(CHECKBOX_ERROR_ID, inputData[NOT_A_ROBOT_CHECKBOX_ID]);
        return;
    }

    navigateToResultPage();
}

submitButton.onclick = validateForm;
