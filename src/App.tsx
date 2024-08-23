import styles from "./styles/app.module.css";

import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { CreateBtn } from "./components/CreateBtn";
import { TaskTable } from "./components/TaskTable";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <InputTask />
          <CreateBtn />
        </form>
        <TaskTable />
      </div>
    </main>
  );
}

export default App;
