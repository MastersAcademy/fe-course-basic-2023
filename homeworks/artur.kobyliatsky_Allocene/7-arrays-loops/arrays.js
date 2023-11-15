const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNum = array[0];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum;
}

console.log(maxNumberOfArr(arrayOne)); // 44
console.log(maxNumberOfArr(arrayTwo)); // -1
console.log(maxNumberOfArr(arrayThree)); // 7
console.log(maxNumberOfArr(arrayFour)); // 5
console.log(maxNumberOfArr(arrayFive)); // 5

function minNumberOfArr(array) {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num < minNum) {
            minNum = num;
        }
    }

    return minNum;
}

console.log(minNumberOfArr(arrayOne)); // -12
console.log(minNumberOfArr(arrayTwo)); // -8
console.log(minNumberOfArr(arrayThree)); // 1
console.log(minNumberOfArr(arrayFour)); // -3
console.log(minNumberOfArr(arrayFive)); // -3

function sumNumbersOfArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            sum += array[i];
        }
    }

    return sum;
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    const negativeNum = array.filter((num) => num < 0);
    return negativeNum;
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    const positiveNum = array.filter((num) => num > 0);
    return positiveNum;
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

// customReduce
function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];

const sum = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // result will be = 15

// customMap
function customMap(array, mapper) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray[i] = mapper(array[i]);
    }
    return mappedArray;
}

const objects = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 }];

const names = customMap(objects, (object) => object.name);

console.log(names); // result will be = ["John", "Mary"]
