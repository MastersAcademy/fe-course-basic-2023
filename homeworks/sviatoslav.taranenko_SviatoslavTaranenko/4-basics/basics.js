const title = document.getElementById('title');
title.textContent = 'Basic Math Operations';

const resultsDiv = document.getElementById('results');

function addResult(paragraph, expression, result) {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = `${paragraph}: ${expression} = ${result}`;
    resultsDiv.appendChild(resultParagraph);
}

const firstNumber = 20;
const secondNumber = 30;

const result1 = firstNumber + secondNumber;
addResult('Operation addition:', `${firstNumber} + ${secondNumber}`, result1);

const result2 = firstNumber - secondNumber;
addResult('Operation addition:', `${firstNumber} - ${secondNumber}`, result2);

const result3 = firstNumber * secondNumber;
addResult('Operation addition:', `${firstNumber} * ${secondNumber}`, result3);

const result4 = firstNumber / secondNumber;
addResult('Operation addition:', `${firstNumber} / ${secondNumber}`, result4);

const result5 = firstNumber % secondNumber;
addResult('Operation addition:', `${firstNumber} % ${secondNumber}`, result5);

const result6 = firstNumber ** secondNumber;
addResult('Operation addition:', `${firstNumber} ** ${secondNumber}`, result6);
