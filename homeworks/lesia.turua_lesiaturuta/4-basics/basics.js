const x = 2;
const y = 5;

const addition = x + y;
const difference = y - x;
const product = x * y;
const quotient = y / x;
const remainder = x % y;
const power = x ** y;

// Return elements
const additionEl = document.querySelector('[data-addition]');
const differenceEl = document.querySelector('[data-difference]');
const productEl = document.querySelector('[data-product]');
const quotientEl = document.querySelector('[data-quotient]');
const remainderEl = document.querySelector('[data-remainder]');
const powerEl = document.querySelector('[data-power]');

// Create strings
const stringAddition = `${x} + ${y} = ${addition}`;
const stringDifference = `${y} - ${x} = ${difference}`;
const stringProduct = `${x} * ${y} = ${product}`;
const stringQuotient = `${y} / ${x} = ${quotient}`;
const stringRemainder = `${x} % ${y} = ${remainder}`;
const stringPower = `${x} ** ${y} = ${power}`;

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

// names for alert and console.log
const nameAddition = 'Додавання';
const nameDifference = 'Віднімання';
const nameProduct = 'Множення';
const nameQuotient = 'Ділення';
const nameRemainder = 'Залишок від ділення';
const namePower = 'Піднесення до степеня';

// Sent text in alert
alert(`${nameAddition}: ${stringAddition} \n ${nameDifference}: ${stringDifference} \n ${nameProduct}: ${stringProduct} \n ${nameQuotient}: ${stringQuotient} \n ${nameRemainder}: ${stringRemainder} \n ${namePower}: ${stringPower}`);

// Sent text in log
console.log(`${nameAddition}: ${stringAddition}`);
console.log(`${nameDifference}: ${stringDifference}`);
console.log(`${nameProduct}: ${stringProduct}`);
console.log(`${nameQuotient}: ${stringQuotient}`);
console.log(`${nameRemainder}: ${stringRemainder}`);
console.log(`${namePower}: ${stringPower}`);
