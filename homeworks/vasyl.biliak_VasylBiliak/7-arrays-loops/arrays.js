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

console.log('maxNumberOfArr:');
console.log(maxNumberOfArr(arrayOne));
console.log(maxNumberOfArr(arrayTwo));
console.log(maxNumberOfArr(arrayThree));
console.log(maxNumberOfArr(arrayFour));
console.log(maxNumberOfArr(arrayFive));

function minNumberOfArr(array) {
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

console.log('minNumberOfArr:');
console.log(minNumberOfArr(arrayOne));
console.log(minNumberOfArr(arrayTwo));
console.log(minNumberOfArr(arrayThree));
console.log(minNumberOfArr(arrayFour));
console.log(minNumberOfArr(arrayFive));

function sumNumbersOfArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log('sumNumbersOfArr:');
console.log(sumNumbersOfArr(arrayOne));
console.log(sumNumbersOfArr(arrayTwo));
console.log(sumNumbersOfArr(arrayThree));
console.log(sumNumbersOfArr(arrayFour));
console.log(sumNumbersOfArr(arrayFive));

function onlyNegativeNumbers(array) {
    return array.filter((num) => num < 0);
}

console.log('onlyNegativeNumbers:');
console.log(onlyNegativeNumbers(arrayOne));
console.log(onlyNegativeNumbers(arrayTwo));
console.log(onlyNegativeNumbers(arrayThree));
console.log(onlyNegativeNumbers(arrayFour));
console.log(onlyNegativeNumbers(arrayFive));

function onlyPositiveNumbers(array) {
    return array.filter((num) => num > 0);
}

console.log('onlyPositiveNumbers:');
console.log(onlyPositiveNumbers(arrayOne));
console.log(onlyPositiveNumbers(arrayTwo));
console.log(onlyPositiveNumbers(arrayThree));
console.log(onlyPositiveNumbers(arrayFour));
console.log(onlyPositiveNumbers(arrayFive));

function customReduce(array, reducer, initialValue) {
    return array.reduce((accumulator, arrayElement, i) => {
        if (accumulator === undefined && i === 0) {
            return arrayElement;
        }
        return reducer(accumulator, arrayElement, i);
    }, initialValue);
}

console.log('custom reduce:');
console.log(customReduce(arrayOne, (accumulator, value) => accumulator + value));
console.log(customReduce(arrayTwo, (accumulator, value) => accumulator + value));
console.log(customReduce(arrayThree, (accumulator, value) => accumulator + value));
console.log(customReduce(arrayFour, (accumulator, value) => accumulator + value));
console.log(customReduce(arrayFive, (accumulator, value) => accumulator + value));

function customMap(array, mapper) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(mapper(array[i], i, array));
    }
    return resultArray;
}

console.log('custom map:');
console.log(customMap(arrayOne, (el) => el));
console.log(customMap(arrayTwo, (el) => el));
console.log(customMap(arrayThree, (el) => el));
console.log(customMap(arrayFour, (el) => el));
console.log(customMap(arrayFive, (el) => el));
