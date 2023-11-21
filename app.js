const express = require("express");
const app = express();
const posts = require("./routes/tasks");
const connectDB = require("./db/connect");
const cors = require("cors");
const functions = require('firebase-functions')

require("dotenv").config();

app.use(cors("http://192.168.0.102:3000"));

app.use(express.static("../client/build"));
app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("a");
});
app.use("/api/v1/posts", posts);

const port = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server on", port);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.api = functions.https.onRequest(app);
