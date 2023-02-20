require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.use(express.json());
app.use(cors());

const customersRouter = require("./routes/customers");
const productsRouter = require("./routes/products");

app.use("/customers", customersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
