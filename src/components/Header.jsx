import styles from "../styles/header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={rocketLogo}></img>
        <p>
          to<span>do</span>
        </p>
      </div>
    </header>
  );
}
