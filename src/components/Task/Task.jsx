import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.box}>
    <li data-cy="task" className={styles.task}>
      <div data-cy="task-text" className={styles.listed}>
        <input type="checkbox" data-cy="task-checkbox" value={""} className={styles.check} />
        {todo.value}
       <Counter></Counter>
        <button data-cy="task-remove-button" onClick={()=> onDelete(todo.id)} className={styles.delete}>X</button>
      </div>
  </li>
  </div>
  );
};

export default Task;
