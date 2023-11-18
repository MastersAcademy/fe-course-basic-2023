const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
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
        if (minNumber > array[i]) {
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
    let sumNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            sumNumbers += array[i];
        }
    }
    return sumNumbers;
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    const negativeNumbersArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeNumbersArray.push(array[i]);
        }
    }
    return negativeNumbersArray;
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    const positiveNumbersArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveNumbersArray.push(array[i]);
        }
    }
    return positiveNumbersArray;
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

function customMap(array, mapper) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(mapper(array[i], i, array));
    }

    return result;
}

const firstDoubledNumbersArrays = customMap(arrayOne, (num) => num * 2);
console.log(firstDoubledNumbersArrays);
const secondDoubledNumbersArrays = customMap(arrayTwo, (num) => num * 2);
console.log(secondDoubledNumbersArrays);
const thirdDoubledNumbersArrays = customMap(arrayThree, (num) => num * 2);
console.log(thirdDoubledNumbersArrays);
const fourthDoubledNumbersArrays = customMap(arrayFour, (num) => num * 2);
console.log(fourthDoubledNumbersArrays);
const fifthDoubledNumbersArrays = customMap(arrayFive, (num) => num * 2);
console.log(fifthDoubledNumbersArrays);

function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array);
    }

    return accumulator;
}

const firstNumbersSum = customReduce(arrayOne, (acc, curr) => acc + curr, 0);
console.log('Sum:', firstNumbersSum);
const secondNumbersSum = customReduce(arrayTwo, (acc, curr) => acc + curr, 0);
console.log('Sum:', secondNumbersSum);
const thirdNumbersSum = customReduce(arrayThree, (acc, curr) => acc + curr, 0);
console.log('Sum:', thirdNumbersSum);
const fourthNumbersSum = customReduce(arrayFour, (acc, curr) => acc + curr, 0);
console.log('Sum:', fourthNumbersSum);
const fifthNumbersSum = customReduce(arrayFive, (acc, curr) => acc + curr, 0);
console.log('Sum:', fifthNumbersSum);
