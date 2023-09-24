import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";



const app = express(); 
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:sandy2002@cluster0.gjpuqm7.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected To Database & Listning to port of 5000"))
  .catch((err) => console.log(err));
