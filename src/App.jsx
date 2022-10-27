import { AddTaskBar } from './AddTaskBar';
import styles from './App.module.css';
import Rocket from './assets/rocket.svg';
import './global.css';
import { TasksContainer } from './TasksContainer';

function App() {
  return (
    <>
    <header className={styles.header}>
      <img src={Rocket} />
      <p>to<span>do</span></p>
    </header>
    <main className={styles.mainContainer}>
      <AddTaskBar />
      <TasksContainer />
    </main>
    </>
  )
}

export default App
