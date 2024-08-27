import styles from "./styles/app.module.css";

import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { CreateBtn } from "./components/CreateBtn";
import { TaskTable } from "./components/TaskTable";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { taskContext } from "./contexts/taskContext";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const { tasks, setTasks } = useContext(taskContext);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function onCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { checked: false, text: newTask }]);
    console.log(tasks);
  }

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={onCreateNewTask}>
          <InputTask newTask={newTask} onNewTaskChange={handleNewTaskChange} />
          <CreateBtn />
        </form>
        <TaskTable />
      </div>
    </main>
  );
}

export default App;
