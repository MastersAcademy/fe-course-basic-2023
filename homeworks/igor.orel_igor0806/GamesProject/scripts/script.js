const EMAIL_INPUT_ID = 'email_input';
const PASSWORD_INPUT_ID = 'password_input';
const NOT_A_ROBOT_CHECKBOX_ID = 'not_a_robot_checkbox';
const SUBMIT_BUTTON_ID = 'submit_button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './succes.html';

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

    const email = getValueById(EMAIL_INPUT_ID).trim().replace(/\s+/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const notARobot = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    if (!email || !password) {
        setErrors({ [EMAIL_INPUT_ID]: 'Email is required', [PASSWORD_INPUT_ID]: 'Password is required' });
        return;
    }

    if (!isEmail(email)) {
        setErrors({ [EMAIL_INPUT_ID]: 'Wrong email address' });
        return;
    }

    if (password.length < 8 || password.length > 12) {
        setErrors({ [PASSWORD_INPUT_ID]: 'Password must be 8 to 12 numbers' });
        return;
    }

    if (!notARobot) {
        setErrors({ [NOT_A_ROBOT_CHECKBOX_ID]: 'Check checkbox' });
        return;
    }

    navigateToResultPage();
}

submitButton.onclick = validateForm;
