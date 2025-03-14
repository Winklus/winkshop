import path from "path";
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleWares/errorMiddleWare.js";
dotenv.config()
import connectDB from "./config/db.js";
import uploadRoute from "./routers/uploadRoute.js";
import productRoute from "./routers/productRoute.js";
import userRoute from "./routers/userRoute.js";
import orderRoute from "./routers/orderRoute.js";
const port = process.env.PORT || 5000;

connectDB(); // connect to MongoDB




const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true,
}))
// app.use(express.json()) is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
// app.use(express.urlencoded()) is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: false }));
// cookie parser middleware
app.use(cookieParser());



app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoute);

const __dirname = path.resolve();
app.use('/upload', express.static(path.join(__dirname, 'uploads')));


if(process.env.NODE_ENV === "production"){
  // set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // any route that is not api will be redirected to index.html

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}


app.get("/api/config/paypal", (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}));
 

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`server listening on port ${port}`));
