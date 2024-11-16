function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k, 1);
  const annaCost = bill.reduce((acc, el) => acc + el, 0) / 2;
  if (b > annaCost) {
    console.log(b - annaCost);
  } else {
    console.log("Bon Appetit");
  }
}

export default bonAppetit;
