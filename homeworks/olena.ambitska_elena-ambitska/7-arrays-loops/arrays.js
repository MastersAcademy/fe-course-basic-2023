const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];

    for (let i = 1; i <= array.length; i++) {
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

    for (let i = 0; i <= array.length; i++) {
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
    let sumOfNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            sumOfNumbers += array[i];
        }
    }
    return sumOfNumbers;
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    return array.filter((num) => num < 0);
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.filter((num) => num > 0);
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

const customMap = (array, mapper) => {
    const arr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof element === 'number' && !Number.isNaN(element)) {
            arr.push(mapper(element));
        }
    }

    return arr;
};

const mapper = (value) => value * 2;

console.log(customMap(arrayOne, mapper));
console.log(customMap(arrayTwo, mapper));
console.log(customMap(arrayThree, mapper));
console.log(customMap(arrayFour, mapper));
console.log(customMap(arrayFive, mapper));

const customReduce = (array, reducer, initialValue = 0) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            result = reducer(result, array[i]);
        }
    }
    return result;
};
const sumReducer = (accumulator, i) => accumulator + i;

console.log(customReduce(arrayOne, sumReducer));
console.log(customReduce(arrayTwo, sumReducer));
console.log(customReduce(arrayThree, sumReducer));
console.log(customReduce(arrayFour, sumReducer, 1));
console.log(customReduce(arrayFive, sumReducer, 2));
