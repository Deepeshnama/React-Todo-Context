import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";

const Navbar = () => {

  const {todos} = useContext(TodoContext)

  return (

    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">React Todo</span>
        <span className="navbar-brand mb-0 h1 text-warning">{todos.length} : Tasks</span>
      </div>
    </nav>

  );
};

export default Navbar;
