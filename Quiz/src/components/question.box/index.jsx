const QuestionBox = ({ currentQuestion, questions, onClick }) => {
    return (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Questão { currentQuestion + 1 }</span>/{questions.length}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className='answer-section'>
            { questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                <button 
                  key={index}
                  onClick={() => onClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}</button>
              )
            )}
          </div>
        </>
    )
}

export default QuestionBox