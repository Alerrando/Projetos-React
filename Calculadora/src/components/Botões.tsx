import { useEffect } from "react";
import { Row } from "../style";

type BotõesProps = {
  ContaSet: (contaAtual:string) => void;
  Conta: string;
};


export function Botões(props: BotõesProps) {

  function verificarConta() {
    try {
      let validarConta = eval(props.Conta);
      if (validarConta) {
        props.ContaSet(validarConta);
        return;
      } else {
        alert("Conta invalida!");
        return;
      }
    } catch (error) {
      alert("Conta invalida!");
      return;
    }
  }

  return (
    <>
      {document.body.addEventListener("keydown", function(e){
        if(e.keyCode == 13)
            verificarConta()
      })}

      <Row>
        <button onClick={(e) => props.ContaSet("")}>C</button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          /
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          *
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          -
        </button>
      </Row>

      <Row>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          7
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          8
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          9
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          +
        </button>
      </Row>

      <Row>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          4
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          5
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          6
        </button>
        <button onClick={verificarConta}>=</button>
      </Row>

      <Row>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          1
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          2
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          3
        </button>
        <button 
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
          >
            .
        </button>
      </Row>

      <Row>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          (
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          0
        </button>
        <button
          onClick={(e) => props.ContaSet(props.Conta + (e.target as HTMLInputElement).innerHTML)}
        >
          )
        </button>
        <button
          onClick={(e) =>
            props.ContaSet(props.Conta.slice(0, props.Conta.length - 1))
          }
        >{`<<`}</button>
      </Row>
    </>
  );
}
