const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const RESULT_PAGE_PATH = './successful.html';
const ERRORS_CONTAINER_PASSWORD_ID = 'errors-container__password';
const ERRORS_CONTAINER_EMAIL_ID = 'errors-container__email';
const ERRORS_CONTAINER_NOT_A_ROBOT_CHECKBOX_ID = 'errors-container__robot';

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
    Object.keys(inputData).forEach((key) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error', 'error__input');
        errorElement.textContent = inputData[key];
        document.getElementById(key).append(errorElement);
    });
}

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const errorContainerElement = document.querySelectorAll('.error');
    errorContainerElement.forEach((e) => e.remove());
}

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function trimEmail(email) {
    return email.replace(/\s+/g, '');
}

function passwordValidate(password) {
    return password.length >= 8 && password.length <= 12;
}

function validateForm() {
    deleteErrors();
    const password = getValueById(PASSWORD_INPUT_ID);
    const email = getValueById(EMAIL_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const cleanedEmail = trimEmail(email);

    if (!cleanedEmail) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Enter your email address' });
    } else if (!isEmail(cleanedEmail)) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Incorrect email format' });
    }

    if (!passwordValidate(password)) {
        setErrors({ [ERRORS_CONTAINER_PASSWORD_ID]: 'Password must be 8 to 12 characters long' });
    }

    if (!checkbox) {
        setErrors({ [ERRORS_CONTAINER_NOT_A_ROBOT_CHECKBOX_ID]: 'The checkbox must be checked' });
    }

    if (isEmail(cleanedEmail) && passwordValidate(password) && checkbox) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
