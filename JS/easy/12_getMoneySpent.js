function getMoneySpent(keyboards, drives, b) {
  const sumElements = [];
  for (let keyw of keyboards) {
    for (let driv of drives) {
      if (keyw + driv <= b) sumElements.push(keyw + driv);
    }
  }
  return sumElements.length ? Math.max(...sumElements) : -1;
}

export default getMoneySpent;
