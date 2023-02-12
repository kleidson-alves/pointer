import React, { useMemo, useState } from "react";
import { PAGE_SIZE } from "../../utils/constants/constants";
import { calculateNumberOfPages } from "../../utils/functions/paginationFunctions";
import { Pagination } from "./Pagination";

import styles from "./styles.module.scss";

export const HistoryTable: React.FC = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6];

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = useMemo(() => {
    return calculateNumberOfPages(array.length);
  }, [array.length]);

  const tableData = useMemo(() => {
    const indexOfFirstElement = PAGE_SIZE * (currentPage - 1);
    const indexOfLastElement = indexOfFirstElement + PAGE_SIZE;

    return array.slice(indexOfFirstElement, indexOfLastElement);
  }, [array, currentPage]);
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Atividade</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Duração</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((element, index) => (
              <tr key={index}>
                <td>10/02/2023</td>
                <td>Estudo</td>
                <td>08:30</td>
                <td>10:35</td>
                <td>2h35</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {array.length > PAGE_SIZE && (
        <Pagination
          quantity={numberOfPages}
          currentPage={currentPage}
          changePage={setCurrentPage}
        />
      )}
    </>
  );
};
