import { useState } from "react";

function Operations(){
    let [inputOne, setInputOne] = useState();
    let [inputTwo, setInputTwo] = useState();

    return(
        <div className="App">
            <div>
                <form id="clean" name="">
                    <h1 className="title">ADVANCED CALCULATOR WITH REACT</h1>
                    <div className="inputs">
                        <label className="inputsNumber">Ingrese un número:</label>
                        <input
                        type="text"
                        className="inputsNumber"
                        id="valor1"
                        step="any"
                        value="0"
                        />
                        <button className="inputsNumber">CLEAR</button>

                        <label className="inputsNumber">Ingrese otro número:</label>
                        <input
                        type="text"
                        className="inputsNumber"
                        id="valor2"
                        step="any"
                        />
                        <button className="inputsNumber">CLEAR</button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <h1>Operations Results</h1>
                </div>
                <div>
                    <h4>Suma:</h4>
                    <h4>Resta:</h4>
                    <h4>Multiplicación:</h4>
                    <h4>División:</h4>
                    <h4>Raíz:</h4>
                    <h4>Hipotenusa:</h4>
                    <h4>Potencia:</h4>
                </div>
            </div>
        </div>
    )

}
export default Operations;