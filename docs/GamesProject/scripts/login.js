const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'submit_btn';
const ERRORS_CONTAINER_EMAIL_ID = 'errors-container-email';
const ERRORS_CONTAINER_PASSWORD_ID = 'errors-container-password';
const ERRORS_CONTAINER_ID = 'errors-container-checkbox';
const RESULT_PAGE_PATH = './result.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

/**
 * Return input value by id.
 * @param {string} elementId
 * @return {string|boolean} input value
 */
const getValueById = (elementId) => {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
};

/**
 * Add errors to errors container.
 * @param {Object} inputData in format like: { [input_id]: error_text, ... }
 */
const setErrors = (inputData) => {
    Object.keys(inputData).forEach((key) => {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = inputData[key];
        document.getElementById(key).parentElement.after(errorElement);
    });
};

/**
 * Delete all errors from errors container.
 */
const deleteErrors = () => {
    const errorContainerElements = document.querySelectorAll('.error');
    errorContainerElements.forEach((el) => el.remove());
};

/**
 * Goes to the page with the result.
 */
const navigateToResultPage = () => {
    window.location.assign(RESULT_PAGE_PATH);
};

const isEmail = (email) => /\S+@\S+\.\S+/.test(email);

const isLengthPassword = (password) => password.length >= 8 && password.length <= 12;

const removeSpaces = (inputString) => inputString.replace(/\s/g, '');

const validateEmail = (emailValue) => {
    if (!emailValue) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Enter your email' });
    } else if (!isEmail(emailValue)) {
        setErrors({ [ERRORS_CONTAINER_EMAIL_ID]: 'Email must be in the format email@localDomen.domen' });
    }
};

const validatePassword = (passwordValue) => {
    if (!passwordValue) {
        setErrors({ [ERRORS_CONTAINER_PASSWORD_ID]: 'Enter your password' });
    } else if (!isLengthPassword(passwordValue)) {
        setErrors({ [ERRORS_CONTAINER_PASSWORD_ID]: 'Password must be between 8 and 12 characters' });
    }
};

const validateCheckbox = (checkboxValue) => {
    if (!checkboxValue) {
        setErrors({ [ERRORS_CONTAINER_ID]: 'Check this checkbox' });
    }
};

const validateForm = () => {
    deleteErrors();
    const emailValue = removeSpaces(getValueById(EMAIL_INPUT_ID));
    const passwordValue = getValueById(PASSWORD_INPUT_ID);
    const checkboxValue = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    validateEmail(emailValue);
    validatePassword(passwordValue);
    validateCheckbox(checkboxValue);

    if (isEmail(emailValue) && isLengthPassword(passwordValue) && checkboxValue) {
        navigateToResultPage();
    }
};

submitButton.addEventListener('click', validateForm);
