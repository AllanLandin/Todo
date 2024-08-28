import styles from "./styles/app.module.css";

import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { CreateBtn } from "./components/CreateBtn";
import { TaskTable } from "./components/TaskTable";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { taskContext } from "./contexts/taskContext";
import { Task } from "./utils/taskClass";

function App() {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const { tasks, setTasks } = useContext(taskContext);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function onCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = new Task({ checked: false, text: newTaskText });
    setTasks([...tasks, newTask]);
  }

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={onCreateNewTask}>
          <InputTask
            newTask={newTaskText}
            onNewTaskChange={handleNewTaskChange}
          />
          <CreateBtn />
        </form>
        <TaskTable />
      </div>
    </main>
  );
}

export default App;
