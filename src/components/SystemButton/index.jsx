import styles from "./style.module.css";

import { mergeClassName } from "../../utils";
import { LoadingSpinner } from "../LoadingSpinner";

export function SystemButton({ isLoading, children, ...props }) {
  return (
    <button
      {...props}
      className={mergeClassName(styles.systemButton, props.className)}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}
