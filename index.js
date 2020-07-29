const express = require('express');
const mongoose = require('mongoose');
const joi = require('joi');
const product = require("./routes/product");
const app = express();
mongoose.connect('mongodb://localhost/shopping')
.then(()=> {console.log("database connected....")})
.catch(()=> {console.error("could not connect..")});
app.use(express.json());

app.use('/api/products',product);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));