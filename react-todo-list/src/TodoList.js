import React from 'react';
import ToDo from './ToDos';

export default function toDoList({ todos }) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} todo={todo} />
        })
    )
}
