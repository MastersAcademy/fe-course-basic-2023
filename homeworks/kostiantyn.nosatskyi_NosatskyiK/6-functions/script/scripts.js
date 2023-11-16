const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
// const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'successful.html';

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
// commented out the features because I didn't use them

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
// function deleteErrors() {
//     const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
//     errorContainerElement.replaceChildren();
// }

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

function isEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

// a function that checks email
function validateEmail(emailTest) {
    // regular expression and method to remove spaces from mail
    const clearEmail = emailTest.replace(/\s/g, '');
    const emailRegex = isEmail(clearEmail);

    if (emailRegex) {
        document.getElementById('output-email').textContent = ('Email вийшов чудовий!');
        // a line that will allow you to check whether spaces have been removed
        console.log(clearEmail);
        return true;
    }
    document.getElementById('output-email').textContent = ('З вашим email поле якась біда...');
    return false;
}

// a function that checks password
function validatePassword(passwordTest) {
    // a regular expression that sets the required length for a password
    const passwordRegex = /^.{8,12}$/;

    if (passwordRegex.test(passwordTest)) {
        document.getElementById('output-password').textContent = ('Password вийшов чудовий!');
        return true;
    }
    document.getElementById('output-password').textContent = ('З вашим password поле якась біда...');
    return false;
}

// a function that checks checkbox
function validateCheckbox(checkboxTest) {
    if (checkboxTest) {
        document.getElementById('output-checkbox').textContent = ('Ви не робот і це чудово!');
        return true;
    }
    document.getElementById('output-checkbox').textContent = ('Встановіть чекбокс щоб переконатись що ви не робот');
    return false;
}

function validateForm(e) {
    e.preventDefault();

    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const checkboxError = validateCheckbox(checkbox);

    if (emailError && passwordError && checkboxError) {
        navigateToResultPage();
    }

    console.info('Підготовка успішна');
}

submitButton.onclick = validateForm;
