import React from "react";
import { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";


const AddTask = () => {
  const [newTodo,setNewTodo] = useState("")
  const [todos,setTodos] = useState([])
  const handleChange=(e)=>{
    setNewTodo(e.target.value)
  }
  const onDelete = (id)=>{
    let newTodo = todos.filter(todo => todo.id !==id)
    setTodos(newTodo)
  }
  return (
    <div className={styles.todoForm}>
      <input className={styles.addTodo} data-cy="add-task-input" value={newTodo} placeholder="Add task..." onChange={handleChange}/>
      <button className={styles.add} data-cy="add-task-button" onClick={()=>{
        setTodos([...todos,{id: Date.now(),value:newTodo}])
        setNewTodo("")
      }}>+</button>
      {todos.map((todo)=>(
        <Task key ={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default AddTask;
