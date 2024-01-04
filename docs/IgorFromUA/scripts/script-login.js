const EMAIL_INPUT_ID = 'email-input';
const PASSWORD_INPUT_ID = 'password-input';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox-input';
const SUBMIT_BUTTON_ID = 'submit-button';
const RESULT_PAGE_PATH = './successful-login.html';

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

function deleteErrors() {
    const errorContainerElements = document.querySelectorAll('.error');
    errorContainerElements.forEach((el) => el.remove());
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isLengthPassword(password) {
    return password.length >= 8 && password.length <= 12;
}

function cutSpaces(text) {
    return text.replaceAll(' ', '');
}

function validateForm() {
    deleteErrors();
    const emailValue = getValueById(EMAIL_INPUT_ID);
    const passwordValue = getValueById(PASSWORD_INPUT_ID);
    const checkboxValue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const trimEmail = cutSpaces(emailValue);
    if (!isEmail(trimEmail)) setErrors({ [EMAIL_INPUT_ID]: 'you entered an incorrect email' });
    if (!isLengthPassword(passwordValue)) setErrors({ [PASSWORD_INPUT_ID]: 'error password: password length should be 8 - 12 characters' });
    if (!checkboxValue) setErrors({ [NOT_A_ROBOT_CHECKBOX_ID]: 'check this checkbox' });
    if (isEmail(trimEmail) && isLengthPassword(passwordValue) && checkboxValue) {
        navigateToResultPage();
    }
}
submitButton.onclick = validateForm;
