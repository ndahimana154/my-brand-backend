import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UsersModel from "../database/models/UsersModel";
const JWT_SECRET = "your_secret_key"; // Replace with your JWT secret key

interface AuthenticatedRequest extends Request {
  user?: any; // Change 'any' to the type of your user object if possible
}

const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "No token found!" });
  }
  try {
    // Verify Token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default verifyToken;
