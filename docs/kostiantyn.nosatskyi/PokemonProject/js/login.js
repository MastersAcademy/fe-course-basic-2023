const EMAIL_INPUT_ID = 'email';
const PASSWORD_INPUT_ID = 'password';
const NOT_A_ROBOT_CHECKBOX_ID = 'checkbox';
const SUBMIT_BUTTON_ID = 'button';
const RESULT_PAGE_PATH = 'successful.html';

const submitButton = document.getElementById(SUBMIT_BUTTON_ID);

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

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
        document.getElementById('output-email').textContent = ('The email out great!');
        document.getElementById('output-email').style.color = '#00ba37';
        // a line that will allow you to check whether spaces have been removed
        console.log(clearEmail);
        return true;
    }
    document.getElementById('output-email').textContent = ('You have problems with your email...');
    document.getElementById('output-email').style.color = '#EF4934';
    return false;
}

// a function that checks password
function validatePassword(passwordTest) {
    // a regular expression that sets the required length for a password
    const passwordRegex = /^.{8,12}$/;

    if (passwordRegex.test(passwordTest)) {
        document.getElementById('output-password').textContent = ('The password out great!!');
        document.getElementById('output-password').style.color = '#00ba37';
        return true;
    }
    document.getElementById('output-password').textContent = ('You have problems with your password...');
    document.getElementById('output-password').style.color = '#EF4934';
    return false;
}

// a function that checks checkbox
function validateCheckbox(checkboxTest) {
    if (checkboxTest) {
        document.getElementById('output-checkbox').textContent = ('You are not a robot and that\'s great!');
        document.getElementById('output-checkbox').style.color = '#00ba37';
        return true;
    }
    document.getElementById('output-checkbox').textContent = ('Check the checkbox to make sure you are not a robot');
    document.getElementById('output-checkbox').style.color = '#EF4934';
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
