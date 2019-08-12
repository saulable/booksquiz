function discountCalculator(cart) {
  let objectLength = Object.keys(cart).length;
  let discountCalc = [];
  let count = 0;
  while (objectLength > 0) {
    let total = 0;
    let discountRate = [0.05, 0.10, 0.20, 0.25];
    let index = -1;
    for (let val in cart) {
      if (cart[val] >= 1) {
        discountCalc[count] = {
          total: (total += 8),
          discount: discountRate[index]
        };
        cart[val]--;
        index++;
      }
      if (cart[val] === 0) {
        objectLength--;
      }
    }
    count++;
  }
  let cartTotal = 0;
  for (let i = 0; i < discountCalc.length; i++) {
    cartTotal += (discountCalc[i].total * (1 - discountCalc[i].discount));
  }
  return cartTotal;
}
let cart = {
  "book 1": 2,
  "book 2": 2,
  "book 3": 2,
  "book 4": 1,
  "book 5": 1
};


let total = discountCalculator(cart);
