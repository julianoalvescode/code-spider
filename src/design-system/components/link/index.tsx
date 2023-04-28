import styles from "./link.module.scss";

import * as I from "./types";

export function Link({ children, ...rest }: I.LinkProps) {
  return (
    <>
      <a {...rest} className={styles["injector-spider-link"]}>
        {children}
      </a>
    </>
  );
}
