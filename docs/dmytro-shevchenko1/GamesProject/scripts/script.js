const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'check';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './success-page.html';

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

function trimSpaces(input) {
    return input.replace(/\s/g, '');
}

function validateForm() {
    deleteErrors();

    const email = trimSpaces(getValueById(EMAIL_INPUT_ID));
    const password = getValueById(PASSWORD_INPUT_ID);
    const isNotARobot = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    const inputData = {};

    if (!email) {
        inputData[EMAIL_INPUT_ID] = 'Email is required';
    } else if (!isEmail(email)) {
        inputData[EMAIL_INPUT_ID] = 'Invalid email address';
    }

    if (!password) {
        inputData[PASSWORD_INPUT_ID] = 'Password is required';
    } else if (password.length < 8 || password.length > 12) {
        inputData[PASSWORD_INPUT_ID] = 'Password must be between 8 and 12 characters';
    }

    if (!isNotARobot) {
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Confirm that you are not a robot';
    }

    if (Object.keys(inputData).length > 0) {
        setErrors(inputData);
        return;
    }

    navigateToResultPage();
}

submitButton.onclick = validateForm;
