import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import { TodoProvider } from "./Context/TodoContext";

const App = () => {
 

  return (
    <TodoProvider>

      <Navbar />

      <div className="container p-5">
        <Form />
        <ListGroup />
      </div>
      
    </TodoProvider>
  );
};

export default App;
