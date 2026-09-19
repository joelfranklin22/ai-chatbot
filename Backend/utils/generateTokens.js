import jwt from "jsonwebtoken";

export const generateAccessTokens = (userId) => {
  return jwt.sign({ userId }, "Happy", { expiresIn: "7d" });
};

export const generateRefreshTokens = (userId) => {
  return jwt.sign({ userId }, "Happy", { expiresIn: "7d" });
};
