const storeName = "TechMart";
let taxRate = 0.18;

console.log("Store:", storeName);
const cartManager = (function () {

    const discount = 0.10;

    let cart = [
        {
            id: 1,
            name: "Keyboard",
            price: 1200,
            quantity: 1
        },
        {
            id: 2,
            name: "Mouse",
            price: 800,
            quantity: 2
        }
    ];
    const firstProduct = cart[0];

    const {
        name,
        price
    } = firstProduct;

    console.log("\nFirst Product:");
    console.log(name, price);
    const copiedCart = [...cart];

    console.log("\nCopied Cart:");
    console.log(copiedCart);
    const newProduct = {
        id: 3,
        name: "Headphones",
        price: 2000,
        quantity: 1
    };

    cart = [...cart, newProduct];

    const updatedProduct = {
        ...newProduct,
        price: 1800
    };

    console.log("\nUpdated Product:");
    console.log(updatedProduct);

    function calculateTotal() {
        let subtotal = 0;

        cart.forEach(function (product) {

            subtotal += product.price * product.quantity;

        });

        return subtotal;
    }
    if (cart.length > 0) {

        let message = "Cart has products";

        const cartItems = cart.length;

        console.log("\nInside Block:");
        console.log(message);
        console.log("Items:", cartItems);
    }

    function showTax() {

        let taxRate = 0.05;

        console.log("\nLocal Tax Rate:", taxRate);
        console.log("Global Tax Rate:", window.taxRate);

    }

    function printProduct({ name, price, quantity }) {

        console.log(
            `${name} - ₹${price} x ${quantity}`
        );

    }

    console.log("\nProducts:");

    cart.forEach(product => {
        printProduct(product);
    });

    function calculatePrice(price, quantity) {

        return price * quantity;

    }

    const productData = [
        1800,
        2
    ];

    const totalForProduct = calculatePrice(...productData);

    console.log("\nSpread in Function:");
    console.log(totalForProduct);

    console.log("\nHoisting with var:");

    console.log(userName);

    var userName = "Rahul";

    console.log(userName);

    console.log("\nHoisting with let:");

    let userAge = 20;

    console.log(userAge);

    const subtotal = calculateTotal();

    const tax = subtotal * taxRate;

    const finalPrice = subtotal + tax;

    console.log("\n========== FINAL BILL ==========");

    console.log("Store:", storeName);
    console.log("Subtotal:", subtotal);
    console.log("Tax:", tax);
    console.log("Final Price:", finalPrice);

    return {
        getCart() {
            return [...cart];
        },

        getTotal() {
            return calculateTotal();
        },

        getDiscount() {
            return discount;
        }
    };

})();
console.log("\n========== OUTSIDE IIFE ==========");

console.log("Cart:", cartManager.getCart());

console.log("Total:", cartManager.getTotal());

console.log("Discount:", cartManager.getDiscount());

