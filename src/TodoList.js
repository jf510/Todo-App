import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input } from "@mui/material";

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
    // clear the input after the submit
    setInput("");
  };

  return (
    <div classlist="todoList">
      <form>
        <h1>What's the Plan?</h1>

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          type="submit"
          varient="outlined"
          onClick={addTodo}
          disabled={!input}
        >
          Add Todo
        </Button>
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
