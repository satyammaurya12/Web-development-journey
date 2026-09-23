const student = {
    id: 101,
    name: "Satyam",
    age: 20,
    course: "JavaScript",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Student ID:", student.id);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Course:", student.course);

console.log("\nSkills:");

for (let i = 0; i < student.skills.length; i++) {
    console.log(student.skills[i]);
}

student.skills.push("Node.js");

console.log("\nUpdated Skills:");

student.skills.forEach(function (skill) {
    console.log(skill);
});

student.age = 21;

console.log("\nUpdated Age:", student.age);

console.log("\nStudent Details:");

console.log(student);