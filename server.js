const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/practiceDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Model
const User = mongoose.model("User", userSchema);

// Add user
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Get users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});