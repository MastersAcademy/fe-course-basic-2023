const number1 = 20;
const number2 = 5;

const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const exponentiation = number1 ** number2;
const division = number1 / number2;
const modulus = number1 % number2;

console.log(`Addition: ${number1} + ${number2} = ${addition}`);
console.log(`Subtraction: ${number1} - ${number2} = ${subtraction}`);
console.log(`Multiplication: ${number1} * ${number2} = ${multiplication}`);
console.log(`Exponentiation: ${number1} ** ${number2} = ${exponentiation}`);
console.log(`Division: ${number1} / ${number2} = ${division}`);
console.log(`Modulus: ${number1} %${number2} = ${modulus}`);

document.write(`<p class="paragraph"> Addition: ${number1} + ${number2} = ${addition} </p>`);
document.write(`<p class="paragraph">Subtraction: ${number1} - ${number2} = ${subtraction} </p>`);
document.write(`<p class="paragraph">Multiplication: ${number1} * ${number2} = ${multiplication} </p>`);
document.write(`<p class="paragraph">Exponentiation: ${number1} ** ${number2} = ${exponentiation} </p>`);
document.write(`<p class="paragraph">Division: ${number1} / ${number2} = ${division} </p>`);
document.write(`<p class="paragraph">Modulus: ${number1} %${number2} = ${modulus} </p>`);
