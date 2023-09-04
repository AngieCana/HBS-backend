import express from "express";
import data from "./data.js";
import "dotenv/config";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoute.js";
import productRouter from "./routes/productRoutes.js";
import bodyparser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import expressAsyncHandler from 'express-async-handler';
import cors from "cors";
import User from "./models/userModel.js";
import axios from "axios"


//changed module type to es6 so import and export can be used instead of require

const app = express();


//code for sign in 
app.post('/signin', async(req, res) => {
  const {email, password} = req.body;
  try {
      const check = await User.findOne({email: email})
      if (check){
        res.json("exists")
        console.log('email exists')
      } else {
        res.json("Email does not exist")
      }
  } catch (err) {
    console.log(e)
    res.json("Does not exist")
  }
})

//code for sign up
app.post('/signup', async(req, res) => {
  const {email, password} = req.body;
  const data = {
    email: email,
    password: password
  }
  try {
      const check = await User.findOne({email: email})
      if (check){
        res.json("exist")
        console.log('email exists')
      } else {
        res.json("notexist")
        await User.insertMany([data])
      }
  } catch (err) {
    console.log(err);
    res.json("Does not exist")
  }
})

//form data in post request will be converted into JSON 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

//connect to mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err.message);
  });

//define error handler for sign in api. accepts 4 parameters
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//define the port that will be responding from the backend. if the first port does not work, it will default to 5000.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
