import { useState } from "react";
import styles from "./AddTaskBar.module.css";
import plus from "./assets/plus.svg";

export function AddTaskBar({ addTask, tasksCount }) {
  const [newTask, setNewTask] = useState("");
  const isInputEmpty = newTask == "";

  function handleInputText(task) {
    setNewTask(task.target.value);
  }

  function handleAddTask() {
    event.preventDefault();
    if (isInputEmpty) {
      return;
    }

    addTask({
      text: newTask,
      id: tasksCount + 1,
      isCompleted: false,
    });
    setNewTask("");
  }

  return (
    <form className={styles.form}>
      <input
        onChange={handleInputText}
        value={newTask}
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button
        disabled={isInputEmpty}
        onClick={handleAddTask}
        className={styles.button}
      >
        Criar <img src={plus} />
      </button>
    </form>
  );
}
