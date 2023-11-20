const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let result = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (!Number.isNaN(array[i]) && typeof (array[i]) === 'number' && result < array[i]) {
            result = array[i];
        }
    }
    result = `Max Number is : ${result}`;
    return result;
    // write your code here and instead of array return maxNumber
}

console.log(maxNumberOfArr(arrayOne)); // 44
console.log(maxNumberOfArr(arrayTwo)); // -1
console.log(maxNumberOfArr(arrayThree)); // 7
console.log(maxNumberOfArr(arrayFour)); // 5
console.log(maxNumberOfArr(arrayFive)); // 5

function minNumberOfArr(array) {
    let result = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (!Number.isNaN(array[i]) && typeof (array[i]) === 'number' && result > array[i]) {
            result = array[i];
        }
    }
    result = `Min Number is : ${result}`;
    return result;
    // write your code here and instead of array return minNumber
}

console.log(minNumberOfArr(arrayOne)); // -12
console.log(minNumberOfArr(arrayTwo)); // -8
console.log(minNumberOfArr(arrayThree)); // 1
console.log(minNumberOfArr(arrayFour)); // -3
console.log(minNumberOfArr(arrayFive)); // -3

function sumNumbersOfArr(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Number.isNaN(array[i]) && typeof (array[i]) === 'number') {
            result += array[i];
        }
    }
    result = `Sum of values is : ${result}`;
    return result;
    // write your code here and instead of array return sum of numbers
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    return array.filter((elem) => elem < 0);
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.filter((elem) => elem > 0);
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

function customReduce(array, reducer, initValue) {
    let resultValue = initValue === undefined || NaN ? array[0] : initValue;
    for (let i = 0; i < array.length; i++) {
        resultValue = reducer(resultValue, array[i], i);
    }
    return resultValue;
}

// Множить суму 2-х доданків на 2
const Sum = (value, current) => (value + current);

console.log('Custom Reduce');
console.log(customReduce(arrayOne, Sum, 0));
console.log(customReduce(arrayTwo, Sum, 0)); //
console.log(customReduce(arrayThree, Sum, 0));
console.log(customReduce(arrayFour, Sum, 0));
console.log(customReduce(arrayFive, Sum, 0));

function customMap(array, mapper) {
    const mapArray = [];
    for (let i = 0; i < array.length; i++) {
        mapArray[i] = mapper(array[i], i, mapArray);
    }
    return mapArray;
}

const sub = (val) => (val - 2);

console.log('Custom Map');
console.log(customMap(arrayOne, sub));
console.log(customMap(arrayTwo, sub));
console.log(customMap(arrayThree, sub));
console.log(customMap(arrayFour, sub));
console.log(customMap(arrayFive, sub));
