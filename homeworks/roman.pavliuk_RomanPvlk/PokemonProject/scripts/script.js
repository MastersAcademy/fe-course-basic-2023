const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const RESULT_PAGE_PATH = './result.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

const errorContainers = {
    email: document.getElementById('email_error'),
    password: document.getElementById('password_error'),
    checkbox: document.getElementById('checkbox_error'),
};

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

function setErrors(errors) {
    Object.entries(errors).forEach(([field, errorMessage]) => {
        errorContainers[field].innerHTML = `<p class="error">${errorMessage}</p>`;
    });
}

function deleteErrors() {
    Object.values(errorContainers).forEach((container) => {
        container.innerHTML = '';
    });
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

    const errors = {};

    if (!isEmail(email)) {
        errors.email = errorMessages.email;
    }

    if (password.length < 8 || password.length > 12) {
        errors.password = errorMessages.password;
    }

    if (!checkboxChecked) {
        errors.checkbox = errorMessages.checkbox;
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
