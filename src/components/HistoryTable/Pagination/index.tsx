import React, { useEffect } from "react";
import { createList } from "../../../utils/functions/createList";

import styles from "./styles.module.scss";

interface IPaginationProps {
  quantity: number;
}

export const Pagination: React.FC<IPaginationProps> = ({ quantity }) => {
  const array = createList(quantity);

  return (
    <div className={styles.paginationContainer}>
      {array.map((element) => (
        <button>{element + 1}</button>
      ))}
    </div>
  );
};
