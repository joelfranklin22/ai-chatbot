import express from "express";
import cors from "cors";
import db from "./config/database.js";
import registerRoutes from "./routes/authRegister.js";
import loginRoutes from "./routes/authLogin.js";
import chatRoutes from "./routes/chat.js";
import cookieParser from "cookie-parser";
import refreshToken from "./utils/refreshToken.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", registerRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/refreshtokens", refreshToken);

app.listen(4000, () => {
  console.log("Server started Running");
});
