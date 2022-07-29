import styled from 'styled-components'

const Centralizar = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Container = styled(Centralizar)`
  height: 92vh;
`;

export const Calculadora = styled.div`
    background-color: #585858;
    height: 350px;
    width: 280px;
`;

export const CalculadoraInput = styled.div`
    border-bottom: 1px solid #333;
    margin: 1rem 1rem 0;
    padding-bottom: 1rem;

    input{
        border: none;
        font-size: 1.2rem;
        padding: 0.2rem 0;
        width: 100%;
    }
`;

export const Row = styled(Centralizar)`
    justify-content: space-evenly;
    margin: 0.8rem 0;

    button{
        border-radius: 100%;
        cursor: pointer;
        height: 40px;
        width: 40px;
    }
`