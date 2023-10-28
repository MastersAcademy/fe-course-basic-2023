const firstNumber = Number(prompt('Please, fill the first number:'));
const secondNumber = Number(prompt('Please, fill the second number:'));

const resultAddition = firstNumber + secondNumber;
const resultSubtraction = firstNumber - secondNumber;
const resultMultiplication = firstNumber * secondNumber;
const resultDivision = firstNumber / secondNumber;
const resultDivisionWithRemainder = firstNumber % secondNumber;
const resultExponentiation = firstNumber ** secondNumber;

alert(`Operation addition: ${firstNumber} + ${secondNumber} = ${resultAddition}`);
alert(`Operation subtraction: ${firstNumber} - ${secondNumber} = ${resultSubtraction}`);
alert(`Operation multiplication: ${firstNumber} * ${secondNumber} = ${resultMultiplication}`);
alert(`Operation division: ${firstNumber} + ${secondNumber} = ${resultDivision}`);
alert(`Operation division with remainder: ${firstNumber} % ${secondNumber} = ${resultDivisionWithRemainder}`);
alert(`Operation exponentiation: ${firstNumber} ** ${secondNumber} = ${resultExponentiation}`);

function showResult() {
    const resultAdditionEl = document.querySelector('[data-result1]');
    const resultSubtractionEL = document.querySelector('[data-result2]');
    const resultMultiplicationEL = document.querySelector('[data-result3]');
    const resultDivisionEL = document.querySelector('[data-result4]');
    const resultDivisionWithRemainderEL = document.querySelector('[data-result5]');
    const resultExponentiationEL = document.querySelector('[data-result6]');

    resultAdditionEl.textContent = `Operation addition: ${firstNumber} + ${secondNumber} = ${resultAddition}`;
    resultSubtractionEL.textContent = `Operation subtraction: ${firstNumber} - ${secondNumber} = ${resultSubtraction}`;
    resultMultiplicationEL.textContent = `Operation multiplication: ${firstNumber} * ${secondNumber} = ${resultMultiplication}`;
    resultDivisionEL.textContent = `Operation division: ${firstNumber} + ${secondNumber} = ${resultDivision}`;
    resultDivisionWithRemainderEL.textContent = `Operation division with remainder: ${firstNumber} % ${secondNumber} = ${resultDivisionWithRemainder}`;
    resultExponentiationEL.textContent = `Operation exponentiation: ${firstNumber} ** ${secondNumber} = ${resultExponentiation}`;
}

showResult();
