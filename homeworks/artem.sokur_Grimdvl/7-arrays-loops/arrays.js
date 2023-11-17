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

    array.forEach((number) => {
        if (!Number.isNaN(number) && number !== undefined) {
            sumNumbers += number;
        }
    });

    return sumNumbers;
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    return array.map((number) => (number < 0 ? number : null)).filter(Boolean);
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.reduce((result, number) => {
        if (number > 0) {
            result.push(number);
        }

        return result;
    }, []);
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

// exercise *

const numbers = [2, -20, '-10', undefined, '5', 3, 40, NaN, 0, -5, 'One', '', null];

function customReduce(array, reducer, value) {
    let nums = value;

    for (let i = 0; i < array.length; i++) {
        nums = reducer(nums, array[i]);
    }
    return nums;
}

const sumAllNumbers = customReduce(numbers, (result, number) => {
    let num = number;
    let res = result;

    if (typeof num === 'string') {
        if (num === '') {
            num = NaN;
        } else {
            num = Number(num);
        }
    }

    if (!Number.isNaN(num) && num !== undefined && num !== null) {
        if (num < 0) {
            res += num * -1;
        } else {
            res += num;
        }
    }

    return res;
}, 0);

console.log(sumAllNumbers);

const numbersSeconds = [1, 2, 3, 4, 5];

function customMap(array, mapper) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(mapper(array[i]));
    }

    return result;
}

const multyNumbers = customMap(numbersSeconds, (mapper) => mapper * 2);

console.log(multyNumbers);
