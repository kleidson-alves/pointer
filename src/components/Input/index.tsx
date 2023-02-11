import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

interface IInputProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  return (
    <input
      className={`${styles.input} ${isFilled ? styles.filled : undefined}`}
      type="text"
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
