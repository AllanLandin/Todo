import styles from "../styles/taskCard.module.css";
import { Circle, CheckCircle } from "@phosphor-icons/react";

import { Trash } from "@phosphor-icons/react";

export function TaskCard() {
  return (
    <div className={styles.taskCard}>
      <Circle size={22} className={styles.circle} />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash size={22} className={styles.trash} />
    </div>
  );
}
