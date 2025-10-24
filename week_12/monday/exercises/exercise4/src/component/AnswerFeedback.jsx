import styles from './Quiz.module.css';

function AnswerFeedback({ isCorrect, correctAnswer }) {
  return (
    <div className={`${styles.feedback} ${
      isCorrect ? styles.correct : styles.incorrect
    }`}>
      {isCorrect ? (
        <p>✅ Correct!</p>
      ) : (
        <p>❌ Wrong! The correct answer is: {correctAnswer}</p>
      )}
    </div>
  );
}

export default AnswerFeedback;