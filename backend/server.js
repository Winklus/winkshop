import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connectDB from "./config/db.js";
import productRoute from "./routers/productRoute.js";
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB


const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoute);



app.listen(port, () => console.log(`server listening on port ${port}`));
