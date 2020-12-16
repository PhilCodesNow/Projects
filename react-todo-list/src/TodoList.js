import React from 'react';
import ToDo from './ToDos';

export default function toDoList({ todos }) {
    return (
        todos.map(todos => {
            return <ToDo key={todos.id} todo={todos} />
        }) 
    )
}
