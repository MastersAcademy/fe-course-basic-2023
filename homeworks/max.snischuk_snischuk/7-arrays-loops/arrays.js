const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    if (!array.length) return undefined;

    let maxNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];

        if (
            currentElement !== undefined
            && currentElement !== null
            && !Number.isNaN(currentElement)
        ) {
            if (currentElement > maxNumber) {
                maxNumber = currentElement;
            }
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
    if (!array.length) return undefined;

    let minNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];

        if (
            currentElement !== undefined
            && currentElement !== null
            && !Number.isNaN(currentElement)
        ) {
            if (currentElement < minNumber) {
                minNumber = currentElement;
            }
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
    if (!array.length) return undefined;

    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];

        if (
            currentElement !== undefined
            && currentElement !== null
            && !Number.isNaN(currentElement)
        ) {
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

const onlyNegativeNumbers = (array) => array.filter((element) => element < 0);

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

const onlyPositiveNumbers = (array) => array.filter((element) => element > 0);

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

function customReduce(array, reducer, initialValue) {
    let reducedValue = initialValue;

    for (let index = 0; index < array.length; index++) {
        const currentElement = array[index];

        if (
            currentElement !== undefined
            && currentElement !== null
            && !Number.isNaN(currentElement)
        ) {
            reducedValue = reducer(reducedValue, currentElement, index, array);
        }
    }
    return reducedValue;
}

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(customReduce(arrayOne, sumReducer, 0)); // 32
console.log(customReduce(arrayTwo, sumReducer, 0)); // -11
console.log(customReduce(arrayThree, sumReducer, 0)); // 11
console.log(customReduce(arrayFour, sumReducer, 0)); // 6
console.log(customReduce(arrayFive, sumReducer, 0)); // 6

function customMap(array, mapper) {
    const mappedArray = [...array];

    for (let index = 0; index < mappedArray.length; index++) {
        const currentElement = array[index];

        if (
            currentElement !== undefined
            && currentElement !== null
            && !Number.isNaN(currentElement)
        ) {
            mappedArray[index] = mapper(currentElement, index, mappedArray);
        }
    }
    return mappedArray;
}

const multiplyByTenMapper = (value) => value * 10;

console.log(customMap(arrayOne, multiplyByTenMapper)); // 30, 0, -50, 10, 440, ...
console.log(customMap(arrayTwo, multiplyByTenMapper)); // -10, -80, -20
console.log(customMap(arrayThree, multiplyByTenMapper)); // 10, 70, 30
console.log(customMap(arrayFour, multiplyByTenMapper)); // 10, NaN, 30, 50, -30
console.log(customMap(arrayFive, multiplyByTenMapper)); // 10, NaN, 30, 50, -30
