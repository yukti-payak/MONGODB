import express from "express";

import mongoose from "mongoose";
const PORT = 8080;
import connectDB from"./config/db.js";
import User from "./model/User.js";
import userRoutes from "./routes/userRoutes.js"

connectDB();
const app = express();
app.use(express.json());

app.use("/users" , userRoutes);

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
})

