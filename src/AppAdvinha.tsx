import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

function AppAdvinha() {
  const [contador, setContador] = useState(0);

  function handleContador(tipo: "decrementar" | "incrementar") {
    if (tipo === "incrementar") setContador(contador + 1);
    if (tipo === "decrementar") setContador(contador - 1);
  }

  useEffect(() => {
    if (contador === 10) alert("10");
  }, [contador]);

  const [numero, setNumero] = useState(Math.ceil(Math.random() * 19));
  const [input, setInput] = useState("");

  function handleChute() {
    console.log(parseInt(input));
    console.log(numero);
    var num = parseInt(input)
      if (num === numero) {alert("Acertou")}
      else if((Math.abs((num - numero))) <= 3) {alert("Tá quente!")}
      else {alert("Tá Frio!")}
    }


  function handleInput(event: ChangeEvent){
    setInput((event.target as HTMLInputElement).value);
  }

  return (
    <div className="AppAdvinha">
      <p>Contador: {contador}</p>
      <button onClick={() => handleContador("decrementar")}>-</button>
      <button onClick={() => handleContador("incrementar")}>+</button>
      <hr></hr>
      <p>Tente descobrir o número de 1 a 20:</p>
      <input
        id="inputChute"
        type="number"
        placeholder="Digite um número"
        onChange={(event) => handleInput(event)}
      ></input>
      <button onClick={() => handleChute()}>Chutar</button>
    </div>
  );
}

export default AppAdvinha;
