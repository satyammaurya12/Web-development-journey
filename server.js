const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const server = express();
server.use(express.json());
server.get("/",(req,res)=>{
    res.send("Book Store API is running");
});
server.use("/books",bookRoutes);
server.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});
