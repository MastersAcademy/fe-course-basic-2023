const firstNumber = 7;
const secondNumber = 8;

const addResultElement = document.getElementById('addition-result');
const subtractionResultElement = document.getElementById('subtraction-result');
const multiplicationResultElement = document.getElementById('multiplication-result');
const divisionResultElement = document.getElementById('division-result');
const remainderFromDivisionResultElement = document.getElementById('remainder-from-division-result');
const exponentationResultElement = document.getElementById('exponentiation-result');

const addResult = firstNumber + secondNumber;
const subtractionResult = firstNumber - secondNumber;
const multiplicationResult = firstNumber * secondNumber;
const divisionResult = firstNumber / secondNumber;
const remainderFromDivisionResult = firstNumber % secondNumber;
const exponentationResult = firstNumber ** secondNumber;

addResultElement.textContent = `Add operation: ${addResult}`;
subtractionResultElement.textContent = `Subtraction operation: ${subtractionResult}`;
multiplicationResultElement.textContent = `Multiplication operation: ${multiplicationResult}`;
divisionResultElement.textContent = `Division operation: ${divisionResult}`;
remainderFromDivisionResultElement.textContent = `The operation remains: ${remainderFromDivisionResult}`;
exponentationResultElement.textContent = `Exponentiation operation: ${exponentationResult}`;
