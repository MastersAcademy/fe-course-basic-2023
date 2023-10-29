const expressionFirstNumber = document.querySelector('[data-number="first"]');
const expressionSecondNumber = document.querySelector('[data-number="second"]');
const expressionAdding = document.querySelector('[data-operation="adding"]');
const expressionSubtraction = document.querySelector('[data-operation="subtraction"]');
const expressionMultiplication = document.querySelector('[data-operation="multiplication"]');
const expressionDivision = document.querySelector('[data-operation="division"]');
const expressionRemainder = document.querySelector('[data-operation="remainder"]');
const expressionExponentiation = document.querySelector('[data-operation="exponentiation"]');

const firstNumber = Number(prompt('enter first number', '11'));
const secondNumber = Number(prompt('enter second number', '2'));

const addingResult = firstNumber + secondNumber;
const subtractionResult = firstNumber - secondNumber;
const multiplicationResult = firstNumber * secondNumber;
const divisionResult = firstNumber / secondNumber;
const remainderResult = firstNumber % secondNumber;
const exponentiationResult = firstNumber ** secondNumber;

expressionSecondNumber.textContent = `${firstNumber}`;
expressionFirstNumber.textContent = `${secondNumber}`;
expressionAdding.textContent = `${firstNumber} + ${secondNumber} = ${addingResult}`;
expressionSubtraction.textContent = `${firstNumber} - ${secondNumber} = ${subtractionResult}`;
expressionMultiplication.textContent = `${firstNumber} * ${secondNumber} = ${multiplicationResult}`;
expressionDivision.textContent = `${firstNumber} / ${secondNumber} = ${divisionResult}`;
expressionRemainder.textContent = `${firstNumber} % ${secondNumber} = ${remainderResult}`;
expressionExponentiation.textContent = `${firstNumber} ** ${secondNumber} = ${exponentiationResult}`;
