import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Feed the cat",
    "Cook Dinner",
  ]);

  const addTodo = (e) => {
    // this will fire when we click the button
    e.preventDefault();

    // this will fire when we hit the button
    console.log("im working");
    // We use a spread to that we keep the original contents of the todolist
    setTodos([...todos, input]);
  };

  return (
    <div classlist="todoList">
      <form>
        <h1>What's the Plan?</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
