import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo} from '../assets/features/todo/todoSlice'

function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoReducer.todos)
    
    
  return (
    <>
    <div className='text-white'>TODOS: </div>
    {
        todos.map((todo) => {
            return <div className='w-full flex mt-3 justify-between bg-white text-lg px-6 py-3 rounded-lg ' key={todo.id}>
                {todo.text}
                <button className='bg-red-700' onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
            </div>
        })
    }
        
    </>
  )
}

export default Todo