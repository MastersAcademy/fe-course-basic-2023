window.addEventListener('DOMContentLoaded', () => {
    let stateInputs = {};

    // transform value to numbers
    const checkNumInputs = (selector) => {
        const numInputs = document.querySelectorAll(selector);
        
        numInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9.]/g, '');
            });
        });
    };

    const calculate = (firstNum, operator, secondNum) => {
        let result;

        switch (operator) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum;
                break;
            case '%':
                result = firstNum % secondNum;
                break;
            case '**':
                result = firstNum ** secondNum;
                break;
            default:
                result = 'Invalid operator';
        }
        return result;
    };

    // Calculator
    const changeState = (state) => {
        const numbers = document.querySelectorAll('.number');
        const signs = document.querySelectorAll('.sign');
        const buttons = document.querySelectorAll('.button');
        const resultOutput = document.querySelector('.output-result');
        const resultInput = document.querySelector('.input-result');

        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkNumInputs('#second-number');

            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'INPUT':
                            const inputNumber = numbers[i];
                            if (inputNumber) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const num1 = +inputNumber.value;
                                    numbers[2].textContent = num1;
                                    result = calculate(+num1, signs[0].value, +numbers[1].value)
                                    resultOutput.textContent = result;
                                } else if (i === 1) {
                                    state[prop] = item.value;
                                    const num2 = +inputNumber.value;
                                    numbers[3].textContent = num2;
                                    result = calculate(+numbers[0].value, signs[0].value, +num2)
                                    resultOutput.textContent = result;
                                }
                            }
                            break;
                        case 'SELECT':
                            const inputSign = signs[i];
                            if (inputSign) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const sign = inputSign.value;
                                    signs[1].textContent = sign;
                                    result = calculate(+numbers[0].value, sign, +numbers[1].value)
                                    resultOutput.textContent = result;
                                }
                            }
                            break;
                        case 'BUTTON':
                            const buttonOutput = buttons[i];
                            if (buttonOutput) {
                                if (i === 0) {
                                    state[prop] = item.textContent;
                                    result = calculate(+numbers[0].value, signs[0].value, +numbers[1].value)
                                    resultInput.textContent = result;
                                }
                            }
                            break;
                        default:
                            console.log('Error');
                    }
                    console.log(state);
                });
            });
            return result;
        };
        calculator('input', numbers, 'numbers');
        calculator('change', signs, 'sign');
        calculator('click', buttons, 'button');
    };
    changeState(stateInputs);
});
