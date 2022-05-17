import React from "react";
import { useState } from "react";


const Todo = () => {
    let [newTodos , setTodo] = useState("");
    const [todos,setTodos] = useState([]);  // this varibale get data from Ab1-input
    
    return (
        <>
            {todos.map((el) => ( 
                <div className="tododata">
                   <div>{el.value}</div>
                   <div><input className="round" type="checkbox" /></div>
                </div>
             ))}

            <input className="inputt" value={newTodos} onChange={(e) => setTodo(e.target.value)} placeholder="Enter todo's" />
            <button className="button1" onClick={() => {
            setTodos([
                ...todos,
                {
                    id:Date.now(),
                    value:newTodos,
                    iscompleted:false
                },
            ]);
            setTodo("")
            }} >+</button>
        </>
    )
}

export default Todo;