const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
const students = [
    {
        name: "Rahul",
        age: 18,
        course: "B tech",
        marks: 85
    },
    {
        name: "Satyam",
        age: 18,
        course: "BCA",
        marks: 88
    },
    {
        name: "naimish",
        age: 20,
        course: "BCA",
        marks: 90
    },
    {
        name: "Ram",
        age: 17,
        course: "BBA",
        marks: 91
    }
];
app.get("/", (req, res) => {
    res.render("index", {
        title: "Student Dashboard",
        message: "Welcome to my EJS Practice Project"
    });
});
app.post("/students", (req, res) => {
    const { name, age, course, marks } = req.body;
    students.push({
        name, age, course, marks: Number(marks)
    });
    res.redirect("/students");
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
