const numOne = 2;
const numTwo = 5;
const listResults = document.querySelector('.list__results');

const resultAdditional = numOne + numTwo;
const resultSubtraction = numOne - numTwo;
const resultMultiplication = numOne * numTwo;
const resultDivision = numOne / numTwo;
const resultRemainder = numOne % numTwo;
const resultDegree = numOne ** numTwo;

listResults.innerHTML = `
<ul class='list__items'>
    <li class='list__item'> Operation addition: ${numOne} + ${numTwo} = ${resultAdditional} </li>
    <li class='list__item'> Operation subtraction: ${numOne} - ${numTwo} = ${resultSubtraction} </li>
    <li class='list__item'> Operation multiplication: ${numOne} * ${numTwo} = ${resultMultiplication} </li>
    <li class='list__item'> Operation division: ${numOne} / ${numTwo} = ${resultDivision} </li>
    <li class='list__item'> Operation remainder: ${numOne} % ${numTwo} = ${resultRemainder} </li>
    <li class='list__item'> Operation degree: ${numOne} ** ${numTwo} = ${resultDegree} </li>
</ul>`;

console.log(`Operation addition: ${numOne} + ${numTwo} = ${resultAdditional}`);
console.log(`Operation subtraction: ${numOne} - ${numTwo} = ${resultSubtraction}`);
console.log(`Operation multiplication: ${numOne} * ${numTwo} = ${resultMultiplication}`);
console.log(`Operation division: ${numOne} / ${numTwo} = ${resultDivision}`);
console.log(`Operation remainder: ${numOne} % ${numTwo} = ${resultRemainder}`);
console.log(`Operation degree: ${numOne} ** ${numTwo} = ${resultDegree}`);
