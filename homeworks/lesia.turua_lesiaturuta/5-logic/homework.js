/**
 *
 * @param firstValue string with first number
 * @param secondValue string with second number
 * @param operation string with operation symbol
 * @returns {string|number} result of calculation or error message:
 * - if firstValue or secondValue is not a number, return 'Enter a number'
 * - if operation is not '+', '-', '*', '/', return 'Choose a valid operation'
 * - if the result is more than 100, return 'Result is too big'
 * - else return number of result: 1 '+' 2 returns 3
 *
 */
function calculate(firstValue, secondValue, operation) {
    const operations = ['/', '*', '-', '+'];

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (!firstNumber || !secondNumber) {
        return 'Enter a number';
    }

    if (!operations.includes(operation)) {
        return 'Choose a valid operation';
    }

    let result = 0;
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
            result = firstNumber / secondNumber;
            break;
        default:
            return 'Invalid operation';
    }
    return result > 100 ? 'Result is too big' : result;
}

function createImages(number) {
    console.log('number', number);
    const div = document.createElement('div');
    div.setAttribute('style', 'display:flex;');
    let divTemp = document.createElement('div');
    let marginTop = 0;
    const imgSetting = {
        width: 90,
        height: 90,
    };
    const top = 15;
    for (let i = 0; i < number; i++) {
        const img = document.createElement('img');
        divTemp.setAttribute('style', `display:flex;position:relative; width: ${imgSetting.width}px; height: ${imgSetting.width + top * 10}px;`);
        img.setAttribute('style', `top: ${marginTop * top}px; position:absolute;`);
        img.setAttribute('src', './assets/card.png');
        img.setAttribute('width', imgSetting.width);
        img.setAttribute('height', imgSetting.height);
        marginTop++;
        divTemp.appendChild(img);
        if (marginTop === 10) {
            div.appendChild(divTemp);
            divTemp = document.createElement('div');
            divTemp.setAttribute('style', `display:flex;position:relative; width: ${imgSetting.width}px; height: ${imgSetting.width + top * marginTop}px;`);
            marginTop = 0;
        }
    }
    if (divTemp.hasChildNodes()) {
        divTemp.setAttribute('style', `display:flex;position:relative; width: ${imgSetting.width}px; height: ${imgSetting.width + top * marginTop}px;`);
        div.appendChild(divTemp);
    }
    return div;
}

const cleanElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};
window.calculate = calculate;
window.createImages = createImages;
window.cleanElement = cleanElement;
