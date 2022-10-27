import Clipboard from "./assets/clipboard.svg";
import styles from "./Tasks.module.css";

export function Tasks() {
  const empty = true;

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
          <h1>cheio</h1>
        )}
      </div>
    </article>
  );
}
