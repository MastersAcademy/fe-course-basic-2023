const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit';
const ERRORS_CONTAINER_ID = 'erros-container';
const RESULT_PAGE_PATH = './login-success.html';

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

function trimEmail(email) {
    return email.replace(/\s/g, '');
}

function isPassword(password) {
    const trimmedPassword = password.trim();
    return trimmedPassword.length >= 8 && trimmedPassword.length <= 12;
}

function isChecked(checkboxFlag) {
    return checkboxFlag;
}

function validateForm() {
    const errorMessages = {
        [EMAIL_INPUT_ID]: 'Халепа... Перевірте формат пошти (приклад: email@localDomen.domen)',
        [PASSWORD_INPUT_ID]: 'Упс... Довжина пароля має бути у діапазоні від 8 до 12 символів.',
        [NOT_A_ROBOT_CHECKBOX_ID]: 'Ви шо, робот? Жмакніть на чекбокс!',
    };

    const formValues = {
        [EMAIL_INPUT_ID]: getValueById(EMAIL_INPUT_ID),
        [PASSWORD_INPUT_ID]: getValueById(PASSWORD_INPUT_ID),
        [NOT_A_ROBOT_CHECKBOX_ID]: getValueById(NOT_A_ROBOT_CHECKBOX_ID),
    };

    deleteErrors();

    let hasErrors = false;

    Object.entries(formValues).forEach(([inputId, value]) => {
        const isValid = (inputId === EMAIL_INPUT_ID && isEmail(trimEmail(value)))
            || (inputId === PASSWORD_INPUT_ID && isPassword(value))
            || (inputId === NOT_A_ROBOT_CHECKBOX_ID && isChecked(value));

        if (!isValid) {
            setErrors({ [inputId]: errorMessages[inputId] });
            hasErrors = true;
        }
    });

    if (!hasErrors) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
