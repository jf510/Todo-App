import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./Todo.css";


function Todo(props) {
  return (
    <div className="todo">
      <List>
        <ListItem>
          <ListItemText primary={props.text} secondary="Deadline"  />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
