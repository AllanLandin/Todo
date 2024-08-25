import styles from "../styles/createBtn.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function CreateBtn() {
  return (
    <button className={styles.button}>
      <span>Criar</span>
      <PlusCircle size={18} />
    </button>
  );
}
