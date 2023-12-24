const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './Result.html';

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
    const checkedOnSpaceEmail = getValueById(EMAIL_INPUT_ID).replace(/\s/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const notRobotCheckbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID); console.info('Підготовка успішна');
    deleteErrors();

    if (!isEmail(checkedOnSpaceEmail) || checkedOnSpaceEmail.length === 0) {
        setErrors({ [EMAIL_INPUT_ID]: 'Email is not correct' });
        return;
    }
    if (password.length < 8) {
        setErrors({ [PASSWORD_INPUT_ID]: 'The password must be at least 8 characters long.' });
        return;
    }
    if (password.length > 13) {
        setErrors({ [[PASSWORD_INPUT_ID]]: 'The password shouldn`t be longer than 12 characters.' });
        return;
    }
    if (!notRobotCheckbox) {
        setErrors({ [NOT_A_ROBOT_CHECKBOX_ID]: 'Confirm that you are not a robot' });
        return;
    }

    navigateToResultPage();
}
submitButton.onclick = validateForm;
