const Score = ({ score, questions }) => {
    return (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
    );
}

export default Score;