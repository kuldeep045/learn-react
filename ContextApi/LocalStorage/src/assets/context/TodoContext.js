import React, { Children, createContext, useContext } from "react";
const TodoContext = createContext(
    {
        todos:[
            {
                id:1,
                todo: "todo message",
                completed: false
            }
        ],
        addTodo: (todo)=>{},
        updateTodo : (id, todo) =>{},
        deleteTodo : (id) =>{},
        toggleComplete : (id) =>{}
    }
)

const useTodo = () =>{
    return useContext(TodoContext)
}
const TodoContextProvider = TodoContext.Provider

export {useTodo, TodoContextProvider, TodoContext}

