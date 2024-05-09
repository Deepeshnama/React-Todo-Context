import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../Context/TodoContext";

const Form = () => {

  const {saveTodo , edit , updateTodo} = useContext(TodoContext)

    const [text , setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(edit.editMode) {
          updateTodo(edit.todo.id , text)
        } else {
          saveTodo(text);
        }

        setText("")
    }

    useEffect(() => {
       setText(edit.todo.text)
    } , [edit])

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Text"
        className="form-control rounded-0"
        required
        onChange={(e) => setText(e.target.value)}
        value = {text}
      />
      <button className="btn btn-success w-100 rounded-0 my-3">Save</button>
    </form>
  );
};

export default Form;
