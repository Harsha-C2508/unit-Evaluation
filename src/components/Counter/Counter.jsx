import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let [count,setCount] = useState(1);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=> setCount(count+1)} className={styles.add}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=> {
        if(count>1){
          setCount(count-1)
          }}} className={styles.add1}>-</button>
    </div>
  );
};

export default Counter;
