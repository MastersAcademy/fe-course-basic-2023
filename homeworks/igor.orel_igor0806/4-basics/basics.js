const firstNumber = 12;
const secondNumber = 18;
const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const exponentiation = firstNumber ** secondNumber;

const OperationAddition = `Operation Addition: ${firstNumber} + ${secondNumber} = ${addition}`;
const OperationSubtraction = `Operation Subtraction: ${firstNumber} - ${secondNumber} = ${subtraction}`;
const OperationMultiplication = `Operation Multiplication: ${firstNumber} * ${secondNumber} = ${multi}`;
const OperationDivision = `Operation Division: ${firstNumber} / ${secondNumber} = ${division}`;
const OperationRemainder = `Operation Remainder: ${firstNumber} % ${secondNumber} = ${remainder}`;
const OperationExponentiation = `Operation Exponentiation: ${firstNumber} ** + ${secondNumber} = ${exponentiation}`;

document.getElementById('output1').textContent = OperationAddition;
document.getElementById('output2').textContent = OperationSubtraction;
document.getElementById('output3').textContent = OperationMultiplication;
document.getElementById('output4').textContent = OperationDivision;
document.getElementById('output5').textContent = OperationRemainder;
document.getElementById('output6').textContent = OperationExponentiation;

console.log(`Додавання: ${firstNumber} + ${secondNumber} = ${addition}`);
console.log(`Віднімання: ${firstNumber} - ${secondNumber} = ${subtraction}`);
console.log(`Множення: ${firstNumber} * ${secondNumber} = ${multi}`);
console.log(`Дилення: ${firstNumber} / ${secondNumber} = ${division}`);
console.log(`Залишок від ділення: ${firstNumber} % ${secondNumber} = ${remainder}`);
console.log(`Піднесення до степеня: ${firstNumber} ** ${secondNumber} = ${exponentiation}`);
