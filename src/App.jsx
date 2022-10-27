import { useState } from "react";
import { AddTaskBar } from "./AddTaskBar";
import styles from "./App.module.css";
import Rocket from "./assets/rocket.svg";
import "./global.css";
import { TasksContainer } from "./TasksContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(task) {
    const tasksWithoutRemoved = tasks.filter(item => {
      return item.text !== task;
    })
    setTasks(tasksWithoutRemoved)
  }


  return (
    <>
      <header className={styles.header}>
        <img src={Rocket} />
        <p>
          to<span>do</span>
        </p>
      </header>
      <main className={styles.mainContainer}>
        <AddTaskBar addTask={addTask} tasksCount={tasks.length} />
        <TasksContainer tasks={tasks} removeTask={removeTask}/>
      </main>
    </>
  );
}

export default App;
