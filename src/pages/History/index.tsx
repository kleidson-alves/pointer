import React from "react";
import { HistoryTable } from "../../components/HistoryTable";

import styles from "./styles.module.scss";

export const History: React.FC = () => {
  return (
    <div className={styles.container}>
      <HistoryTable />
    </div>
  );
};
