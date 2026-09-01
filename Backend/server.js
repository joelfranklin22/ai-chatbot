import express from "express";
import cors from "cors";
import db from "./config/database.js";
import authroutes from "./routes/authroutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authroutes);

app.listen(4000, () => {
  console.log("Server started Running");
});
