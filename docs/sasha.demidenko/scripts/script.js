const EMAIL_INPUT_ID = 'email-input';
const PASSWORD_INPUT_ID = 'password-input';
const NOT_A_ROBOT_CHECKBOX_ID = 'not-a-robot';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
const passwordHide = document.getElementById(PASSWORD_INPUT_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputData) {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = error;
        errorContainerElement.appendChild(errorElement);
    });
}

function deleteErrors() {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.replaceChildren();
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

passwordHide.addEventListener('input', function () {
    this.setCustomValidity('');
    this.value = '*'.repeat(this.value.length);
});

function validateForm() {
    deleteErrors();

    const email = getValueById(EMAIL_INPUT_ID).replace(/\s+/g, '');
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkId = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const error = {};

    if (!isEmail(email)) {
        error[EMAIL_INPUT_ID] = 'Email має бути в форматі email@localDomen.domen.';
    }

    if (password.length < 8 || password.length > 12) {
        error[PASSWORD_INPUT_ID] = 'Password має бути від 8 до 12 будь-яких символів';
    }

    if (!checkId) {
        error[NOT_A_ROBOT_CHECKBOX_ID] = 'Чекбокс має бути чекнутим';
    }

    if (Object.keys(error).length > 0) {
        setErrors(error);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
