import { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import AnswerFeedback from './AnswerFeedback';
import styles from './Quiz.module.css';

const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of Lagos State?",
    options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
    correctAnswer: "Ikeja"
  },
  {
    id: 2,
    question: "What is the capital of Rivers State?",
    options: ["Aba", "Bonny", "Port Harcourt", "Onitsha"],
    correctAnswer: "Port Harcourt"
  },
  {
    id: 3,
    question: "What is the capital of Kano State?",
    options: ["Kano", "Kaduna", "Zaria", "Sokoto"],
    correctAnswer: "Kano"
  },
  {
    id: 4,
    question: "What is the capital of Oyo State?",
    options: ["Abeokuta", "Osogbo", "Akure", "Ibadan"],
    correctAnswer: "Ibadan"
  },
  {
    id: 5,
    question: "What is the capital of Cross River State?",
    options: ["Uyo", "Calabar", "Asaba", "Yenagoa"],
    correctAnswer: "Calabar"
  }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  function handleAnswerSubmit(answer) {
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    setSelectedAnswer(answer);

    if (correct) {
      setScore(score + 1);
    }

    // Wait 1.5 seconds before moving to next question
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer("");
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  }

  function handleRestartQuiz() {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowFeedback(false);
    setIsCorrect(false);
    setSelectedAnswer("");
    setQuizCompleted(false);
  }

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.title}>Nigerian States Quiz</h1>
      
      <ScoreBoard 
        score={score} 
        total={quizQuestions.length}
      />

      {!quizCompleted ? (
        <>
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSubmit}
            disabled={showFeedback}
            questionNumber={currentQuestionIndex + 1}
          />

          {showFeedback && (
            <AnswerFeedback 
              isCorrect={isCorrect}
              correctAnswer={currentQuestion.correctAnswer}
            />
          )}
        </>
      ) : (
        <div className={styles.completion}>
          <h2>Quiz Completed!</h2>
          <p>Final Score: {score}/{quizQuestions.length}</p>
          <button 
            className={styles.restartButton}
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;