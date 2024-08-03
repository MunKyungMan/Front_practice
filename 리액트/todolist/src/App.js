import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from './component/todoBoard';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    console.log("im here!", inputValue)
    setTodoList([...todoList, inputValue])
  }
  return (
    <main>
      <input type="text" onChange=
        {(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoBoard />
    </main>
  );
}

export default App;
