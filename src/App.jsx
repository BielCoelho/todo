import styles from './App.module.css';
import './global.css';
import { Input } from './Input';
import { Tasks } from './tasks';
import Rocket from './assets/rocket.svg';

function App() {
  return (
    <>
    <header className={styles.header}>
      <img src={Rocket} />
      <p>to<span>do</span></p>
    </header>
    <main className={styles.mainContainer}>
      <Input />
      <Tasks />
    </main>
    </>
  )
}

export default App
