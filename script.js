let priceInput = prompt("Enter a price (for example: $49.99):");
let priceWithoutDollar = priceInput.slice(1);
let price = parseFloat(priceWithoutDollar);