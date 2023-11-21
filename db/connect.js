const { default: mongoose } = require("mongoose");

const connectionString =
  "mongodb+srv://estore:aATFX_%23r-2GguDm@storeitems.7mjdoxl.mongodb.net/social-media?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
