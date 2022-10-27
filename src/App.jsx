import { createContext, useContext, useEffect, useState } from "react";
import { AddTaskBar } from "./AddTaskBar";
import styles from "./App.module.css";
import Rocket from "./assets/rocket.svg";
import "./global.css";
import { TasksContainer } from "./TasksContainer";

const TaskState = createContext({
  id: null,
  isCompleted: null,
  text: null,
});

export const useTaskState = () => useContext(TaskState);

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    // setTasks([...tasks, task]);
    setTasks((prevState) => [...prevState, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  }

  function removeTask(task) {
    const tasksWithoutRemoved = tasks.filter((item) => {
      return item.text !== task.text;
    });
    setTasks(tasksWithoutRemoved);
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks);
  }, []);

  const tasksCount = tasks.length > 0 ? tasks.at(-1).id : tasks.length

  return (
    <TaskState.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      <header className={styles.header}>
        <img src={Rocket} />
        <p>
          to<span>do</span>
        </p>
      </header>
      <main className={styles.mainContainer}>
        <AddTaskBar
          addTask={addTask}
          tasksCount={tasksCount}
        />
        <TasksContainer tasks={tasks} removeTask={removeTask} />
      </main>
    </TaskState.Provider>
  );
}

export default App;
