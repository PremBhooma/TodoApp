import { useState } from "react";
import styles from "./Todo.module.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todoCount + 1,
        text: todoInput,
        completed: false,
      },
    ]);
    setTodoCount(todoCount + 1);
    setTodoInput("");
  };

  const markCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className={styles.mainContainer}>
      <AddTodo
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        markCompleted={markCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;

/*
	When state is Array/Object:
	- Don't use push, instead use ... (spread operator)
	- Use methods like map, filter, etc which return a new array
*/
