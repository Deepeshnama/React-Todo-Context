import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {

    // Todo State

   const [ todos , setTodos ] = useState([{id: 1, text : "I am from Context"}])

   // Edit State

   const [edit, setEdit] = useState({
    todo: {},
    editMode: false,
  });

  // console.log(edit)


   // Delete Todo
   const deleteTodo = (id) => {
    // setTodos(
    //   todos.filter((item) => {
    //   if(item.id !== id) {
    //     return true ;
    //   }
    // })
    // );

    setTodos(todos.filter((item) => item.id !== id));
  };

    // save todo

    const saveTodo = (text) => {
        const newTodo = {
          id: crypto.randomUUID(),
          text: text,
        };
    
        setTodos([newTodo, ...todos]);
      };

    
      // Edit Todo
    
      const editTodo = (oldTodo) => {
        setEdit({
          todo: oldTodo,
          editMode: true,
        });
      };
    
      // Update Todo
    
      const updateTodo = (oldId, newText) => {
        setTodos(
          todos.map((item) =>
            item.id === oldId ? { id: oldId, text: newText } : item
          )
        );
    
        setEdit({
          todo : {},
          editMode : false
        })
    
      };






    return (
        <TodoContext.Provider value = {{todos , edit , deleteTodo , saveTodo , editTodo , updateTodo}}>
           {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;