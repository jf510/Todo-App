import React, { useState } from "react";
import TodoList from "./TodoList";

function NewTodoForm() {
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // this will fire when we click the button
    e.preventDefault();
    console.log("im working");
   
  };

  return (
    <div className="newTodoForm">
      <form>
        <h1>What's the Plan?</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
