
let students = ["Rahul", "Aman", "Priya", "Neha"];

console.log("Original Array:");
console.log(students);

students.push("Satyam");

console.log("\nAfter Inserting at Last:");
console.log(students);

students.unshift("Riya");

console.log("\nAfter Inserting at First:");
console.log(students);

students.splice(2, 0, "Karan");

console.log("\nAfter Inserting at Index 2:");
console.log(students);

students.pop();

console.log("\nAfter Removing Last Element:");
console.log(students);

students.shift();

console.log("\nAfter Removing First Element:");
console.log(students);

students.splice(1, 1);

console.log("\nAfter Removing Element at Index 1:");
console.log(students);

