const express = require("express");
const mongoose = require("./dbconnect/dbconnection");
const app = express();
const cors = require("cors");
const connectdb = require("./dbconnect/dbconnection");
const post_route  = require("./Routes/postroute");
const errorHandler = require("./middleware/errorHandler")

app.use(cors({
    origin:'*'
}));
const dotenv = require('dotenv').config();

connectdb();
app.use('/api', post_route)

app.use(errorHandler);
app.use(express.json())





const port = process.env.PORT || 16000;
app.listen(port)






console.log("server is listening on port " + port)