import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import styles from "./styles.module.scss";

export const Registry: React.FC = () => {
  const [task, setTask] = useState("");

  return (
    <div className={styles.container}>
      <Input
        placeholder="Ex: Estudo, Academia etc."
        setValue={setTask}
        value={task}
      />
      <Button onClick={() => {}} label="registrar entrada" />
    </div>
  );
};
