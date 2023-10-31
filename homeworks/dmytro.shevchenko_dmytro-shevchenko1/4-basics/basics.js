const firstNumber = 77;
const secondNumber = 33;

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const exponentiation = (firstNumber ** secondNumber);

document.querySelector('[data-output="additional"]').textContent += ` ${firstNumber} + ${secondNumber} = ${addition}`;
document.querySelector('[data-output="subtraction"]').textContent += `${firstNumber} - ${secondNumber} = ${subtraction}`;
document.querySelector('[data-output="multiplication"]').textContent += `${firstNumber} * ${secondNumber} = ${multiplication}`;
document.querySelector('[data-output="division"]').textContent += `${firstNumber} / ${secondNumber} = ${division.toFixed(2)}`;
document.querySelector('[data-output="remainder"]').textContent += `${firstNumber} % ${secondNumber} = ${remainder}`;
document.querySelector('[data-output="exponentiation"]').textContent += `${firstNumber} ** ${secondNumber} = ${exponentiation}`;

console.log(`Operation addition: ${firstNumber} + ${secondNumber} = ${addition}`);
console.log(`Operation subtraction: ${firstNumber} - ${secondNumber} = ${subtraction}`);
console.log(`Operation multiplication: ${firstNumber} * ${secondNumber} = ${multiplication}`);
console.log(`Operation division: ${firstNumber} / ${secondNumber} = ${division.toFixed(2)}`);
console.log(`Operation remainder: ${firstNumber} % ${secondNumber} = ${remainder}`);
console.log(`Operation exponentiation: ${firstNumber} ** ${secondNumber} = ${exponentiation}`);
