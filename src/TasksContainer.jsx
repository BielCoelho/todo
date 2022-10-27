import Clipboard from "./assets/clipboard.svg";
import { Task } from "./Task";
import styles from "./TasksContainer.module.css";

export function TasksContainer({tasks, removeTask}) {
  const empty = tasks == 0;
  const allTasksQuantity = tasks.length

  return (
    <article>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          Tarefas criadas <span>{allTasksQuantity}</span>
        </div>
        <div className={styles.finishedTasks}>
          Concluídas <span>{empty ? '0' : `QUANTIDADE CONCLUIDA de ${allTasksQuantity}`}</span>
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
          {
            tasks.map(task => {
              return <Task key={task.id} content={task.text} taskToDelete={removeTask} />
            })
          }
          </>
        )}
      </div>
    </article>
  );
}
