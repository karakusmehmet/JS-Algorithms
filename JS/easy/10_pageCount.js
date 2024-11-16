function pageCount(n, p) {
  // Write your code here
  let pageCount;
  let reversePageCount;
  let pageNumbers = [];
  let pages = [];

  for (let i = 1; i <= n; i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length % 2 === 0) {
    for (let j = 0; j < pageNumbers.length; j++) {
      if (!j) {
        pages.push([pageNumbers[0]]);
      } else if (j === pageNumbers.length - 1) {
        pages.push([pageNumbers[j]]);
      } else if (j % 2 === 0) {
        continue;
      } else {
        pages.push([pageNumbers[j], pageNumbers[j + 1]]);
      }
    }
  } else {
    for (let j = 0; j < pageNumbers.length; j++) {
      if (!j) pages.push([pageNumbers[0]]);
      else if (j % 2 === 0) continue;
      else pages.push([pageNumbers[j], pageNumbers[j + 1]]);
    }
  }
  const pagesReverse = pages.slice().reverse();

  pages.forEach((el, index) => {
    if (el.includes(p)) pageCount = index;
  });
  pagesReverse.forEach((el, index) => {
    if (el.includes(p)) reversePageCount = index;
  });

  return pageCount < reversePageCount ? pageCount : reversePageCount;
}

export default pageCount;
