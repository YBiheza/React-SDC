import React from "react";
import styles from "./Button.module.css";

export function Button ({ onClick, type = "button", disabled = false, label, current, cancel, ...props}) {
  return (
    <button
      type={type}
      className={`${styles.buttonStyles} ${current === true ? styles.currButton : ''} ${cancel === true ? styles.cancelButton : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button