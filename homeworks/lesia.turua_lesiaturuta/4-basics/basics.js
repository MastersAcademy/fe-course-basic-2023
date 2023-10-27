const X = 2;
const Y = 5;

const addition = X + Y;
const difference = Y - X;
const product = X * Y;
const quotient = Y / X;
const remainder = X % Y;
const power = X ** Y;

// Return elements
const additionEl = document.querySelector('.addition');
const differenceEl = document.querySelector('.difference');
const productEl = document.querySelector('.product');
const quotientEl = document.querySelector('.quotient');
const remainderEl = document.querySelector('.remainder');
const powerEl = document.querySelector('.power');

// Create strings
const stringAddition = `Додавання: ${X} + ${Y} = ${addition}`;
const stringDifference = `Віднімання: ${Y} - ${X} = ${difference}`;
const stringProduct = `Множення: ${X} * ${Y} = ${product}`;
const stringQuotient = `Ділення: ${Y} / ${X} = ${quotient}`;
const stringRemainder = `Залишок від ділення: ${X} % ${Y} = ${remainder}`;
const stringPower = `Піднесення до степеня: ${X} ** ${Y} = ${power}`;

// Sent text in HTML
if (additionEl) {
    additionEl.innerHTML = stringAddition;
}
if (differenceEl) {
    differenceEl.innerHTML = stringDifference;
}
if (productEl) {
    productEl.innerHTML = stringProduct;
}
if (quotientEl) {
    quotientEl.innerHTML = stringQuotient;
}
if (remainderEl) {
    remainderEl.innerHTML = stringRemainder;
}
if (powerEl) {
    powerEl.innerHTML = stringPower;
}

// Sent text in alert
alert(`${stringAddition} \n ${stringDifference} \n ${stringProduct} \n ${stringQuotient} \n ${stringRemainder} \n ${stringPower}`);

// Sent text in log
console.log(stringAddition);
console.log(stringDifference);
console.log(stringProduct);
console.log(stringQuotient);
console.log(stringRemainder);
console.log(stringPower);
