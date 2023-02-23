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

interface ICurrentTask {
  name: string;
  date: Date;
}

export const Registry: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [currentTask, setCurrentTask] = useState<ICurrentTask | undefined>();

  const { loadTask, saveCurrentTask, saveTask } = useTask();

  const handleRegisterIncoming = () => {
    const current = { name: taskName, date: new Date() };

    setCurrentTask(current);
    saveCurrentTask(current);
  };

  const handleRegisterOutcoming = async () => {
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
        date,
        name,
        startHour,
        endHour,
        duration,
      };
      await saveTask(task);
    }
    setCurrentTask(undefined);
  };

  useEffect(() => {
    const loadedTask = loadTask();

    if (loadedTask) {
      setCurrentTask(loadedTask);

      console.log(loadedTask);
    }
  }, [loadTask]);

  return (
    <div className={styles.container}>
      {!currentTask ? (
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
          <Display task={currentTask.name} date={new Date(currentTask.date)} />
          <Button onClick={handleRegisterOutcoming} label="registrar saída" />
        </>
      )}
    </div>
  );
};
