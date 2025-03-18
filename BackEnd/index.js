import express from "express";
import connectDb from "./src/config/db.js";
import textRoute from "./src/routes/textRoute.js";
import cors from "cors";

let app = express();

// console.log(app);

app.use(express.json());
app.use(cors());
app.use("/api/text", textRoute);

connectDb().then(() => {
  app.listen(3000, () => {
    console.log("Server is running at 3000");
  });
});
