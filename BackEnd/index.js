import express from "express";
import connectDb from "./src/config/db.js";

let app = express();

// console.log(app);
app.use(express.json());

connectDb().then(() => {
  app.listen(3000, () => {
    console.log("Server is running at 3000");
  });
});
