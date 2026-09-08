import jwt from "jsonwebtoken";



export const generateAccessTokens = (userId) => {
  return jwt.sign({ userId }, "my-sceret-key", { expiresIn: "1hr" });
};


export const generateRefreshTokens = (userId) => {
  return jwt.sign({ userId }, "my-sceret-key-refresh", { expiresIn: "7d" });
};
