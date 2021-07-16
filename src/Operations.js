import { useState } from "react";

function Operations() {
  let [inputOne, setInputOne] = useState(null);
  let [inputTwo, setInputTwo] = useState(null);

  function clean(props) {
    setInputOne((props.target.value = ""));
    setInputTwo((props.target.value = ""));
  }

  function inputValue1(props) {
    setInputOne(props.target.value);
  }

  function inputValue2(props) {
    setInputTwo(props.target.value);
  }

  return (
    <div className="App">
      <div>
        <form id="clean" name="">
          <h1 className="title">ADVANCED CALCULATOR WITH REACT</h1>
          <div className="inputs">
            <label className="inputsNumber">Ingrese un número:</label>
            <input
              type="number"
              onInput={inputValue1}
              className="inputsNumber"
              id="valor1"
              step="any"
              value={inputOne}
            />
            <button onClick={clean} className="inputsNumber">
              CLEAR
            </button>

            <label className="inputsNumber">Ingrese otro número:</label>
            <input
              type="number"
              onInput={inputValue2}
              className="inputsNumber"
              id="valor2"
              step="any"
              value={inputTwo}
            />
            <button onClick={clean} className="inputsNumber">
              CLEAR
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <h1>Operations Results</h1>
        </div>
        <div>
          <h4>
            Suma:{" "}
            <span id="adition">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " + " +
                  inputTwo +
                  " = " +
                  Number(inputOne * 1 + inputTwo * 1)}
            </span>
          </h4>
          <h4>
            Resta:{" "}
            <span id="subtraction">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " - " +
                  inputTwo +
                  " = " +
                  Number(inputOne - inputTwo)}
            </span>
          </h4>
          <h4>
            División:{" "}
            <span id="division">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " / " +
                  inputTwo +
                  " = " +
                  Number(inputOne / inputTwo)}
            </span>
          </h4>
          <h4>
            Multiplicación:{" "}
            <span id="multiplication">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " * " +
                  inputTwo +
                  " = " +
                  Number(inputOne * inputTwo)}
            </span>
          </h4>
          <h4>
            Raíz:{" "}
            <span id="root">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " √ " +
                  inputTwo +
                  " = " +
                  Math.pow(inputOne, 1 / inputTwo)}
            </span>
          </h4>
          <h4>
            Hipotenusa:{" "}
            <span id="hypotenuse">
              {inputOne === null || inputTwo === null
                ? ""
                : "(" +
                  inputOne +
                  " ^2 " +
                  " + " +
                  inputTwo +
                  " ^2 " +
                  ")" +
                  " = " +
                  Number(inputOne * inputOne + inputTwo * inputTwo)}
            </span>
          </h4>
          <h4>
            Potencia:{" "}
            <span id="power">
              {inputOne === null || inputTwo === null
                ? ""
                : inputOne +
                  " ^ " +
                  inputTwo +
                  " = " +
                  Math.pow(inputOne, inputTwo)}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Operations;
