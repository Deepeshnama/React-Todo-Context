import React, { useContext } from "react";
import ListItem from "./ListItem";
import TodoContext from "../Context/TodoContext";

const ListGroup = () => {

  const {todos , editTodo} = useContext(TodoContext)

  return (
    <ul className="list-group"  >
      {
        todos.map((todo) => 
        <ListItem key={todo.id} todo = {todo} editTodo = {editTodo} />
        )
      }
    </ul>
  );
};

export default ListGroup;
