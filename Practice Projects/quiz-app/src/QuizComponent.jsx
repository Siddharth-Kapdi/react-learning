import { useState } from 'react'
import QuestionScreen from './QuestionScreen'
import ResultScreen from './ResultScreen'
import StartScreen from './StartScreen'

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
  {
    id: 3,
    question: 'What is 5 × 6?',
    options: ['20', '25', '30', '35'],
    answer: '30',
  },
  {
    id: 4,
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'CSS', 'JavaScript', 'Python'],
    answer: 'CSS',
  },
  {
    id: 5,
    question: 'Which is the largest ocean?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific',
  },
  {
    id: 6,
    question: 'Who wrote Romeo and Juliet?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
    answer: 'William Shakespeare',
  },
  {
    id: 7,
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Text Machine Language',
      'Hyperlink Text Management Language',
      'Home Tool Markup Language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    id: 8,
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Tiger', 'Lion', 'Elephant', 'Leopard'],
    answer: 'Lion',
  },
  {
    id: 9,
    question: 'What is the value of 10 + 15?',
    options: ['20', '25', '30', '35'],
    answer: '25',
  },
  {
    id: 10,
    question: 'Which keyword is used to declare a variable in JavaScript?',
    options: ['var', 'define', 'variable', 'declare'],
    answer: 'var',
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
