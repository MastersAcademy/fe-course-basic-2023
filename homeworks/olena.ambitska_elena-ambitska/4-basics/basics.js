const FIELD = document.getElementById('field');
const FORM_SUBMIT = document.querySelector('.count__button');

function updateTemplate(num1, num2) {
    const TEMPLATE = `
    <ul>
        <li><b>Additional operation: </b>${num1} + ${num2} = ${num1 + num2};</li>
        <li><b>Substract operation: </b>${num1} - ${num2} =${num1 - num2};</li>
        <li><b>Multiplication  operation: </b>${num1} * ${num2} = ${num1 * num2};</li>
        <li><b>Division  operation: </b>${num1} / ${num2} = ${(num1 / num2).toFixed(2)};</li>
        <li><b>Modulo: </b>${num1} % ${num2} = ${num1 % num2};</li>
        <li><b>Exponentiation operation: </b>${num1} ** ${num2} = ${num1 ** num2};</li>
    </ul>
`;

    FIELD.innerHTML = '';
    FIELD.insertAdjacentHTML('beforeend', TEMPLATE);
}
FORM_SUBMIT.addEventListener('click', (e) => {
    e.preventDefault();
    const num1 = document.querySelector('.counter__input--first').value;
    const num2 = document.querySelector('.counter__input--second').value;

    if (num1 === '' || num2 === '') {
        FIELD.innerHTML = '<p>Fill fields by numbers</p>';
        return;
    }

    updateTemplate(+num1, +num2);
});
