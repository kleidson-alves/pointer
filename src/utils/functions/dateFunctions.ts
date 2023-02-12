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

export const calculateDuration = (start: Date, end: Date) => {
  const startMinutes = start.getHours() * 60 + start.getMinutes();
  const endMinutes = end.getHours() * 60 + end.getMinutes();

  const diff = endMinutes - startMinutes;
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return hours > 0 ? `${hours}h${minutes}` : `${minutes}min`;
};
