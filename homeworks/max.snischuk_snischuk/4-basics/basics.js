const num1 = 543;
const num2 = 423;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const remainder = num1 % num2;
const exponent = num1 ** num2;

const mathResultsNode = document.querySelector('[data="math-results"]');

const mathResultsTemplate = `
    <p class='math-operations'>Operation addition: ${num1} + ${num2} = ${addition}</p>
    <p class='math-operations'>Operation subtraction: ${num1} - ${num2} = ${subtraction}</p>
    <p class='math-operations'>Operation addition: ${num1} * ${num2} = ${multiplication}</p>
    <p class='math-operations'>Operation multiplication: ${num1} / ${num2} = ${division.toFixed(2)}</p>
    <p class='math-operations'>Operation remainder: ${num1} % ${num2} = ${remainder}</p>
    <p class='math-operations'>Operation exponent: ${num1} ** ${num2} = ${exponent}</p>
`;

mathResultsNode.innerHTML = mathResultsTemplate;
