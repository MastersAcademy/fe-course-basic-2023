function calculate(firstValue, secondValue, operation) {
    let result;
    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (firstValue === '' || secondValue === '') return 'Enter a number';
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) return 'Enter a number';

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                result = 'You can\'t divide by zero';
                break;
            }

            result = Number.parseFloat((firstNumber / secondNumber).toFixed(2));
            break;
        default:
            result = 'Choose a valid operation';
            break;
    }

    if (result > 100) return 'Too many pokemons';

    if (result > 1) return `${result} pokemons`;

    return `${result} pokemon`;
}

window.calculate = calculate;
