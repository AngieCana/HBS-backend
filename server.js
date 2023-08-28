import express from "express";
import data from "./data.js";
import 'dotenv/config'

//changed module type to es6 so import and export can be used instead of require

const app = express();

//path that will be accessing our api. when you type the filepath it will show you the list of the top 8 products
app.get('/api/products', (req, res) => {
  res.send(data.products);
})

//define the port that will be responding from the backend. if the first port does not work, it will default to 5000.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})