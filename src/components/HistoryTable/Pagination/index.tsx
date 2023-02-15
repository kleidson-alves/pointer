import React from "react";
import { createList } from "../../../utils/functions/paginationFunctions";

import styles from "./styles.module.scss";

interface IPaginationProps {
  quantity: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  quantity,
  currentPage,
  changePage,
}) => {
  const array = createList(quantity);

  return (
    <div className={styles.paginationContainer}>
      {array.map((element) => (
        <button
          key={element}
          className={
            element + 1 === currentPage ? styles.activePage : undefined
          }
          onClick={() => changePage(element + 1)}
        >
          {element + 1}
        </button>
      ))}
    </div>
  );
};
