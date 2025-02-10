const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

console.log(products);
//1
const discounted = products.map(product=>({
    ...product, price:product.quantity>100 ? product.price*0.9:product.price
}));
console.log(discounted);

// const discounted_products = products.filter(product=>product.quantity>100);
// console.log(discounted_products);
//2
const discounted_products = products.map(product=>({
    ...product, price:product.quantity>100 ? product.price*0.9:product.price
})).filter(product=> product.price<products.find(item=>item.id===product.id).price);

console.log(discounted_products);

//3
discounted_products.forEach(show);
function show(products){
    console.log(products.name+": "+products.price);
    
}