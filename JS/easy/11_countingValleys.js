function countingValleys(steps, path) {
  const pathArray = path.split("");
  let valleyCurrentCounter = 0;
  let valleyCounter = 0;

  pathArray.forEach((el) => {
    if (valleyCurrentCounter === -1 && el === "U") {
      valleyCounter++;
      valleyCurrentCounter++;
    } else if (el === "U") valleyCurrentCounter++;
    else valleyCurrentCounter--;
  });

  return valleyCounter;
}

export default countingValleys;
//UDDDUDUU
