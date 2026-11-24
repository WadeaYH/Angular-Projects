"use strict";
const storeName = "ElectroShop";
let storeDescription = "Your one-stop shop for all things electronics!";
const Currency = "USD";
let NumberOfProducts = 100;
let currentlyOpen = true;
let productList = ["Smartphone", "Laptop", "Headphones", "Smartwatch", "Camera"];
let example = [["wadea", 25, true], ["ahmed", 30, false], ["leen", 22, true]];
let products = [
    { name: "Smartphone", price: 699, inStock: true, quantity: 10 },
    { name: "Laptop", price: 999, inStock: true, quantity: 5 },
    { name: "Headphones", price: 199, inStock: false, quantity: 0 },
    { name: "Smartwatch", price: 299, inStock: true, quantity: 15 },
    { name: "Camera", price: 50, inStock: true, quantity: 8 }
];
if (currentlyOpen) {
    console.log(`${storeName} is currently open!`);
    document.getElementById("status").innerText = `${storeName} is currently open!`;
}
else {
    console.log(`${storeName} is currently closed!`);
    document.getElementById("status").innerText = `${storeName} is currently closed!`;
}
function checkProductPrice() {
    let counter = 0;
    const container = document.getElementById("app");
    products.forEach(product => {
        if (product.price > 500) {
            console.log(`${product.name} is expensive.`);
            container.innerHTML += `<p>${product.name} is expensive.</p>`;
        }
        else if (product.price < 500 && product.price >= 100) {
            console.log(`${product.name} is Medium-priced.`);
            container.innerHTML += `<p>${product.name} is Medium-priced.</p>`;
        }
        else {
            console.log(`${product.name} is cheap.`);
            container.innerHTML += `<p>${product.name} is cheap.</p>`;
            counter++;
        }
    });
    console.log(`Number of cheap products: ${counter}`);
    document.getElementById("ProductsLessThan").innerText = `Number of cheap products: ${counter}`;
}
checkProductPrice();
function calculateDiscount(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
}
function checkProductStock(product) {
    const container = document.getElementById("productsInStock");
    if (product.quantity > 0) {
        container.innerHTML += `<p>${product.name} is in stock.</p>`;
    }
    else {
        container.innerHTML += `<p>${product.name} is out of stock.</p>`;
    }
}
function displayStoreMessage(message) {
    const container = document.getElementById("app");
}
function displayProductInfo(productName, price, currency = "USD", quantity, description) {
    if (description) {
        console.log(`Product: ${productName}, Price: ${price} ${currency}, Quantity: ${quantity}, Description: ${description}`);
    }
    else {
        console.log(`Product: ${productName}, Price: ${price} ${currency}, Quantity: ${quantity}`);
    }
}
function calculateTotalPrice(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
calculateTotalPrice(10, 20, 30, 40, 50);
