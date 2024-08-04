import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [sequence, setSequence] = useState(0); // 변수 이름 변경
  const refTodoItem = useRef();

  useEffect(() => {
    let storedSequence = window.localStorage.getItem("sequence");
    if (storedSequence === null) {
      window.localStorage.setItem("sequence", "0");
      storedSequence = 0;
    }
    
    const handleSetInit = () => {
      window.localStorage.setItem("todolist", "[]");
      return "[]";
    };

    const todo = JSON.parse(window.localStorage.getItem("todolist") ?? handleSetInit());

    setTodoList(todo);
    setSequence(Number(storedSequence));
  }, []); // 의존성 배열 추가, 빈 배열로 한 번만 실행

  const handleTodoAdd = (item) => {
    if (sequence === null || item.trim() === '') {
      return;
    }

    const newTodo = { tf: false, id: sequence + 1, text: item };
    const updatedTodoList = [...todoList, newTodo];

    window.localStorage.setItem("todolist", JSON.stringify(updatedTodoList));
    window.localStorage.setItem("sequence", String(sequence + 1));

    setTodoList(updatedTodoList);
    setSequence(sequence + 1);
    refTodoItem.current.value = '';
  };

  const handleTodoCheck = (tf, idx) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[idx].tf = !tf;

    window.localStorage.setItem("todolist", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const handleTodoDelete = (id) => {
    const updatedTodoList = todoList.filter((val) => val.id !== id);

    window.localStorage.setItem("todolist", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  return (
    <div className='mainLayout'>
      <div className='todoLayout'>
        <div className='todoTop'>
          <div className='todoTitle'>
            To Do List
          </div>
          <div className='todoAdd'>
            <input
              type='text'
              placeholder='할 일을 입력하세요.'
              ref={refTodoItem}
            />
            <div onClick={() => handleTodoAdd(refTodoItem.current.value)}>
              ﹢
            </div>
          </div>
        </div>
        <div className='listLayout'>
          {todoList.map((val, idx) =>
            <div className='todoItem' key={val.id}>
              <div className='todoCheckBox' onClick={() => handleTodoCheck(val.tf, idx)}>
                <div className='checkIcon'>
                  {val.tf ? '✔️' : ''}
                </div>
                <span>{val.text}</span>
              </div>
              <div className='deleteBox' onClick={() => handleTodoDelete(val.id)}>
                x
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
