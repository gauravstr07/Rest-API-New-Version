const express = require("express");

const products_routes = require("./routes/products");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//Middleware
app.use("/api/products", products_routes);

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`server running on port: ${port}📡`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
