const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        maxValue = arrayElement > maxValue ? arrayElement : maxValue;
    }
    return maxValue;
}

console.log(maxNumberOfArr(arrayOne)); // 44
console.log(maxNumberOfArr(arrayTwo)); // -1
console.log(maxNumberOfArr(arrayThree)); // 7
console.log(maxNumberOfArr(arrayFour)); // 5
console.log(maxNumberOfArr(arrayFive)); // 5

function minNumberOfArr(array) {
    let minValue = array[0];
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        minValue = arrayElement < minValue ? arrayElement : minValue;
    }
    return minValue;
}

console.log(minNumberOfArr(arrayOne)); // -12
console.log(minNumberOfArr(arrayTwo)); // -8
console.log(minNumberOfArr(arrayThree)); // 1
console.log(minNumberOfArr(arrayFour)); // -3
console.log(minNumberOfArr(arrayFive)); // -3

function sumNumbersOfArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        sum += arrayElement || 0;
    }
    return sum;
}

console.log(sumNumbersOfArr(arrayOne)); // 32
console.log(sumNumbersOfArr(arrayTwo)); // -11
console.log(sumNumbersOfArr(arrayThree)); // 11
console.log(sumNumbersOfArr(arrayFour)); // 6
console.log(sumNumbersOfArr(arrayFive)); // 6

function onlyNegativeNumbers(array) {
    return array.filter((el) => el < 0);
}

console.log(onlyNegativeNumbers(arrayOne)); // [-5, -12, -3, -3, -2, -3, -1]
console.log(onlyNegativeNumbers(arrayTwo)); // [-1, -8, -2]
console.log(onlyNegativeNumbers(arrayThree)); // []
console.log(onlyNegativeNumbers(arrayFour)); //  [-3]
console.log(onlyNegativeNumbers(arrayFive)); // [-3]

function onlyPositiveNumbers(array) {
    return array.filter((el) => el > 0);
}

console.log(onlyPositiveNumbers(arrayOne));// [3, 1, 44, 3, 1, 2, 2, 1, 4]
console.log(onlyPositiveNumbers(arrayTwo)); // [];
console.log(onlyPositiveNumbers(arrayThree)); // [1, 7, 3];
console.log(onlyPositiveNumbers(arrayFour)); // [1, 3, 5];
console.log(onlyPositiveNumbers(arrayFive)); // [1, 3, 5];

function customReduce(array, reducer, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        if (acc === undefined) {
            [acc] = array;
        } else {
            acc = reducer(acc, arrayElement, i);
        }
    }
    return acc;
}

console.log('customReduce =  ', customReduce(arrayOne, (acc, value) => acc + value));
console.log('reduce =  ', arrayOne.reduce((acc, value) => acc + value));
console.log('customReduce =  ', customReduce(arrayTwo, (acc, value) => acc + value));
console.log('reduce =  ', arrayTwo.reduce((acc, value) => acc + value));
console.log('customReduce =  ', customReduce(arrayFive, (acc, value) => acc + value));
console.log('reduce =  ', arrayFive.reduce((acc, value) => acc + value));

function customMap(array, mapper) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        newArray.push(mapper(currentElement, i, array));
    }
    return newArray;
}

console.log('custom map', customMap(arrayOne, (el) => el * 2));
console.log('map', arrayOne.map((el) => el * 2));
console.log('custom map', customMap(arrayTwo, (el) => el * 2));
console.log('map', arrayTwo.map((el) => el * 2));
console.log('custom map', customMap(arrayFive, (el) => el * 2));
console.log('map', arrayFive.map((el) => el * 2));
