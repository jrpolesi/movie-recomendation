import styles from "./style.module.css";

export function LoadingSpinner({ size = "inherit", color = "inherit" }) {
  return (
    <div
      style={{
        fontSize: size,
        color,
      }}
    >
      <span
        className={`${styles.loadingSpinner} material-symbols-outlined loading-spinner`}
      >
        progress_activity
      </span>
    </div>
  );
}
