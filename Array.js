let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Array: " + fruits);
console.log("First element: ", fruits[0]);
console.log("second element", fruits[1]);
fruits.push("Grapes");
fruits.pop();
fruits.unshift("Pineapple");
fruits.shift();
console.log("Updated array: ", fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
