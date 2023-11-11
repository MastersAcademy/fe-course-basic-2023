const submitButton = document.getElementById('submit_button');

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const type = element.getAttribute('type');
    return type === 'checkbox' ? element.checked : element.value;
}

function setErrors(inputData, elementId) {
    const elementError = document.getElementById(elementId);
    const errorParagraf = document.createElement('p');
    errorParagraf.innerHTML = inputData[elementId];
    errorParagraf.classList.add('error');
    elementError.insertAdjacentElement('afterend', errorParagraf);
}

function deleteErrors() {
    const arrorParagrafArray = document.querySelectorAll('.error');
    arrorParagrafArray.forEach((element) => {
        element.remove();
    });
}

function navigateToResultPage() {
    window.location.href = 'success.html';
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
        errorObject.email = 'It is not an e-mail adres';
        setErrors(errorObject, 'email');
        error = true;
    }
    if (password.length < 3 || password.length > 8) {
        errorObject.password = 'Password have to be not less 3 and not more 8 symbols';
        setErrors(errorObject, 'password');
        error = true;
    }
    if (!checkbox) {
        errorObject.label_checkbox = 'Confirm "I am not a robot"';
        setErrors(errorObject, 'label_checkbox');
        error = true;
    }
    if (!error) navigateToResultPage();
}
submitButton.onclick = validateForm;
