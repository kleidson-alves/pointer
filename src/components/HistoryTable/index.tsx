import React, { useMemo, useState } from "react";
import { useTask } from "../../hooks/useTask";
import { PAGE_SIZE } from "../../utils/constants/constants";
import { calculateNumberOfPages } from "../../utils/functions/paginationFunctions";
import { Pagination } from "./Pagination";

import Empty from "../../assets/empty.svg";

import styles from "./styles.module.scss";

export const HistoryTable: React.FC = () => {
  const { tasks } = useTask();

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = useMemo(() => {
    return calculateNumberOfPages(tasks.length);
  }, [tasks.length]);

  const tableData = useMemo(() => {
    const indexOfFirstElement = PAGE_SIZE * (currentPage - 1);
    const indexOfLastElement = indexOfFirstElement + PAGE_SIZE;

    return tasks.slice(indexOfFirstElement, indexOfLastElement);
  }, [tasks, currentPage]);
  return (
    <>
      <div className={styles.tableContainer}>
        {tasks.length > 0 ? (
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
              {tableData.map((task, index) => (
                <tr key={index}>
                  <td>{task.date}</td>
                  <td>{task.name}</td>
                  <td>{task.startHour}</td>
                  <td>{task.endHour}</td>
                  <td>{task.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.empty}>
            <img src={Empty} alt="menino com uma caixa vazia" />
            <p>Nenhuma atividade foi registrada ainda</p>
          </div>
        )}
      </div>
      {tasks.length > PAGE_SIZE && (
        <Pagination
          quantity={numberOfPages}
          currentPage={currentPage}
          changePage={setCurrentPage}
        />
      )}
    </>
  );
};
