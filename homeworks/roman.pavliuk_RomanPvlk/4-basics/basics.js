// Виконання математичних операцій
const numberFirst = 4;
const numberSecond = 8;

const additionOperation = numberFirst + numberSecond;
const substractionOperation = numberFirst - numberSecond;
const multiplicationOperation = numberFirst * numberSecond;
const divisionOperation = numberFirst / numberSecond;
const moduloOperation = numberFirst % numberSecond;
const exponentationOperation = numberFirst ** numberSecond;

// Виведення результатів оперції нативним діалогом
console.log(`Operation addition: ${numberFirst} + ${numberSecond} = ${additionOperation}`);
console.log(`Operation subtraction: ${numberFirst} - ${numberSecond} = ${substractionOperation}`);
console.log(`Operation multiplication: ${numberFirst} * ${numberSecond} = ${multiplicationOperation}`);
console.log(`Operation division: ${numberFirst} / ${numberSecond} = ${divisionOperation}`);
console.log(`Operation modulo: ${numberFirst} % ${numberSecond} = ${moduloOperation}`);
console.log(`Operation exponentation: ${numberFirst} ** ${numberSecond} = ${exponentationOperation}`);

// Отримання посилань на HTML-елементи, де будуть відображатись результати
const additionOperationElement = document.getElementById("additionOperation");
const substractionOperationElement = document.getElementById("substractionOperation");
const multiplicationOperationElement = document.getElementById("multiplicationOperation");
const divisionOperationElement = document.getElementById("divisionOperation");
const moduloOperationElement = document.getElementById("moduloOperation");
const exponentationOperationElement = document.getElementById("exponentationOperation");

// Вставка результатів у відповідні HTML-елементи
additionOperationElement.textContent = 'Результат додавання: ' + (` ${numberFirst} + ${numberSecond} = ${additionOperation}`);
substractionOperationElement.textContent = 'Результат віднімання: ' + (` ${numberFirst} - ${numberSecond} = ${substractionOperation}`);
multiplicationOperationElement.textContent = 'Результат множення: ' + (` ${numberFirst} * ${numberSecond} = ${multiplicationOperation}`);
divisionOperationElement.textContent = 'Результат ділення: ' + (` ${numberFirst} / ${numberSecond} = ${divisionOperation}`);
moduloOperationElement.textContent = 'Отримання залишку від ділення: ' + (` ${numberFirst} % ${numberSecond} = ${moduloOperation}`);
exponentationOperationElement.textContent = 'Піднесення до степення: ' + (` ${numberFirst} ** ${numberSecond} = ${exponentationOperation}`);
