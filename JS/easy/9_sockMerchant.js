function sockMerchant(n, ar) {
  // Write your code heres

  let count = 0;
  ar.forEach((item, index) => {
    for (let i = index + 1; i < n; i++) {
      if (item === ar[i]) {
        count++;
        ar.splice(i, 1);
        n--;
        break;
      }
    }
  });

  return count;
}

export default sockMerchant;
