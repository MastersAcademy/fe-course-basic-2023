const EMAIL_INPUT_ID = 'input__email';
const PASSWORD_INPUT_ID = 'input__password';
const NOT_A_ROBOT_CHECKBOX_ID = 'input__checkbox';
const SUBMIT_BUTTON_ID = 'button__submit';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'success.html';

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
    // Step 1: Delete all existing errors
    deleteErrors();

    // Step 2: Get the values from the input fields and checkbox
    let email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const notARobot = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    // Step 3: Remove all spaces from the email
    email = email.replace(/\s/g, '');

    // Step 4: Check that all fields are filled in
    const inputData = {};
    if (!email) {
        inputData[EMAIL_INPUT_ID] = 'Email is required';
    }
    if (!password) {
        inputData[PASSWORD_INPUT_ID] = 'Password is required';
    }
    if (!notARobot) {
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'You must confirm that you are not a robot';
    }

    // Step 5: Check that the email is in the correct format
    if (email && !isEmail(email)) {
        inputData[EMAIL_INPUT_ID] = 'Email is not valid';
    }

    // Step 6: Check that the password is between 8 and 12 characters long
    if (password && (password.length < 8 || password.length > 12)) {
        inputData[PASSWORD_INPUT_ID] = 'Password must be between 8 and 12 characters';
    }

    // Step 7: If there are any errors, display them to the user
    if (Object.keys(inputData).length > 0) {
        setErrors(inputData);
        return;
    }

    // Step 8: If all conditions are met, redirect the user to the result page
    navigateToResultPage();
}

window.onload = function () {
    const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
    submitButton.onclick = validateForm;
};
