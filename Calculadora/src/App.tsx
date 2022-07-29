import { useState } from 'react'
import { Botões } from './components/Botões';
import './style'
import { Calculadora, CalculadoraInput, Container } from './style'

export function App() {
  const [conta, setConta] = useState<string>("");

  return (
    <Container>
      <Calculadora>
        <CalculadoraInput>
          <input 
            value={conta} 
            onChange={(e) => setConta(e.target.value)} 
            type="text"
            autoFocus
          >
          </input>
        </CalculadoraInput>

        <div>
          <Botões ContaSet={setConta} Conta={conta}></Botões>
        </div>
      </Calculadora>
    </Container>
  )
}