import "./style.css";

import { mergeClassName } from "../../utils";
import { LoadingSpinner } from "../LoadingSpinner";

export function SystemButton({ isLoading, children, ...props }) {
  return (
    <button
      {...props}
      className={mergeClassName("system-button", props.className)}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}
