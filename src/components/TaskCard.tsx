import styles from "../styles/taskCard.module.css";
import { Circle, CheckCircle } from "@phosphor-icons/react";

import { Trash } from "@phosphor-icons/react";
import { Itask } from "../utils/types";

export function TaskCard({ checked, text }: Itask) {
  return (
    <div className={styles.taskCard}>
      {checked ? (
        <CheckCircle size={22} className={styles.chekcedCircle} />
      ) : (
        <Circle size={22} className={styles.circle} />
      )}
      <p>{text}</p>
      <Trash size={22} className={styles.trash} />
    </div>
  );
}
