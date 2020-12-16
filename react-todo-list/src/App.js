import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';


function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef()

  function handleAddTodo(e) {
    const name = toDoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    toDoNameRef.current.value = null
  }


  return (
    <>
    <h1>App Here</h1>
    <TodoList todos={todos}/>
    <input ref={toDoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add To Do</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
