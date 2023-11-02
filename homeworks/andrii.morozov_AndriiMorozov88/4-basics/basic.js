const firstNumberInput = document.querySelector('[data-first-number]');
const secondNumberInput = document.querySelector('[data-second-number]');
const operation = document.querySelector('[data-operation]');
const button = document.querySelector('[data-button]');
const resultEl = document.querySelector('[data-result]');
resultEl.innerText = 'Result';
button.addEventListener('click', () => {
    const firstNumber = firstNumberInput.value;
    const secondNumber = secondNumberInput.value;
    resultEl.classList.add('main__result--calc');
    switch (operation.value) {
        case '1':
            resultEl.innerText = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
            break;
        case '2':
            resultEl.innerText = `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
            break;
        case '3':
            resultEl.innerText = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
            break;
        case '4':
            resultEl.innerText = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
            break;
        case '5':
            resultEl.innerHTML = `${firstNumber}<sup>${secondNumber}</sup> = ${firstNumber ** secondNumber}`;
            break;
        default:
            resultEl.innerText = `${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`;
            break;
    }
    firstNumberInput.value = '';
    secondNumberInput.value = '';
});
