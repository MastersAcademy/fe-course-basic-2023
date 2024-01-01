import {useState} from "react";
import calculate from "../../utils/calculate.js";

import css from "./Calculator.module.css"

const Calculator = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState('');

    const onEqualClick = () => {
        const calculatedResult = calculate(firstValue, secondValue, operator);
        setResult(calculatedResult)
    }

    return <div className={css.contain}>
        <h1 className={css.main__heading}>Calculate Games</h1>
        <div className={css.content}>
            <div className={css.field}>
                <div className={css.item}>
                    {/*<label htmlFor="firstValue">max 10</label>*/}
                    <input
                        name="firstValue"
                        id="firstValue"
                        className={css.inp}
                        title="firstValue"
                        value={firstValue}
                        onChange={e => setFirstValue(e.target.value)}
                    />
                </div>
                <div className={css.item}>
                    <label htmlFor="operation"></label>
                    <select
                        name="operation"
                        title="operation"
                        id="operation"
                        className={css.inp__select}
                        value={operator}
                        onChange={e => setOperator(e.target.value)}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                        <option value="**">**</option>
                    </select>
                </div>
                <div className={css.item}>
                    <label htmlFor="secondValue"></label>
                    <input
                        name="secondValue"
                        id="secondValue"
                        className={css.inp}
                        title="secondValue"
                        value={secondValue}
                        onChange={e => setSecondValue(e.target.value)}
                    />
                </div>
                <div className={css.item}>
                    <button id="calculate" type="button" className={css.button} onClick={onEqualClick}>=</button>
                </div>
                <div className={css.item}>
                    <span id="result" className={css.result}>{result}</span>
                </div>
            </div>
            <div id="visualTimeDurationExecution" className={css.visualTimeDurationExecution}></div>
            <div id="visualInterpritation" className={css.visualInterpritation}></div>
        </div>
    </div>
}

export default Calculator;
