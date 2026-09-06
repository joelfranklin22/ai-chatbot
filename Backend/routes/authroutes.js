import express from "express";
import db from "../config/database.js";
import jwt from "jsonwebtoken";
import bcyrpt from "bcrypt";

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
      const hashedPassword = await bcyrpt.hash(password, 10);
      const [rows] = await db.execute(
        "INSERT INTO userRegister (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
      );
      const token = jwt.sign(
        {
          userId: rows.insertId,
        },
        "my-secret-key",
        { expiresIn: "1h" },
      );
      console.log(token);
      
      res.status(200).json({ msg: "Rows Added", token: token });
    }
  } catch (error) {
    res.status(404).json({ msg: `${error} in catch block` });
  }
});

export default router;
