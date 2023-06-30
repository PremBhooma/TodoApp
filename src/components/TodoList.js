import styles from "./Todo.module.css";

const TodoList = ({ todos, markCompleted, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}{" "}
            </span>
            <span className={styles.todoActionButtons}>
              {!todo.completed && (
                <button onClick={() => markCompleted(todo.id)}>✔</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>⌫</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
