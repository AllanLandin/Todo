import styles from "../styles/TaskTable.module.css";

import { TaskCard } from "./TaskCard";

import { useContext, useEffect, useState } from "react";
import { taskContext } from "../contexts/taskContext";

import clipBoardImg from "../assets/Clipboard.png";

export function TaskTable() {
  const { tasks } = useContext(taskContext);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].checked === true) {
        count++;
      }
    }
    setCompletedTasks(count);
  }, [tasks]);

  return (
    <div className={styles.taskTable}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>
            {completedTasks} de {tasks.length}
          </span>
        </div>
      </header>
      {tasks.length === 0 ? (
        <div className={styles.messageEmptyList}>
          <img src={clipBoardImg}></img>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard id={task.id} checked={task.checked} text={task.text} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
