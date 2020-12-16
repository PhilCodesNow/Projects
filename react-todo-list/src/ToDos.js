import React from 'react'

export default function ToDos( {todo, toggleTodo} ) {

    function changeCheckbox(checkbox) {
        checkbox.setState({
            checkbox: !checkbox
        })
    }
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" onClick={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}
