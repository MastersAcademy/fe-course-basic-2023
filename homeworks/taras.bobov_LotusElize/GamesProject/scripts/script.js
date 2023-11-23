const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'not_a_robot';
const SUBMIT_BUTTON_ID = 'login_button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'success.html';
// start
function deleteErrors() {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.innerHTML = '';
    const fields = ['email', 'password', 'not_a_robot'];
    fields.forEach((field) => {
        const fieldContainer = document.getElementById(`${field}_container`);
        fieldContainer.innerHTML = '';
    });
}

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputData) {
    Object.keys(inputData).forEach((fieldId) => {
        const error = inputData[fieldId];

        const errorElement = document.createElement('span');
        errorElement.classList.add('error');
        errorElement.textContent = error;

        const fieldContainer = document.getElementById(`${fieldId}_container`);
        fieldContainer.appendChild(errorElement);
    });
}

function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

function isEmail(email) {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmedEmail);
}

function validateForm() {
    deleteErrors();

    const emailInput = document.getElementById(EMAIL_INPUT_ID);
    emailInput.value = emailInput.value.replace(/\s/g, '');

    const email = getValueById(EMAIL_INPUT_ID).trim();
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkboxValue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const errors = {};

    if (!email) {
        errors[EMAIL_INPUT_ID] = 'This field is required';
    } else if (!isEmail(email)) {
        errors[EMAIL_INPUT_ID] = 'Invalid email format';
    }

    if (!password) {
        errors[PASSWORD_INPUT_ID] = 'This field is required';
    } else if (password.length < 8 || password.length > 12) {
        errors[PASSWORD_INPUT_ID] = 'Password must be between 8 and 12 characters';
    }

    if (!checkboxValue) {
        errors[NOT_A_ROBOT_CHECKBOX_ID] = 'Checkbox must be checked';
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        navigateToResultPage();
    }
}

submitButton.addEventListener('click', validateForm);
