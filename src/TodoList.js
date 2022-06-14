import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Feed the cat",
    "Cook Dinner",
  ]);
    


  return (
    <div classlist="todoList">
      <NewTodoForm />

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
