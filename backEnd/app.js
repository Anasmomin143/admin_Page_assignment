import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/users").then(() => {
  console.log("db connection");
});

const userSchema = mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

let usersModel = mongoose.model("userlist", userSchema);
app.post("/users", (req, res) => {
  usersModel.find().then((data) => {
    res.send(data);
  });
});

app.listen(9000, () => {
  console.log("server Started");
});

// const user = new usersModel({
//   name: "adnan",
//   age: 21,
//   email: "adnan@gmail.com",
// });
// user.save();
