import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../assets/features/todo/todoSlice.js'

export const store = configureStore({
    reducer: {
        todoReducer
    }
    
})