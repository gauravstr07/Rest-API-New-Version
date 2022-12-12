const Product = require("../models/product");

// Route 1 ---> Get All Data http://localhost:5000/api/products/
const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json(myData);
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json(myData);
};

module.exports = { getAllProducts, getAllProductsTesting };
