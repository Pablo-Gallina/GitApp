export const getDiffDays = (dateToCompare) => {
  const date = new Date(dateToCompare);
  const dateNow = new Date();
  const diffTime = Math.abs(dateNow - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
