let price = 200;
let quantity = 3;
let discount = 10;

let mainPrice = price * quantity;
let discountAmount = (mainPrice * discount) / 100;
let discountPrice = mainPrice - discountAmount;

console.log(`Main Price ${mainPrice}`);
console.log(`Discount Amount ${discountAmount}`);
console.log(`Discount Price ${discountPrice}`);
