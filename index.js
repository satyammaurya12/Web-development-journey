import fs from "fs";
import path from "path";
const filePath = path.join( "notes.txt");
console.log("file path: ", filePath);
fs.writeFileSync(filePath,"Name: satyam\ncourse: node.js\ntopic: file System");
console.log("File created successfully!");
const data = fs.readFileSync(filePath,"utf-8");
console.log("\nFile content: ");
console.log(data);
fs.appendFileSync(filePath,"\nDay 1 : fs and path completed");
console.log("\nData added successfully!");
const updatedData = fs.readFileSync(filePath,"utf-8");
console.log(updatedData);
console.log("\n--- Path Information---");
console.log("File Name: ",path.basename(filePath));
console.log("Folder: ",path.dirname(filePath));
console.log("Extension: ",path.extname(filePath));
console.log("Absolute Path ",path.resolve(filePath));

