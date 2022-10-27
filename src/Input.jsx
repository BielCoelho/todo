import plus from './assets/plus.svg';
import styles from './Input.module.css';

export function Input() {
    return (
        <form className={styles.form}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" type="text" />
            <button className={styles.button}>Criar <img src={plus} /></button>
        </form>
    )
}