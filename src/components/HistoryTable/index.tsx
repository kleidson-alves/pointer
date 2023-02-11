import React, { useMemo, useState } from "react";
import { PAGE_SIZE } from "../../utils/constants/constants";
import { Pagination } from "./Pagination";

import styles from "./styles.module.scss";

export const HistoryTable: React.FC = () => {
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const tableData = useMemo(() => {
    const indexOfFirstElement = PAGE_SIZE * (currentPage - 1);
    const indexOfLastElement = indexOfFirstElement + PAGE_SIZE;

    return array.slice(indexOfFirstElement, indexOfLastElement);
  }, [array, currentPage]);
  return (
    <>
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
          {tableData.map((element) => (
            <tr>
              <td>10/02/2023</td>
              <td>Estudo</td>
              <td>08:30</td>
              <td>10:35</td>
              <td>2h35</td>
            </tr>
          ))}
        </tbody>
      </table>
      {array.length > PAGE_SIZE && (
        <Pagination quantity={array.length / PAGE_SIZE} />
      )}
    </>
  );
};
