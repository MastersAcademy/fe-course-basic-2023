const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'check';
const SUBMIT_BUTTON_ID = 'submit-button';
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

function isPasswordLength(password) {
    return password.length >= 8 && password.length <= 12;
}

function deleteSpaces(str) {
    return str.replace(/\s/g, '');
}

function validateForm() {
    const email = deleteSpaces(getValueById(EMAIL_INPUT_ID));
    const password = getValueById(PASSWORD_INPUT_ID);
    const check = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    deleteErrors();

    if (!email) {
        setErrors({ [EMAIL_INPUT_ID]: 'The email field must be filled' });
    } else if (!isEmail(email)) {
        setErrors({ [EMAIL_INPUT_ID]: 'Email is not valid' });
    }

    if (!password) {
        setErrors({ [PASSWORD_INPUT_ID]: 'The password field must be filled' });
    } else if (!isPasswordLength(password)) {
        setErrors({ [PASSWORD_INPUT_ID]: 'Password must be between 8 and 12 characters' });
    }

    if (!check) {
        setErrors({ [NOT_A_ROBOT_CHECKBOX_ID]: 'Please check not a robot checkbox' });
    }

    if (isEmail(email) && isPasswordLength(password) && check) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
