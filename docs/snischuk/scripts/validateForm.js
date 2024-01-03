const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit';
const RESULT_PAGE_PATH = './login-success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputId, errorMessage) {
    const inputElement = document.getElementById(inputId);
    const associatedLabels = inputElement.labels;

    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.setAttribute('data-error', '');
    errorElement.textContent = errorMessage;

    associatedLabels[0].insertAdjacentElement('afterend', errorElement);
}

function deleteErrors() {
    const errorElement = document.querySelectorAll('[data-error]');
    errorElement.forEach((element) => element.remove());
}

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
    deleteErrors();

    const errorMessages = {
        [EMAIL_INPUT_ID]: 'Please fill in the correct email (format example: email@localdomen.domen)',
        [PASSWORD_INPUT_ID]: 'Oops... The password length should be in the range of 8 to 12 characters.',
        [NOT_A_ROBOT_CHECKBOX_ID]: 'Are you a robot? Click on the checkbox!',
    };

    const formValues = {
        [EMAIL_INPUT_ID]: getValueById(EMAIL_INPUT_ID),
        [PASSWORD_INPUT_ID]: getValueById(PASSWORD_INPUT_ID),
        [NOT_A_ROBOT_CHECKBOX_ID]: getValueById(NOT_A_ROBOT_CHECKBOX_ID),
    };

    let hasErrors = false;

    Object.entries(formValues).forEach(([inputId, value]) => {
        const isValid = (inputId === EMAIL_INPUT_ID && isEmail(trimEmail(value)))
            || (inputId === PASSWORD_INPUT_ID && isPassword(value))
            || (inputId === NOT_A_ROBOT_CHECKBOX_ID && isChecked(value));

        if (!isValid) {
            setErrors(inputId, errorMessages[inputId]);
            hasErrors = true;
        }
    });

    if (!hasErrors) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
