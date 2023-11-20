const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];

    for (let i = 1; i < array.length; i++) {
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

    for (let i = 1; i < array.length; i++) {
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
        const number = array[i];
        if (typeof number === 'number' && !Number.isNaN(number)) {
            sumNumbers += number;
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
    return array.filter((number) => number < 0);
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.filter((number) => number > 0);
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

// exercise *

const numbers = [1, 2, 3, 4, 5];

function customReduce(array, reducer, value) {
    const hasValue = value !== undefined;
    const startIndex = hasValue ? 0 : 1;
    let nums = hasValue ? value : array[0];

    for (let i = startIndex; i < array.length; i++) {
        nums = reducer(nums, array[i]);
    }
    return nums;
}

const sumAllNumbers = customReduce(numbers, (result, number) => {
    let res = result;
    res += number;

    return res;
}, 0);

console.log(sumAllNumbers);

function customMap(array, mapper) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(mapper(array[i]));
    }

    return result;
}

const multyNumbers = customMap(numbers, (mapper) => mapper * 2);

console.log(multyNumbers);
