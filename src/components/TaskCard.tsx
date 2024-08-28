import styles from "../styles/taskCard.module.css";
import { Circle, CheckCircle } from "@phosphor-icons/react";

import { Trash } from "@phosphor-icons/react";
import { Itask } from "../utils/types";

import { useContext } from "react";
import { taskContext } from "../contexts/taskContext";

export function TaskCard({ id, checked, text }: Itask) {
  const { tasks, setTasks } = useContext(taskContext);

  function handleTaskDelete() {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function onCheckedChange() {
    const tasksList = tasks;

    for (let i = 0; i < tasksList.length; i++) {
      if (tasksList[i].id === id) {
        checked
          ? (tasksList[i].checked = false)
          : (tasksList[i].checked = true);
      }
    }

    setTasks([...tasksList]);
  }

  return (
    <div className={styles.taskCard}>
      {checked ? (
        <CheckCircle
          size={22}
          className={styles.chekcedCircle}
          onClick={onCheckedChange}
        />
      ) : (
        <Circle size={22} className={styles.circle} onClick={onCheckedChange} />
      )}
      <p className={checked ? styles.done : ""}>{text}</p>
      <Trash size={22} className={styles.trash} onClick={handleTaskDelete} />
    </div>
  );
}
