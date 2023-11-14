const arrayOne = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1];
const arrayTwo = [-1, -8, -2];
const arrayThree = [1, 7, 3];
const arrayFour = [1, undefined, 3, 5, -3];
const arrayFive = [1, NaN, 3, 5, -3];

function maxNumberOfArr(array) {
    let maxNumber = array[0];
    for (let count = 1; count < array.length; count++) {
        if (array[count] > maxNumber) {
            maxNumber = array[count];
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
    let minNumber = array[0];
    for (let count = 1; count < array.length; count++) {
        if (array[count] < minNumber) {
            minNumber = array[count];
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
    let sum = 0;
    for (let count = 0; count < array.length; count++) {
        if (typeof array[count] === 'number' && !Number.isNaN(array[count])) {
            sum += array[count];
        }
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
    return array.filter((element) => element < 0);
}
console.log('Only negative numbers');
console.log('arrayOne negative numbers:', onlyNegativeNumbers(arrayOne));
console.log('arrayTwo negative numbers:', onlyNegativeNumbers(arrayTwo));
console.log('arrayThree negative numbers:', onlyNegativeNumbers(arrayThree));
console.log('arrayFour negative numbers:', onlyNegativeNumbers(arrayFour));
console.log('arrayFive negative numbers:', onlyNegativeNumbers(arrayFive));

function onlyPositiveNumbers(array) {
    return array.filter((element) => element > 0);
}
console.log('Only positive numbers');
console.log('arrayOne positive numbers:', onlyPositiveNumbers(arrayOne));
console.log('arrayTwo positive numbers:', onlyPositiveNumbers(arrayTwo));
console.log('arrayThree positive numbers:', onlyPositiveNumbers(arrayThree));
console.log('arrayFour positive numbers:', onlyPositiveNumbers(arrayFour));
console.log('arrayFive positive numbers:', onlyPositiveNumbers(arrayFive));
