export const letterChange = (str) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vovel = ["a", "e", "i", "o", "u"];

  str = str.split("");
  const newArray = str.map((el) => {
    return el === "z" ? "a" : alphabet[alphabet.indexOf(el) + 1];
  });

  const modifiedArray = newArray.map((el) => {
    return vovel.includes(el) ? el.toUpperCase() : el;
  });

  return modifiedArray.join("");
};
