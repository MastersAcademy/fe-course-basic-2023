const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

console.log(maxNumberOfArr(arrayOne)); // 44
console.log(maxNumberOfArr(arrayTwo)); // -1
console.log(maxNumberOfArr(arrayThree)); // 7
console.log(maxNumberOfArr(arrayFour)); // 5
console.log(maxNumberOfArr(arrayFive)); // 5
function minNumberOfArr(array) {
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

console.log(minNumberOfArr(arrayOne)); // -12
console.log(minNumberOfArr(arrayTwo)); // -8
console.log(minNumberOfArr(arrayThree)); // 1
console.log(minNumberOfArr(arrayFour)); // -3
console.log(minNumberOfArr(arrayFive)); // -3

function sumNumbersOfArr(array) {
    let sumOfNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            sumOfNumber += array[i];
        }
    }
    return sumOfNumber;
}
console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    const filteredNegativeNumbers = array.filter((number) => typeof number === 'number' && !Number.isNaN(number) && number < 0);
    return filteredNegativeNumbers;
}
console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    const filteredPositiveNumbers = array.filter((number) => typeof number === 'number' && !Number.isNaN(number) && number > 0);
    return filteredPositiveNumbers;
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

// myMap method (custom)

function myMap(array, mapper) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(mapper(array[i]));
    }
    return newArray;
}

// перевірка роботи методу

const numbers = [1, 2, 3, 4, 5];

const divNumbers = myMap(numbers, (item) => `<div>${item}</div>;`);
console.log(`Div numbers: ${divNumbers}`); // Div numbers: <div>1</div>,<div>2</div>,<div>3</div>,<div>4</div>,<div>5</div>

// myReduce method (custom)

function myReduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
    }

    return accumulator;
}

// Перевірка роботи функції
const budget = [100, 200, 300, 400, 500];
const totalBudget = myReduce(budget, (acc, item) => acc + item, 0);
console.log(`Загальний бюджет: ${totalBudget}`); // Загальний бюджет: 1500
