const firstNumber = +prompt('Enter the first number', '').trim();
const operator = prompt('Enter mathematics operator (+, -, *, /, %, **,)', '').trim();
const secondNumber = +prompt('Enter the second number', '').trim();

const count = () => {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '%':
            return firstNumber % secondNumber;
        case '**':
            return firstNumber ** secondNumber;
        default:
            alert('You did not enter an operator');
    }
    return count();
};

const equal = count();

alert(`Your result: ${Number.isNaN(equal) || equal === undefined || equal === '' ? 'Something went wrong...' : equal}`);
window.location.reload();
