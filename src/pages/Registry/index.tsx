import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Display } from "../../components/Display";
import { Input } from "../../components/Input";
import { useTask } from "../../hooks/useTask";
import {
  calculateDuration,
  formatDate,
  formatHour,
} from "../../utils/functions/dateFunctions";

import styles from "./styles.module.scss";

export const Registry: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [isExit, setIsExit] = useState(false);

  const { loadTask, saveCurrentTask, saveTask } = useTask();

  const handleRegisterIncoming = () => {
    saveCurrentTask({ name: taskName, date: new Date() });
    setIsExit(true);
  };

  const handleRegisterOutcoming = () => {
    const loadedTask = loadTask();

    if (loadedTask) {
      const startDate = new Date(loadedTask.date);
      const now = new Date();

      const name = loadedTask.name;
      const date = formatDate(startDate);
      const startHour = formatHour(startDate);
      const endHour = formatHour(now);
      const duration = calculateDuration(startDate, now);

      const task = {
        name,
        date,
        startHour,
        endHour,
        duration,
      };
      saveTask(task);
    }
    setIsExit(false);
  };

  useEffect(() => {
    const loadedTask = loadTask();

    if (loadedTask) {
      setIsExit(true);
    }
  }, [loadTask]);

  return (
    <div className={styles.container}>
      {!isExit ? (
        <>
          <Input
            placeholder="Ex: Estudo, Academia etc."
            setValue={setTaskName}
            value={taskName}
          />
          <Button onClick={handleRegisterIncoming} label="registrar entrada" />
        </>
      ) : (
        <>
          <Display task={taskName} date={new Date()} />
          <Button onClick={handleRegisterOutcoming} label="registrar saída" />
        </>
      )}
    </div>
  );
};
