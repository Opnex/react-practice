import styles from "./Todo.module.css";

function TodoFilter({ currentFilter, onChangeFilter, onClearCompleted }) {
  return (
    <div className={styles.filterContainer}>
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => onChangeFilter(f)}
          className={currentFilter === f ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}

      <button onClick={onClearCompleted} className={styles.clearButton}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilter;
