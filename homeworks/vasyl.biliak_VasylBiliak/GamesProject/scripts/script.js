const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit_btn';
const ERRORS_CONTAINER_EMAIL_ID = 'errors-container-email';
const ERRORS_CONTAINER_PASSWORD_ID = 'errors-container-password';
const ERRORS_CONTAINER_ID = 'errors-container-checkbox';
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
function setErrors(inputData) {
    Object.keys(inputData).forEach((key) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = inputData[key];
        document.getElementById(key).parentElement.after(errorElement);
    });
}

/**
 * Delete all errors from errors container.
 */
function deleteErrors() {
    const errorContainerElements = document.querySelectorAll('.error');
    errorContainerElements.forEach((el) => el.remove());
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

function isLengthPassword(password) {
    return password.length >= 8 && password.length <= 12;
}

function removeSpaces(inputString) {
    return inputString.replace(/\s/g, '');
}

function validateForm() {
    deleteErrors();
    const emailValue = getValueById(EMAIL_INPUT_ID);
    const passwordValue = getValueById(PASSWORD_INPUT_ID);
    const checkboxValue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const cleanedEmail = removeSpaces(emailValue); // Email cleaned of spaces

    if (!cleanedEmail) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Enter your email' });
    } else if (!isEmail(cleanedEmail)) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Email must be in the format email@localDomen.domen' });
    }

    if (!passwordValue) {
        setErrors({ [ERRORS_CONTAINER_PASSWORD_ID]: 'Enter your password' });
    } else if (!isLengthPassword(passwordValue)) {
        setErrors({ [ERRORS_CONTAINER_PASSWORD_ID]: 'Password must be between 8 and 12 characters' });
    }

    if (!checkboxValue) {
        setErrors({ [ERRORS_CONTAINER_ID]: 'Check this checkbox' });
    }

    if (isEmail(cleanedEmail) && isLengthPassword(passwordValue) && checkboxValue) {
        navigateToResultPage();
    }
}
submitButton.onclick = validateForm;
