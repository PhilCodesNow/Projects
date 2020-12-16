import React from 'react';
import ToDo from './ToDos';

export default function toDoList({ todos, toggleTodo }) {
    return (
        todos.map(todos => {
            return <ToDo key={todos.id} todo={todos} toggleTodo={toggleTodo} />
        }) 
    )
}
