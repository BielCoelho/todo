import Clipboard from "./assets/clipboard.svg";
import { Task } from "./Task";
import styles from "./TasksContainer.module.css";

export function TasksContainer() {
  const empty = false;

  return (
    <article>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          Tarefas criadas <span>0</span>
        </div>
        <div className={styles.finishedTasks}>
          Concluídas <span>0</span>
        </div>
      </header>
      <div className={styles.tasksContainer}>
        {empty ? (
          <div className={styles.empty}>
            <img src={Clipboard} />
            <p>
              Você ainda não tem tarefas cadastradas
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </div>
        ) : (
          <>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          </>
        )}
      </div>
    </article>
  );
}
