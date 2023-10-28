const calculateButton = document.querySelector('#calculate');
const resultBlock = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);

    const sum = num1 + num2;
    const sum1 = num1 - num2;
    const sum2 = num1 * num2;
    const sum3 = num1 / num2;
    const sum4 = num1 % num2;
    const sum5 = num1 ** num2;

    resultBlock.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Addition</td>
          <td>${num1} + ${num2} = ${sum}</td>
        </tr>
        <tr>
          <td>Subtraction</td>
          <td>${num1} - ${num2} = ${sum1}</td>
        </tr>
        <tr>
          <td>Multiplication</td>
          <td>${num1} * ${num2} = ${sum2}</td>
        </tr>
        <tr>
          <td>Division</td>
          <td>${num1} / ${num2} = ${sum3}</td>
        </tr>
        <tr>
          <td>Obtaining the remainder from division</td>
          <td>${num1} % ${num2} = ${sum4}</td>
        </tr>
        <tr>
          <td>Exponentiation</td>
          <td>${num1} ** ${num2} = ${sum5}</td>
        </tr>
      </tbody>
    </table>
    `;
});
