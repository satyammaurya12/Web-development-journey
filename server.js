const express = require("express");
const logger = require("./middleware/logger");
const app = express();
app.use(logger);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



