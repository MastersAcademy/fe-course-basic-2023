const EMAIL_INPUT_ID = "email-input-id";
const PASSWORD_INPUT_ID = "password-input-id";
const NOT_A_ROBOT_CHECKBOX_ID = "not-a-robot-checkbox-id";
const SUBMIT_BUTTON_ID = "submit-button-id";
const ERRORS_CONTAINER_ID = "errors-container";
const RESULT_PAGE_PATH = "LoginDone.html";

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);
/**
 * Return input value by id.
 * @param {string} elementId
 * @return {string|boolean} input value
 */
function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute("type");
    return type === "checkbox" ? element.checked : element.value;
}

/**
 * Add errors to errors container.
 * @param {Object} inputData in format like: { [input_id]: error_text, ... }
 */
function setErrors(inputData) {
    const errorContainerElement = document.getElementById(ERRORS_CONTAINER_ID);
    Object.values(inputData).forEach((error) => {
        const errorElement = document.createElement("p");
        errorElement.classList.add("error");
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
    const showEmail = email.trim();
    const emailText = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailText.test(showEmail);
}

function validateForm() {
    deleteErrors();
    const errors = {};
    const email = getValueById(EMAIL_INPUT_ID);
    const password = getValueById(PASSWORD_INPUT_ID);
    const checkbox = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    if (!isEmail(email)) {
        errors [EMAIL_INPUT_ID] = "Enter correct e-mail";
    }
    if (password.length < 8 || password.length > 12) {
        errors [PASSWORD_INPUT_ID] = "Password must be from 8 to 12 symbols";
    }
    if (!checkbox) {
        errors [NOT_A_ROBOT_CHECKBOX_ID] = "Are you a robot?";
    }
    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        navigateToResultPage();
    }
}

submitButton.onclick = validateForm;
