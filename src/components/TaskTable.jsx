import styles from "../styles/TaskTable.module.css";

import { TaskCard } from "./TaskCard";

export function TaskTable() {
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
        <li>
          <TaskCard />
        </li>
      </ul>
    </div>
  );
}
