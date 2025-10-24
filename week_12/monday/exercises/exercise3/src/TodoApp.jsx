import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import styles from "./Todo.module.css";

function TodoApp() {
  // 1️⃣ State for todos and filter
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | active | completed

  // 2️⃣ Function to add new todo
  function addTodo(text) {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(), // unique ID
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  // 3️⃣ Function to toggle completion
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // 4️⃣ Function to delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // 5️⃣ Function to clear completed todos
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  // 6️⃣ Function to filter visible todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  // 7️⃣ Derived values for counts
  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📝 My Todo List</h2>

      <TodoInput onAdd={addTodo} />

      <TodoFilter
        currentFilter={filter}
        onChangeFilter={setFilter}
        onClearCompleted={clearCompleted}
      />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <div className={styles.stats}>
        <span className={styles.statsHighlight}>{totalCount}</span> tasks total | {" "}
        <span className={styles.statsHighlight}>{completedCount}</span> completed
      </div>
    </div>
  );
}

export default TodoApp;
