import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";

const ListItem = ({todo}) => {

  const { deleteTodo , editTodo} = useContext(TodoContext)

  return (
    <li className="list-group-item">
      <h1 className="display-1 text-secondary">{todo.text}</h1>
      <p className="display-5 text-info">id : {todo.id}</p>

      <span className="float-end">
        <button
          className="btn btn-sm btn-danger rounded-0 mx-2 float-end"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button className="btn btn-sm btn-warning rounded-0 float-end" onClick={() => editTodo(todo)}>
          Edit
        </button>
      </span>
    </li>
  );
};

export default ListItem;
