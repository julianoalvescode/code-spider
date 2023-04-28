import styles from "./text.module.scss";
import * as I from "./types";

export function Text({ children, ...rest }: I.TextProps) {
  return (
    <>
      <p {...rest} className={styles["injector-spider-text"]}>
        {children}
      </p>
    </>
  );
}
