const EMAIL_INPUT_ID ='email';
const PASSWORD_INPUT_ID = 'pwd';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit-button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './message.html';

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

function validateForm() {
    deleteErrors();
    const password = getValueById(PASSWORD_INPUT_ID);
    const email = getValueById(EMAIL_INPUT_ID).replace(/\s/g, '');
    const emailWithoutSpaces = document.getElementById(EMAIL_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    let isEmailValid = false;
    let isPasswordValid = false;
    let isCheckboxValid = false;

    if (password.length !== 0) {
        if (password.length >= 8 && password.length <= 12) {
            isPasswordValid = true;
        } else {
            setErrors({ PASSWORD_INPUT_ID: 'Password length should be from 8 to 12 characters' });
        }
    } else {
        setErrors({ PASSWORD_INPUT_ID: 'Please, fill the field' });
    }

    if (checkbox) {
        isCheckboxValid = true;
    } else {
        setErrors({ NOT_A_ROBOT_CHECKBOX_ID: 'Confirm that you are not a robot. Please, check the box.' });
    }

    if (email.length !== 0) {
        emailWithoutSpaces.value = email;
        if (isEmail(email)) {
            isEmailValid = true;
        } else {
            setErrors({ EMAIL_INPUT_ID: 'Please, fill the field in format Text@LocalDomen.Domen' });
        }
    } else {
        setErrors({ EMAIL_INPUT_ID: 'Please, fill the field' });
    }

    if (isEmailValid && isPasswordValid && isCheckboxValid) {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
