import React from "react";
import styles from "./Button.module.css";

export function Button ({ onClick, type = "button", variant = "primary", disabled = false, className = '', label}) {
  return (
    <button
      type={type}
      className={`${variant} ${styles.bigButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button