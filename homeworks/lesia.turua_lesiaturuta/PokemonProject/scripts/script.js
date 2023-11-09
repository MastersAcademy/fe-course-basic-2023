const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = './get-result.html';

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

// function setErrors(inputData) {
//     const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
//     Object.values(inputData).forEach((error) => {
//         const errorElement = document.createElement('p');
//         errorElement.classList.add('error');
//         errorElement.textContent = error;
//         errorContainerElement.appendChild(errorElement);
//     });
// }

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

const deleteSpaceInString = (string) => string.trim();

function validateForm() {
    let isErrors = false;
    const inputData = {};
    const emailValue = getValueById(EMAIL_INPUT_ID);
    const passwordValue = getValueById(PASSWORD_INPUT_ID);
    const checkboxValue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);
    const emailValueWithoutSpase = deleteSpaceInString(emailValue);
    const passwordValueWithoutSpase = deleteSpaceInString(passwordValue);

    const inputMailEl = document.getElementById(EMAIL_INPUT_ID);
    const inputPassEl = document.getElementById(PASSWORD_INPUT_ID);
    const inputCheckboxEl = document.getElementById(NOT_A_ROBOT_CHECKBOX_ID);

    const mailInfoEl = document.querySelector('[data-mailInfo]');
    const passInfoEl = document.querySelector('[data-passInfo]');
    const checkboxInfoEl = document.querySelector('[data-checkboxInfo]');

    // delete all errors
    deleteErrors();
    inputMailEl.classList.remove('border-error');
    inputPassEl.classList.remove('border-error');
    inputMailEl.addEventListener('input', () => {
        inputMailEl.classList.remove('border-error');
        mailInfoEl.innerHTML = '';
    });

    inputPassEl.addEventListener('input', () => {
        inputPassEl.classList.remove('border-error');
        passInfoEl.innerHTML = '';
    });

    inputCheckboxEl.addEventListener('change', () => {
        checkboxInfoEl.innerHTML = '';
    });

    if (!isEmail(emailValueWithoutSpase)) {
        inputMailEl.classList.add('border-error');
        mailInfoEl.innerHTML = 'Error mail';
        inputData.EMAIL_INPUT_ID = 'Error mail';
        isErrors = true;
    } else {
        inputMailEl.classList.add('border-ok');
    }

    if (!(passwordValueWithoutSpase.length >= 8 && passwordValueWithoutSpase.length <= 12)) {
        inputPassEl.classList.add('border-error');
        passInfoEl.innerHTML = 'Error password';
        inputData.PASSWORD_INPUT_ID = 'Error password';
        isErrors = true;
    } else {
        inputPassEl.classList.add('border-ok');
    }

    if (!checkboxValue) {
        inputData.NOT_A_ROBOT_CHECKBOX_ID = 'Error push checkbox';
        checkboxInfoEl.innerHTML = 'Error push checkbox';
        isErrors = true;
    }

    if (!isErrors) {
        navigateToResultPage();
    } else {
        // set error
        // setErrors(inputData);
    }
}

submitButton.onclick = validateForm;
