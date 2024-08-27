import styles from "../styles/TaskTable.module.css";

import { TaskCard } from "./TaskCard";

import { useContext } from "react";
import { taskContext } from "../contexts/taskContext";

export function TaskTable() {
  const { tasks } = useContext(taskContext);

  return (
    <div className={styles.taskTable}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>2</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 3</span>
        </div>
      </header>
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <li key={task.text + index}>
            <TaskCard checked={task.checked} text={task.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
