require("dotenv").config();

const express = require("express");

const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Entry Page🧧",
  });
});

//Middleware
app.use("/api/products", products_routes);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`connected to database💾`);
      console.log(`server running on port: ${port}📡`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
