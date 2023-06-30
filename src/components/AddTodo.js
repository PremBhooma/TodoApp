import styles from "./Todo.module.css";

const AddTodo = ({ todoInput, setTodoInput, addTodo }) => {
  return (
    <>
      <input
        className={styles.addTodoInput}
        type="text"
        placeholder="Enter todo item ..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button className={styles.addTodoButton} onClick={addTodo}>
        Add todo
      </button>
    </>
  );
};

export default AddTodo;
