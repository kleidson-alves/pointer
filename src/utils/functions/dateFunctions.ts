export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month >= 10) {
    return `${day}/${month}/${year}`;
  }

  return `${day}/0${month}/${year}`;
};

export const formatHour = (date: Date) => {
  const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
  const minutes =
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

  return `${hours}:${minutes}`;
};
