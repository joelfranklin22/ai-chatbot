import express from "express";
import db from "../config/database.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    const [existingRows] = await db.execute(
      "Select * from userRegister where email=?",
      [email],
    );
    console.log(existingRows.length);
    console.log(existingRows);

    if (existingRows.length > 0) {
      return res.status(409).json({ msg: "User Already Exists" });
    } else {
      const [rows] = await db.execute(
        "INSERT INTO userRegister (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
      );
      res.status(200).json({ msg: "Rows Added" });
    }
  } catch (error) {
    res.status(404).json({ msg: `${error} in catch block` });
  }
});

export default router;
