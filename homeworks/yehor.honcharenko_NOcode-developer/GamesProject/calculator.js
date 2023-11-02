// Вибираємо HTML елементи / Selecting HTML elements
const inputOne = document.querySelector('#number__first');
const inputTwo = document.querySelector('#number__second');
const operation = document.querySelector('#operation');
const submitButton = document.querySelector('.submit');
const resultField = document.querySelector('#result');
const visualization = document.querySelector('.result__visualization');

// Функція для перевірки, чи є введення числом / Function to check if the input is a number
function isNumber(value) {
    return !Number.isNaN(parseFloat(value));
}

// Функція для виконання розрахунків / Function to perform calculations
function calculate() {
    // Перевіряємо, чи є введення числами / Checking if the inputs are numbers
    if (!isNumber(inputOne.value) || !isNumber(inputTwo.value)) {
        resultField.textContent = 'Enter a number';
        return;
    }

    // Перевіряємо, чи є операція допустимою / Checking if the operation is valid
    if (operation.value === 'exponentiation') {
        resultField.textContent = 'Choose a valid operation';
        return;
    }

    // Виконуємо операцію / Performing the operation
    let result;
    let operationSymbol;

    switch (operation.value) {
        case 'addition':
            result = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
            operationSymbol = '+';
            break;
        case 'subtraction':
            result = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
            operationSymbol = '-';
            break;
        case 'multiplication':
            result = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
            operationSymbol = '*';
            break;
        case 'division':
            result = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
            operationSymbol = '/';
            break;
        case 'remainder':
            result = parseFloat(inputOne.value) % parseFloat(inputTwo.value);
            operationSymbol = '%';
            break;
        default:
            break;
    }

    // Перевіряємо, чи не занадто великий результат / Checking if the result is too big
    if (result > 100) {
        resultField.textContent = 'Result is too big';
        return;
    }

    // Відображаємо результат / Displaying the result
    resultField.textContent = result;

    // Відображаємо візуалізацію / Displaying the visualization
    const visualizationText = `${inputOne.value} ${operationSymbol} ${inputTwo.value} = ${result}`;
    visualization.textContent = visualizationText;

    // Створюємо контейнери для зображень / Creating containers for images
    let firstImagesContainer = document.createElement('div');
    firstImagesContainer.className = 'first-images-container';
    let resultImagesContainer = document.createElement('div');
    resultImagesContainer.className = 'result-images-container';

    // додаємо зображення в firstImagesContainer відповідно до inputOne
    const inputOneValue = Math.floor(inputOne.value);
    const inputOneFraction = inputOne.value - inputOneValue;
    for (let i = 0; i < inputOneValue; i++) {
        if (i % 10 === 0 && i !== 0) {
            visualization.appendChild(firstImagesContainer);
            firstImagesContainer = document.createElement('div');
            firstImagesContainer.className = 'first-images-container';
        }
        const img = document.createElement('img');
        img.src = './images/overwatch.png';
        firstImagesContainer.appendChild(img);
    }
    if (inputOneFraction > 0) {
        const img = document.createElement('img');
        img.src = './images/overwatch.png';
        img.style.clipPath = `inset(${100 - inputOneFraction * 100}% 0 0 0)`;
        firstImagesContainer.appendChild(img);
    }

    // Додаємо зображення в resultImagesContainer відповідно до result
    const resultValue = Math.floor(result);
    const resultFraction = result - resultValue;
    for (let i = 0; i < resultValue; i++) {
        if (i % 10 === 0 && i !== 0) {
            visualization.appendChild(resultImagesContainer);
            resultImagesContainer = document.createElement('div');
            resultImagesContainer.className = 'result-images-container';
        }
        const img = document.createElement('img');
        img.src = './images/overwatch.png';
        resultImagesContainer.appendChild(img);
    }
    if (resultFraction > 0) {
        const img = document.createElement('img');
        img.src = './images/overwatch.png';
        img.style.clipPath = `inset(${100 - resultFraction * 100}% 0 0 0)`;
        resultImagesContainer.appendChild(img);
    }

    // Clearing the block and adding the containers with images
    visualization.textContent = '';
    visualization.appendChild(firstImagesContainer);

    // Додаємо символ операції
    const operationSymbolElement = document.createElement('span');
    operationSymbolElement.textContent = operationSymbol;
    visualization.appendChild(operationSymbolElement);

    // Додаємо цифрове значення другого числа
    const inputTwoElement = document.createElement('span');
    inputTwoElement.textContent = inputTwo.value;
    visualization.appendChild(inputTwoElement);

    // Додаємо символ рівності
    const equalsSymbolElement = document.createElement('span');
    equalsSymbolElement.textContent = '=';
    visualization.appendChild(equalsSymbolElement);

    visualization.appendChild(resultImagesContainer);
}

// Adding a function to handle the click event on the button
document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('submit');
    calculateButton.addEventListener('click', calculate);
});

submitButton.disabled = true;

// Додаємо слухача подій для полів введення / Adding an event listener for the input fields
[inputOne, inputTwo].forEach((input) => {
    input.addEventListener('input', () => {
        if (inputOne.value && inputTwo.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});
