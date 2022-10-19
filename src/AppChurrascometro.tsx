import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./App.css";

function AppChurrascometro() {
  const [input, setInput] = useState({
    input1: "",
    input2: "",
    resultado: 0,
    adultos: "",
    criancas: "",
    kitChurrasco: ""
  });

  function handleInput(event: ChangeEvent, key: string) {
    setInput((values) => ({
      ...values,
      [key]: (event.target as HTMLInputElement).value,
    }));
  }

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const inputadultosRef = useRef(null);
  const inputcriancasRef = useRef(null);

  function handleFocus(event: React.KeyboardEvent) {
    if (event.keyCode === 8 && !input.input2.length) {
      (input1Ref?.current as unknown as HTMLInputElement).focus();
    }
  }

  useEffect(() => {
    if (input.input1.length === 4) {
      (input2Ref?.current as unknown as HTMLInputElement).focus();
    }
  }, [input.input1]);

  useEffect(() => {
    let s1 = isNaN(parseInt(input.input1)) ? 0 : parseInt(input.input1);
    let s2 = isNaN(parseInt(input.input2)) ? 0 : parseInt(input.input2);
    const resultado = s1 + s2;
    setInput((values) => ({
      ...values,
      ["resultado"]: resultado,
    }));
  }, [input.input1, input.input2]);

  useEffect(() => {
    let adulto = isNaN(parseInt(input.adultos)) ? 0 : parseInt(input.adultos);
    let crianca = isNaN(parseInt(input.criancas)) ? 0 : parseInt(input.criancas);
    let cerveja = adulto * 2;
    let refrigerante = (crianca * 2) + (adulto * 1);
    let agua = (crianca * 1) + (adulto * 1);
    let carne = (crianca * 0.2) + (adulto * 0.5);
    const kitChurrasco = `${cerveja} Lts de Cerveja, ${refrigerante} Lts de Refrigerante, ${agua} Lts de Água e ${carne} Kgs de carne.`
    setInput((values) => ({
        ...values,
        "kitChurrasco": kitChurrasco,
    }));
}, [input.adultos, input.criancas]);

  return (
    <div className="AppChurrascometro">
      <input
        onChange={(event) => handleInput(event, "input1")}
        value={input.input1}
        ref={input1Ref}
      />
      +
      <input
        onChange={(event) => handleInput(event, "input2")}
        value={input.input2}
        ref={input2Ref}
        onKeyDown={(e) => handleFocus(e)}
      />
      <p>{input.resultado}</p>
      <hr></hr>
      <p>Churrascômetro</p>
      <input
        type="number"
        min="0"
        placeholder="Número de adultos"
        onChange={(event) => handleInput(event, "adultos")}
        value={input.adultos}
        ref={inputadultosRef}
      />
      <input
        type="number"
        min="0"
        placeholder="Número de Crianças"
        onChange={(event) => handleInput(event, "criancas")}
        value={input.criancas}
        ref={inputcriancasRef}
      />
      <div className="resposta-Churrascometro">
        <span>{input.kitChurrasco}</span>
      </div>
    </div>
  );
}

export default AppChurrascometro;
