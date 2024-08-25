import { ChangeEvent } from "react";
import styles from "../styles/inputTask.module.css";

interface IinputTaskProps {
  newTask: string;
  onNewTaskChange: (ChangeEvent: ChangeEvent<HTMLInputElement>) => void;
}

export function InputTask({ newTask, onNewTaskChange }: IinputTaskProps) {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
      value={newTask}
      onChange={onNewTaskChange}
    ></input>
  );
}
