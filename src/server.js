const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());               // ✅ allow frontend access
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FourRoots Fashion backend is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch(err => console.error(err));
