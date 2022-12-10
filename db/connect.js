const mongoose = require("mongoose");

uri = "mongodb://localhost:27017/thapa-new-restapi";

mongoose.set("strictQuery", true);

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
