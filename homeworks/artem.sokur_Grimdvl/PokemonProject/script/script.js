window.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const signs = document.querySelectorAll('.sign');
    const buttons = document.querySelectorAll('.button');
    const resultOutput = document.querySelector('.output-result');
    const resultOutputCards = document.querySelector('.output__result');
    const resultInput = document.querySelector('.input-result');
    const equel = document.querySelectorAll('.output-equal');

    const stateInputs = {};

    // transform value to numbers
    const checkNumInputs = (selector) => {
        const numInputs = document.querySelectorAll(selector);
        numInputs.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9.]/g, '');
            });
        });
    };

    class PokemonsCards {
        constructor(src, alt, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'output-card';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach((className) => element.classList.add(className));
            }
            element.innerHTML = `<img src=${this.src} alt=${this.alt}>`;
            this.parent.append(element);
        }
    }

    const drawPokemons = (inputValue, containerSelector) => {
        const cardContainer = document.querySelector(containerSelector);
        cardContainer.innerHTML = '';
        const numberOfPokemons = parseInt(inputValue, 10);
        const isNegative = numberOfPokemons < 0;
        for (let i = 0; i < Math.abs(numberOfPokemons); i++) {
            new PokemonsCards(
                'img/pokemon.png',
                'pokemon',
                containerSelector,
            ).render();
        }
        if (inputValue > 100) {
            resultOutputCards.textContent = 'To many pokemons';
        }
        return isNegative ? -numberOfPokemons : numberOfPokemons;
    };

    let result;
    const calculate = (firstNum, operator, secondNum) => {
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
        if (result > 100) {
            result = 'Too many';
        } else {
            result = Math.round(result * 100) / 100;
        }
        equel.forEach((item) => {
            item.textContent = '=';
        });
        if (operator === 'sign') {
            result = 'Invalid operator';
            equel.forEach((item) => {
                item.textContent = '';
            });
        } else {
            result = `${result} pokemons`;
        }
        return result;
    };

    // Calculator
    const changeState = (state) => {
        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkNumInputs('#second-number');

            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    const inputNumber = numbers[i];
                    const inputSign = signs[i];
                    const buttonOutput = buttons[i];
                    switch (item.nodeName) {
                        case 'INPUT':
                            if (inputNumber) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const num1 = +inputNumber.value;
                                    numbers[2].textContent = num1;
                                    drawPokemons(num1, '.calculator .output__first');
                                    if (num1 === '' || numbers[1].value === '') {
                                        resultOutput.textContent = 'Please enter all numbers';
                                    } else {
                                        result = calculate(
                                            +num1,
                                            signs[0].value,
                                            +numbers[1].value,
                                        );
                                        resultOutput.textContent = result;
                                        drawPokemons(result, '.calculator .output__result');
                                    }
                                } else if (i === 1) {
                                    state[prop] = item.value;
                                    const num2 = +inputNumber.value;
                                    numbers[3].textContent = num2;
                                    drawPokemons(num2, '.calculator .output__second');
                                    if (numbers[0].value === '' || num2 === '') {
                                        resultOutput.textContent = 'Please enter all numbers';
                                    } else {
                                        result = calculate(
                                            +numbers[0].value,
                                            signs[0].value,
                                            +num2,
                                        );
                                        resultOutput.textContent = result;
                                        drawPokemons(result, '.calculator .output__result');
                                    }
                                }
                            }
                            break;
                        case 'SELECT':
                            if (inputSign) {
                                if (i === 0) {
                                    state[prop] = item.value;
                                    const sign = inputSign.value;
                                    signs[1].textContent = sign;
                                    signs[2].textContent = sign;
                                    if (numbers[0].value === '' || numbers[1].value === '') {
                                        resultOutput.textContent = 'Please enter all numbers';
                                    } else {
                                        result = calculate(
                                            +numbers[0].value,
                                            sign,
                                            +numbers[1].value,
                                        );
                                        resultOutput.textContent = result;
                                        drawPokemons(result, '.calculator .output__result');
                                    }
                                }
                            }
                            break;
                        case 'BUTTON':
                            if (buttonOutput) {
                                if (i === 0) {
                                    state[prop] = item.textContent;
                                    result = calculate(
                                        +numbers[0].value,
                                        signs[0].value,
                                        +numbers[1].value,
                                    );
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
        calculator('input', numbers, 'number');
        calculator('change', signs, 'sign');
        calculator('click', buttons, 'button');
    };
    changeState(stateInputs);
});
