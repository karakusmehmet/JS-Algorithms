export const userValidetion = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.slice(0, 1)) &&
    /[a-zA-Z0-9]/.test(str.slice(-1))
  ) {
    return true;
  } else {
    return false;
  }
};
