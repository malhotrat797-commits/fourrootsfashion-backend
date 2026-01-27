const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- BASIC TEST ROUTE ----
app.get("/", (req, res) => {
  res.send("FourRoots Fashion backend is running");
});

// ---- CATEGORY MODEL ----
const CategorySchema = new mongoose.Schema({
  name: String
});
const Category = mongoose.model("Category", CategorySchema);

// ---- PRODUCT MODEL ----
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});
const Product = mongoose.model("Product", ProductSchema);

// ---- CATEGORY APIs ----
app.post("/api/category", async (req, res) => {
  const category = new Category({ name: req.body.name });
  await category.save();
  res.json(category);
});

app.get("/api/category", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// ---- PRODUCT APIs ----
app.post("/api/product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.get("/api/product", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ---- DATABASE + SERVER ----
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () =>
      console.log("Server running on port 4000")
    );
  })
  .catch(err => console.log(err));

