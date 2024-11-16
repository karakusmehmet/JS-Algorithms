export const questionMark = (str) => {
  str = str.replace(/[^?\d]+/g, "");
  const arr = str.split("");
  console.log(arr);

  const newArr = arr.reduce((acc, el, index) => {
    if (el !== "?") {
      acc.push(parseInt(el) + parseInt(arr[index + 4]));
    }
    return acc;
  }, []);

  return newArr.includes(10) ? true : false;
};
