import styles from "./styles.module.scss";
import * as I from "./types";

export function Button({ children, ...rest }: I.ButtonProps) {
  return (
    <>
      <button {...rest} className={styles["injector-spider-button"]}>
        {children}
      </button>
    </>
  );
}
