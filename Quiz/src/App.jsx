import { useState } from 'react'
import QuestionBox from './components/question.box';
import Score from './components/score';

const questions = [
  {
    questionText: "Qual o idioma falado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

export function App() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function handleAnswer(isCorrect){
      if(isCorrect)
      {
        setScore(score + 1)
      }
      
      const nextQuestion = currentQuestion + 1
      if(nextQuestion < questions.length)
      {
        setCurrentQuestion(nextQuestion)
      }
      else
        setShowScore(true)
  }

  return (
    <div className="app">
      { showScore ? (
        <Score score={score} questions={questions} />
      ) : (
        <QuestionBox 
          currentQuestion={currentQuestion} 
          questions={questions} 
          onClick={handleAnswer}
        />
      )}
    </div>
  )
}

