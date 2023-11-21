const express = require("express");
const app = express();
const posts = require("./routes/tasks");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

app.use(cors("http://192.168.0.102:3000"));

app.use(express.static("../client/build"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("a");
});
app.use("/api/v1/posts", posts);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 5000, () => {
      console.log("server on", process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
