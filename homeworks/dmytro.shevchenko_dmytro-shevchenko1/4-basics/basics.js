const firstNumber = 77;
const secondNumber = 33;

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;
const exponentiation = (firstNumber ** secondNumber);

document.getElementById('output').innerHTML = `
    Operation addition: ${firstNumber} + ${secondNumber} = ${addition} <br>
    Operation subtraction: ${firstNumber} - ${secondNumber} = ${subtraction} <br>
    Operation multiplication: ${firstNumber} * ${secondNumber} = ${multiplication} <br>
    Operation division: ${firstNumber} / ${secondNumber} = ${division.toFixed(2)} <br>
    Operation remainder: ${firstNumber} % ${secondNumber} = ${remainder} <br>
    Operation exponentiation: ${firstNumber} ** ${secondNumber} = ${exponentiation}
`;

console.log(`Operation addition: ${firstNumber} + ${secondNumber} = ${addition}`);
console.log(`Operation subtraction: ${firstNumber} - ${secondNumber} = ${subtraction}`);
console.log(`Operation multiplication: ${firstNumber} * ${secondNumber} = ${multiplication}`);
console.log(`Operation division: ${firstNumber} / ${secondNumber} = ${division.toFixed(2)}`);
console.log(`Operation remainder: ${firstNumber} % ${secondNumber} = ${remainder}`);
console.log(`Operation exponentiation: ${firstNumber} ** ${secondNumber} = ${exponentiation}`);
