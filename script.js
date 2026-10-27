let priceInput = prompt("Enter a price (for example: $49.99):");
let priceWithoutDollar = priceInput.slice(1);
let price = parseFloat(priceWithoutDollar);
let discount = price * 0.10;
let newPrice = price - discount;
console.log(`Your new price is: $${newPrice}`);