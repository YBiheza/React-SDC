import React from "react";
import styles from "./Button.module.css";

export function Button ({ onClick, type = "button", disabled = false, label = 'Dessert'}) {
  return (
    <button
      type={type}
      className={`${styles.buttonStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button