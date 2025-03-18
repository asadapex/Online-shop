const express = require("express");
const { connectDb } = require("./config/db");
connectDb();
const app = express();
app.use(express.json());

app.listen(3001, () => console.log("server is running on 3001"));
