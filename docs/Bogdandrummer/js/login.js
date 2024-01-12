import { burgerButton, burgerAction } from './header.js';

burgerButton.addEventListener('click', burgerAction);

const EMAIL_INPUT_ID = 'e_mail';
const PASSWORD_INPUT_ID = 'pass';
const NOT_A_ROBOT_CHECKBOX_ID = 'check';
const SUBMIT_BUTTON_ID = 'sub__button';
const ERRORS_EMAIL_ID = 'email__error';
const ERRORS_PASSWORD_ID = 'password__error';
const ERRORS_CHECK_ID = 'check__error';
const RESULT_PAGE_PATH = 'success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
const email = document.getElementById('e_mail');
const pass = document.getElementById('pass');
const check = document.getElementById('check');

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(errorId, error) {
    const errorContainerElement = document.getElementById(errorId);
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.textContent = error;
    errorContainerElement.appendChild(errorElement);
}

function deleteErrors() {
    const errorsEmail = document.getElementById(ERRORS_EMAIL_ID);
    const errorsPass = document.getElementById(ERRORS_PASSWORD_ID);
    const errorsCheck = document.getElementById(ERRORS_CHECK_ID);
    email.classList.remove('error__input');
    pass.classList.remove('error__input');
    check.classList.remove('error__input');
    errorsEmail.replaceChildren();
    errorsPass.replaceChildren();
    errorsCheck.replaceChildren();
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function delSpaces() {
    email.value = email.value.replace(/\s/g, '');
    return email.value;
}
function isEmail(e) {
    delSpaces();
    return /\S+@\S+\.\S+/.test(e);
}

function validateForm() {
    const inputData = {};
    const emailInp = getValueById(EMAIL_INPUT_ID).trim();
    const passInp = getValueById(PASSWORD_INPUT_ID);
    const checkInp = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    deleteErrors();

    if (emailInp === '') {
        inputData[EMAIL_INPUT_ID] = 'Input email';
        setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
        email.classList.add('error__input');
    } else
    if (!isEmail(emailInp)) {
        inputData[EMAIL_INPUT_ID] = 'Input correct email';
        setErrors(ERRORS_EMAIL_ID, inputData[EMAIL_INPUT_ID]);
        email.classList.add('error__input');
    }
    if (passInp.length === 0) {
        inputData[PASSWORD_INPUT_ID] = 'Input password';
        setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
        pass.classList.add('error__input');
    } else
    if (passInp.length < 8 || passInp.length > 12) {
        inputData[PASSWORD_INPUT_ID] = 'The password must be longer than 8 and shorter than 12 characters';
        setErrors(ERRORS_PASSWORD_ID, inputData[PASSWORD_INPUT_ID]);
        pass.classList.add('error__input');
    }

    if (!checkInp) {
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Confirm, that you are not a robot';
        setErrors(ERRORS_CHECK_ID, inputData[NOT_A_ROBOT_CHECKBOX_ID]);
        check.classList.add('error__input');
    }

    if (Object.keys(inputData).length === 0) {
        navigateToResultPage();
    }
    console.info('Підготовка успішна');
}
submitButton.onclick = validateForm;
