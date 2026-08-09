import { useState } from 'react'
import QuestionScreen from './QuestionScreen'
import ResultScreen from './ResultScreen'
import StartScreen from './StartScreen'

const questions = [
  {
    id: 1,
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
    answer: 'Delhi',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
  {
    id: 3,
    question: 'How many days are in a week?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    id: 4,
    question: 'What is 5 + 5?',
    options: ['8', '10', '12', '15'],
    answer: '10',
  },
  {
    id: 5,
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'CSS', 'Python', 'Java'],
    answer: 'CSS',
  },
]

const QuizComponent = () => {
  const [currentQuestionCount, setCurrentQuestionCount] = useState(0)
  const [step, setStep] = useState(1)
  const [score, setScore] = useState(0)

  const startQuiz = () => {
    setStep(2)
  }

  const restartQuiz = () => {
    setStep(1)
    setCurrentQuestionCount(0)
    setScore(0)
  }

  return (
    <div className="quiz-container">
      {step === 1 && <StartScreen startQuiz={startQuiz} />}
      {step === 2 && (
        <QuestionScreen
          questions={questions}
          currentQuestionCount={currentQuestionCount}
          setCurrentQuestionCount={setCurrentQuestionCount}
          score={score}
          setScore={setScore}
          setStep={setStep}
        />
      )}
      {step === 3 && <ResultScreen restartQuiz={restartQuiz} score={score} questions={questions} />}
    </div>
  )
}

export default QuizComponent
