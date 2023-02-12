import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Display } from "../../components/Display";
import { Input } from "../../components/Input";

import styles from "./styles.module.scss";

export const Registry: React.FC = () => {
  const [task, setTask] = useState("");
  const [isExit, setIsExit] = useState(true);
  return (
    <div className={styles.container}>
      {!isExit ? (
        <>
          <Input
            placeholder="Ex: Estudo, Academia etc."
            setValue={setTask}
            value={task}
          />
          <Button onClick={() => {}} label="registrar entrada" />
        </>
      ) : (
        <>
          <Display task="Academia" date={new Date()} />
          <Button onClick={() => {}} label="registrar saída" />
        </>
      )}
    </div>
  );
};
