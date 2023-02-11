export const createList = (n: number) => {
  const list: number[] = [];
  for (let i = 0; i < n; i++) {
    list.push(i);
  }

  return list;
};
