const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function getFilterArray(array) {
    const filterArray = [];
    let filterArrayIndex = 0;
    for (let count = 0; count < array.length; count++) {
        if (typeof array[count] === 'number' && !Number.isNaN(array[count])) {
            filterArray[filterArrayIndex] = array[count];
            filterArrayIndex++;
        }
    }
    return filterArray;
}

function maxNumberOfArr(array) {
    const filterArray = getFilterArray(array);
    let maxNumber = filterArray[0];
    for (let count = 1; count < filterArray.length; count++) {
        if (filterArray[count] > maxNumber) {
            maxNumber = filterArray[count];
        }
    }
    return maxNumber;
}
console.log('Max Numbers');
console.log(`Max number of arrayOne = ${maxNumberOfArr(arrayOne)}`); // 44
console.log(`Max number of arrayTwo = ${maxNumberOfArr(arrayTwo)}`); // -1
console.log(`Max number of arrayThree = ${maxNumberOfArr(arrayThree)}`); // 7
console.log(`Max number of arrayFour = ${maxNumberOfArr(arrayFour)}`); // 5
console.log(`Max number of arrayFive = ${maxNumberOfArr(arrayFive)}`); // 5

function minNumberOfArr(array) {
    const filterArray = getFilterArray(array);
    let minNumber = filterArray[0];
    for (let count = 1; count < filterArray.length; count++) {
        if (filterArray[count] < minNumber) {
            minNumber = filterArray[count];
        }
    }
    return minNumber;
}
console.log('Min Numbers');
console.log(`Min number of arrayOne = ${minNumberOfArr(arrayOne)}`);
console.log(`Min number of arrayTwo = ${minNumberOfArr(arrayTwo)}`);
console.log(`Min number of arrayThree = ${minNumberOfArr(arrayThree)}`);
console.log(`Min number of arrayFour = ${minNumberOfArr(arrayFour)}`);
console.log(`Min number of arrayFive = ${minNumberOfArr(arrayFive)}`);

function sumNumbersOfArr(array) {
    const filterArray = getFilterArray(array);
    let sum = 0;
    for (let count = 0; count < filterArray.length; count++) {
        sum += filterArray[count];
    }
    return sum;
}
console.log('Sum of array numbers');
console.log(`Sum of arrayOne = ${sumNumbersOfArr(arrayOne)}`);
console.log(`Sum of arrayTwo = ${sumNumbersOfArr(arrayTwo)}`);
console.log(`Sum of arrayThree = ${sumNumbersOfArr(arrayThree)}`);
console.log(`Sum of arrayFour = ${sumNumbersOfArr(arrayFour)}`);
console.log(`Sum of arrayFive = ${sumNumbersOfArr(arrayFive)}`);

function onlyNegativeNumbers(array) {
    const filterArray = getFilterArray(array);
    return filterArray.filter((element) => element < 0);
}
console.log('Only negative numbers');
console.log('arrayOne negative numbers:', onlyNegativeNumbers(arrayOne));
console.log('arrayTwo negative numbers:', onlyNegativeNumbers(arrayTwo));
console.log('arrayThree negative numbers:', onlyNegativeNumbers(arrayThree));
console.log('arrayFour negative numbers:', onlyNegativeNumbers(arrayFour));
console.log('arrayFive negative numbers:', onlyNegativeNumbers(arrayFive));

function onlyPositiveNumbers(array) {
    const filterArray = getFilterArray(array);
    return filterArray.filter((element) => element > 0);
}
console.log('Only positive numbers');
console.log('arrayOne positive numbers:', onlyPositiveNumbers(arrayOne));
console.log('arrayTwo positive numbers:', onlyPositiveNumbers(arrayTwo));
console.log('arrayThree positive numbers:', onlyPositiveNumbers(arrayThree));
console.log('arrayFour positive numbers:', onlyPositiveNumbers(arrayFour));
console.log('arrayFive positive numbers:', onlyPositiveNumbers(arrayFive));

const testArray = [5, -6, 7, 10, 15, -7];
function customReduce(array, reducer, initialValue) {
    let reducedArray = initialValue;
    for (let count = 0; count < array.length; count++) {
        reducedArray = reducer(array[count], reducedArray);
    }
    return reducedArray;
}

function getPow2Sum(element, acc) {
    return acc + element ** 2;
}

function getDifference(element, acc) {
    return acc - element;
}

console.log(customReduce(testArray, getPow2Sum, 0));
console.log(customReduce(testArray, getDifference, 0));

function customMap(array, mapper) {
    for (let count = 0; count < array.length; count++) {
        array[count] = mapper(array[count]);
    }
    return array;
}

function add10(element) {
    return element + 10;
}

function getString(element) {
    return String(element);
}
console.log(customMap(testArray, add10));
console.log(customMap(testArray, getString));
