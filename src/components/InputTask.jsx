import styles from "../styles/inputTask.module.css";

export function InputTask() {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
    ></input>
  );
}
