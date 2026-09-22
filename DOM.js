let parent = {
    name: "Parent",
    children: []
};

let one = { name: "One" };
let two = { name: "Two" };
let three = { name: "Three" };

parent.children.push(one, two, three);

console.log("Parent:", parent.name);
console.log("Children:", parent.children);

console.log("First Child:", parent.children[0].name);
console.log("Last Child:", parent.children[parent.children.length - 1].name);

console.log("Next Sibling:", parent.children[1].name);
console.log("Previous Sibling:", parent.children[0].name);