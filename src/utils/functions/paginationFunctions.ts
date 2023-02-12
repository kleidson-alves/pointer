import { PAGE_SIZE } from "../constants/constants";

export const createList = (n: number) => {
  const list: number[] = [];
  for (let i = 0; i < n; i++) {
    list.push(i);
  }

  return list;
};

export const calculateNumberOfPages = (arrayLength: number) => {
  let numberOfPages = arrayLength / PAGE_SIZE;
  return numberOfPages;
};
