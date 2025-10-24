import styles from './Quiz.module.css';

function Question({ question, options, selectedAnswer, onAnswerSelect, disabled, questionNumber }) {
  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionTitle}>
        Question {questionNumber}:
      </h2>
      <p className={styles.questionText}>{question}</p>
      
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles.optionButton} ${
              selectedAnswer === option ? styles.selected : ''
            }`}
            onClick={() => !disabled && onAnswerSelect(option)}
            disabled={disabled}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;