import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef()

  function handleAddTodo(e) {
    const name = toDoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    toDoNameRef.current.value = null
  }

/*   useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    setTodos()
  }, [])
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) */


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
