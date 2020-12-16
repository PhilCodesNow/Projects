import React from 'react'

export default function ToDos( {todo} ) {
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.complete} />
                {todo.name}
            </label>
        </div>
    )
}
