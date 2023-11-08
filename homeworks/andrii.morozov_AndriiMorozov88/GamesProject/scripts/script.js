const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit_button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './index.success';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputData) {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    errorContainerElement.classList.add('error');
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement('p');
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

function deleteWhiteSpaces(text) {
    const whiteSpace = /\s/g;
    const textWithoutSpaces = text.replace(whiteSpace, '');
    return textWithoutSpaces;
}

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateForm() {
    deleteErrors();
    const errorObject = {};
    let error = false;
    const email = deleteWhiteSpaces(getValueById('email'));
    const password = getValueById('password');
    const checkbox = getValueById('checkbox');
    if (!isEmail(email)) {
        errorObject[EMAIL_INPUT_ID] = 'error email';
        error = true;
    }
    if (password.length < 3 || password.length > 8) {
        errorObject[PASSWORD_INPUT_ID] = 'password have to be not less 3 and not more 8 symbols';
        error = true;
    }
    if (!checkbox) {
        errorObject[NOT_A_ROBOT_CHECKBOX_ID] = 'confirm "I am not a robot"';
        error = true;
    }
    if (error) {
        setErrors(errorObject);
    } else { navigateToResultPage(); }
}
submitButton.onclick = validateForm;
