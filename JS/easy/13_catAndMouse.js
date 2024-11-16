function catAndMouse(x, y, z) {
  const firstCatDistance = Math.abs(x - z);
  const secondCatDistance = Math.abs(y - z);

  if (firstCatDistance < secondCatDistance) return "CAT A";
  else if (secondCatDistance < firstCatDistance) return "CAT B";
  else return "MOUSE C";
}

export default catAndMouse;
