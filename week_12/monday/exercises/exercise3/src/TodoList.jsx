import styles from "./Todo.module.css";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoItem}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className={styles.checkbox}
          />
          <span className={todo.completed ? styles.todoTextCompleted : styles.todoText}>
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className={styles.deleteButton}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
