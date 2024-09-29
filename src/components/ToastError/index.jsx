import styles from "./style.module.css";
import { useEffect } from "react";

export function ToastError({ error, resetError }) {
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        resetError();
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error, resetError]);

  if (!error) {
    return null;
  }

  return (
    <div className={styles.toastError}>
      <p>{error.message ?? "Erro desconhecido"}</p>
    </div>
  );
}
