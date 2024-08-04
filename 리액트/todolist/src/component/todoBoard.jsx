import React from "react";
import TodoItem from "./todoItem";

function TodoBoard(props) {

    console.log("todoBoard",props.todoList)
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=> <TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard