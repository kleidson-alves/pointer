import React, { useMemo } from "react";
import { formatDate, formatHour } from "../../utils/functions/dateFunctions";
import styles from "./styles.module.scss";

interface IDisplayProps {
  task: string;
  date: Date;
}

export const Display: React.FC<IDisplayProps> = ({ task, date }) => {
  const formatedDate = useMemo(() => {
    return formatDate(date);
  }, [date]);

  const formatedHour = useMemo(() => {
    return formatHour(date);
  }, [date]);
  return (
    <div className={styles.display}>
      <p>Atividade: {task}</p>
      <p>Data: {formatedDate}</p>
      <p>Início: {formatedHour}</p>
    </div>
  );
};
