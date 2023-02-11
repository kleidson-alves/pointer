import React from "react";

import styles from "./styles.module.scss";

interface IButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {label}
    </button>
  );
};
