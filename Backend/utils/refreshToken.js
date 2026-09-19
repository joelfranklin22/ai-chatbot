import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/generate", (req, res) => {

  const refreshTokens = req.cookies.refreshToken;
  console.log(refreshTokens);
  
  if (!refreshTokens) return res.status(401).json({ msg: "no refresh tokens" });

  jwt.verify(refreshTokens, "Happy", (err, decoded) => {
    if (err) return res.status(401).json({ msg: "tokens expired" });

    const accessToken = jwt.sign({ userId: decoded.userId }, "Happy", {
      expiresIn: "1h",
    });
    res.json({ accessToken });
  });
});

export default router;
