import React from 'react'

export default function ToDos( {todo} ) {

    function changeCheckbox(checkbox) {
        checkbox.setState({
            checkbox: !checkbox
        })
    }
    return (
        <div>
            <label>
                <input onClick={() => changeCheckbox(todo.complete)} type='checkbox' checked={todo.complete} />
                {todo.name}
            </label>
        </div>
    )
}
