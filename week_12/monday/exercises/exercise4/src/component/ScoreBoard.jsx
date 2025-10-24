import styles from './Quiz.module.css';

function ScoreBoard({ score, total }) {
  return (
    <div className={styles.scoreBoard}>
      <p className={styles.scoreText}>
        Score: <span className={styles.scoreNumbers}>{score}/{total}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;