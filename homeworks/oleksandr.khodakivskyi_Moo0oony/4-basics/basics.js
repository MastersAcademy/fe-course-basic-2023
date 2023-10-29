const x = 8;
const y = 2;
const operations = document.getElementById('operations');

const resultAddition = x + y;
const resultSubtraction = x - y;
const resultMultiplication = x * y;
const resultDivision = x / y;
const resultRemainder = x % y;
const resultExponentiation = x ** y;

console.log(`Operation addition: ${x} + ${y} = ${resultAddition}`);
console.log(`Operation subtraction: ${x} - ${y} = ${resultSubtraction}`);
console.log(`Operation multiplication: ${x} * ${y} = ${resultMultiplication}`);
console.log(`Operation division: ${x} / ${y} = ${resultDivision}`);
console.log(`Operation remainder: ${x} % ${y} = ${resultRemainder}`);
console.log(`Operation exponentiation: ${x} ** ${y} = ${resultExponentiation}`);

operations.innerHTML = `
    <ul>
        <li>Operation addition:<br> ${x} + ${y} = ${resultAddition}</li>
        <li>Operation subtraction:<br> ${x} - ${y} = ${resultSubtraction}</li>
        <li>Operation multiplication:<br> ${x} * ${y} = ${resultMultiplication}</li>
        <li>Operation division:<br> ${x} / ${y} = ${resultDivision}</li>
        <li>Operation remainder:<br> ${x} % ${y} = ${resultRemainder}</li>
        <li>Operation exponentiation:<br> ${x} ** ${y} = ${resultExponentiation}</li>
    </ul>`;
