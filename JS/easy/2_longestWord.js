export const longestWord = (sen) => {
  const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
  arr.sort((a, b) => b.length - a.length);

  return arr[0];
};
