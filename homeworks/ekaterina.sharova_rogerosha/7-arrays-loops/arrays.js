const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    if (array.length === 0) {
        return undefined;
    }

    let maxNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }

    return maxNumber;
}

console.log('max number of the first array:', maxNumberOfArr(arrayOne)); // 44
console.log('max number of the second array:', maxNumberOfArr(arrayTwo)); // -1
console.log('max number of the third array:', maxNumberOfArr(arrayThree)); // 7
console.log('max number of the fourth array:', maxNumberOfArr(arrayFour)); // 5
console.log('max number of the fifth array:', maxNumberOfArr(arrayFive)); // 5

function minNumberOfArr(array) {
    if (array.length === 0) {
        return undefined;
    }

    let minNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }

    return minNumber;
}

console.log('min number of the first array:', minNumberOfArr(arrayOne)); // -12
console.log('min number of the second array:', minNumberOfArr(arrayTwo)); // -8
console.log('min number of the third array:', minNumberOfArr(arrayThree)); // 1
console.log('min number of the fourth array:', minNumberOfArr(arrayFour)); // -3
console.log('min number of the fifth array:', minNumberOfArr(arrayFive)); // -3

function sumNumbersOfArr(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            sum += array[i];
        }
    }

    return sum;
}

console.log('sum of numbers of the first array:', sumNumbersOfArr(arrayOne)); // 32
console.log('sum of numbers of the second array:', sumNumbersOfArr(arrayTwo)); // -11
console.log('sum of numbers of the third array:', sumNumbersOfArr(arrayThree)); // 11
console.log('sum of numbers of the fourth array:', sumNumbersOfArr(arrayFour)); // 6
console.log('sum of numbers of the fifth array:', sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    return array.filter((number) => number < 0);
}

console.log('only negative numbers of the first array:', onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log('only negative numbers of the second array:', onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log('only negative numbers of the third array:', onlyNegativeNumbers(arrayThree)); // []
console.log('only negative numbers of the fourth array:', onlyNegativeNumbers(arrayFour)); //  [-3]
console.log('only negative numbers of the fifth array:', onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.filter((number) => number > 0);
}

console.log('only positive numbers of the first array:', onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log('only positive numbers of the second array:', onlyPositiveNumbers(arrayTwo)); // [];
console.log('only positive numbers of the third array:', onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log('only positive numbers of the fourth array:', onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log('only positive numbers of the fifth array:', onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
    }

    return accumulator;
}

const arrayOneSum = customReduce(arrayOne, (acc, curr) => acc + curr, 0);
console.log('sum of the first array:', arrayOneSum);
const arrayTwoSum = customReduce(arrayTwo, (acc, curr) => acc + curr, 0);
console.log('sum of the second array:', arrayTwoSum);
const arrayThreeSum = customReduce(arrayThree, (acc, curr) => acc + curr, 0);
console.log('sum of the third array:', arrayThreeSum);
const arrayFourSum = customReduce(arrayFour, (acc, curr) => acc + curr, 0);
console.log('sum of the fourth array:', arrayFourSum);
const arrayFiveSum = customReduce(arrayFive, (acc, curr) => acc + curr, 0);
console.log('sum of the fifth array:', arrayFiveSum);

function customMap(array, mapper) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i]) && array[i] !== undefined) {
            result.push(mapper(array[i]));
        } else {
            result.push(undefined);
        }
    }

    return result;
}

const squaredArrayOne = customMap(arrayOne, (num) => num * num);
console.log('squared first array:', squaredArrayOne); // [ 9, 0, 25, 1, 1936, 144, 9, 0, 0, 1, 4, 9, 9, 4, 1, 16, 4, 9, 1 ]
const squaredArrayTwo = customMap(arrayTwo, (num) => num * num);
console.log('squared second array:', squaredArrayTwo); // [ 1, 64, 4 ]
const squaredArrayThree = customMap(arrayThree, (num) => num * num);
console.log('squared third array:', squaredArrayThree); // [ 1, 49, 9 ]
const squaredArrayFour = customMap(arrayFour, (num) => num * num);
console.log('squared fourth array:', squaredArrayFour); // [ 1, undefined, 9, 25, 9 ]
const squaredArrayFive = customMap(arrayFive, (num) => num * num);
console.log('squared fifth array:', squaredArrayFive); // [ 1, undefined, 9, 25, 9 ]
