const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button-login';
// const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'result.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function deleteErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => element.remove());
}

function setErrors(inputData) {
    deleteErrors();

    Object.entries(inputData).forEach(([elementId, errorText]) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = errorText;

        const inputContainer = document.getElementById(elementId).parentElement;
        inputContainer.appendChild(errorElement);
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

    const email = getValueById(EMAIL_INPUT_ID).trim();
    const password = getValueById(PASSWORD_INPUT_ID);
    const notARobotChecked = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    const inputData = {};

    if (!isEmail(email)) {
        inputData[EMAIL_INPUT_ID] = 'Incorrect email';
    }

    if (password.length < 8 || password.length > 12) {
        inputData[PASSWORD_INPUT_ID] = 'Password must have 8-12 characters';
    }

    if (!notARobotChecked) {
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Please, confirm you are not a robot';
    }

    if (Object.keys(inputData).length === 0) {
        navigateToResultPage();
    } else {
        setErrors(inputData);
    }
}

submitButton.onclick = validateForm;
