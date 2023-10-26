const VALUE_FIRST = 5;
const VALUE_SECOND = 7;
const FIELD = document.getElementById('field');

const TEMPLATE = `
    <ul>
        <li><b>Additional operation: </b>${VALUE_FIRST} + ${VALUE_SECOND} = ${VALUE_FIRST + VALUE_SECOND};</li>
        <li><b>Substract operation: </b>${VALUE_FIRST} - ${VALUE_SECOND} =${VALUE_FIRST - VALUE_SECOND};</li>
        <li><b>Multiplication  operation: </b>${VALUE_FIRST} * ${VALUE_SECOND} = ${VALUE_FIRST * VALUE_SECOND};</li>
        <li><b>Division  operation: </b>${VALUE_FIRST} / ${VALUE_SECOND} = ${(VALUE_FIRST / VALUE_SECOND).toFixed(2)};</li>
        <li><b>Modulo: </b>${VALUE_FIRST} % ${VALUE_SECOND} = ${VALUE_FIRST % VALUE_SECOND};</li>
        <li><b>Exponentiation operation: </b>${VALUE_FIRST} ** ${VALUE_SECOND} = ${VALUE_FIRST ** VALUE_SECOND};</li>
    </ul>
`;

FIELD.insertAdjacentHTML('beforeend', TEMPLATE);
