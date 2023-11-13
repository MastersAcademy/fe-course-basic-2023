const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
// const errorsContainer = document.getElementById(ERRORS_CONTAINER_ID);
const passwordInput = document.getElementById(PASSWORD_INPUT_ID);
// const checkboxInput = document.getElementById(NOT_A_ROBOT_CHECKBOX_ID);
const emailInput = document.getElementById(EMAIL_INPUT_ID);

// Return input value by id.
// @param {string} elementId
// @return {string|boolean} input value

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

// Add errors to errors container.
// @param {Object} inputData in format like: { [input_id]: error_text, ... }

function setErrors(inputData) {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;
        errorContainerElement.appendChild(errorElement);
    });
}

// Delete all errors from errors container.

function deleteErrors() {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.replaceChildren();
}

// Goes to the page with the result.

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function passwordLength(password) {
    return password.length >= 8 && password.length <= 12;
}

function validateForm() {
    const inputData = {};
    // place your code here
    if (!getValueById(NOT_A_ROBOT_CHECKBOX_ID)) {
        deleteErrors();
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Checkbox is not checked';
    }
    if (!isEmail(emailInput.value)) {
        deleteErrors();
        inputData[EMAIL_INPUT_ID] = 'Invalid email format';
    }
    if (!passwordLength(passwordInput.value)) {
        deleteErrors();
        inputData[PASSWORD_INPUT_ID] = 'Password length should be between 8 and 12 characters';
    }
    if (Object.keys(inputData).length > 0) {
        setErrors(inputData);
    } else {
        deleteErrors();
        navigateToResultPage();
        console.info('Підготовка успішна');
    }
}

submitButton.onclick = validateForm;
