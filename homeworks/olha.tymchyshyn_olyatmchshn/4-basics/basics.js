const a = 24 + 68;
const b = 37 - 16;
const c = 100 / 5;
const x = 4 * 16;
const y = 4 ** 2;
const z = 23 % 5;

const add = a + b;
console.log(`Addition: ${a} + ${b} = ${add}`);

const diff = b - c;
console.log(`Subtraction: ${b} - ${c} = ${diff}`);

const multiply = y * z;
console.log(`Multiplication: ${y} * ${z} = ${multiply}`);

const div = c / z;
console.log(`Division: ${c} / ${z} = ${+div.toFixed(2)}`);

const expo = c ** 2;
console.log(`Exponentiation: ${c} ** ${2} = ${expo}`);

const remainder = x % b;
console.log(`Remainder: ${x} % ${b} = ${remainder}`);
