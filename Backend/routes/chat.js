import express from "express";
import { verifyTokens } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/test", verifyTokens, (req, res) => {
  const id = req.userId;
  console.log({ msg: "middleware works ", userId: id });
  res.status(200).json({ msg: "middleware Works", userId: id });
});

export default router;
