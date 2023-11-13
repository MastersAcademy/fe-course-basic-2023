const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const RESULT_PAGE_PATH = './result.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
const emailErrorContainer = document.getElementById('email_error');
const passwordErrorContainer = document.getElementById('password_error');
const checkboxErrorContainer = document.getElementById('checkbox_error');

const errorMessages = {
    email: 'Valid email format is email@localDomen.domen',
    password: 'The password must contain from 8 to 12 characters',
    checkbox: 'Please confirm that you are not a robot',
};

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}
function setErrors(errorMessage, errorContainer) {
    errorContainer.innerHTML = `<p class="error">${errorMessage}</p>`;
}

function deleteErrors() {
    emailErrorContainer.innerHTML = '';
    passwordErrorContainer.innerHTML = '';
    checkboxErrorContainer.innerHTML = '';
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID).replace(/\s/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkboxChecked = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    if (!isEmail(email)) {
        setErrors(errorMessages.email, emailErrorContainer);
    } else if (password.length < 8 || password.length > 12) {
        setErrors(errorMessages.password, passwordErrorContainer);
    } else if (!checkboxChecked) {
        setErrors(errorMessages.checkbox, checkboxErrorContainer);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
