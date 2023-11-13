const EMAIL_INPUT_ID = 'e_mail';
const PASSWORD_INPUT_ID = 'pass';
const NOT_A_ROBOT_CHECKBOX_ID = 'check';
const SUBMIT_BUTTON_ID = 'sub__button';
const ERRORS_CONTAINER_ID = 'errors-container';
const RESULT_PAGE_PATH = 'success.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

const email = document.getElementById('e_mail');
const pass = document.getElementById('pass');
const check = document.getElementById('check');
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
    email.classList.remove('error__input');
    pass.classList.remove('error__input');
    check.classList.remove('error__input');
    errorContainerElement.replaceChildren();
}

/**
 * Goes to the page with the result.
 */
function navigateToResultPage() {
    window.location.href = RESULT_PAGE_PATH;
}

// Функция удаления пробелов в email
function delSpaces() {
    email.value = email.value.replace(/\s/g, '');
    return email.value;
}
function isEmail(e) {
    if (e.indexOf(' ') > -1) {
        delSpaces();
    }
    return /\S+@\S+\.\S+/.test(e);
}

function validateForm() {
    const inputData = {};
    /* Присваиваем инпуты переменным */
    const emailInp = getValueById(EMAIL_INPUT_ID).trim();
    const passInp = getValueById(PASSWORD_INPUT_ID);
    const checkInp = getValueById(NOT_A_ROBOT_CHECKBOX_ID);

    // Очистка от ошибок
    deleteErrors();

    // Проверка на формат почты
    if (!isEmail(emailInp)) {
        inputData[EMAIL_INPUT_ID] = 'Неправильно введена почта!';
        email.classList.add('error__input');
    }

    // Проверка на длину поля пароля
    if (passInp.length === 0) {
        inputData[PASSWORD_INPUT_ID] = 'Поле пароля не должно быть пустым';
        pass.classList.add('error__input');
    } else if (passInp.length < 8 || passInp.length > 12) {
        inputData[PASSWORD_INPUT_ID] = 'Пароль должен быть от 8 до 12 символов';
        pass.classList.add('error__input');
    }

    // Проверка Checkbox
    if (!checkInp) {
        inputData[NOT_A_ROBOT_CHECKBOX_ID] = 'Подтвердите, что вы не робот!';
        check.classList.add('error__input');
    }

    // Проверка выпоолнения условий
    if (Object.keys(inputData).length === 0) {
        navigateToResultPage();
    } else {
        setErrors(inputData);
    }
    console.info('Підготовка успішна');
}

submitButton.onclick = validateForm;
