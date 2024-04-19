// authMiddleware.js
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();


const secretKey = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1]; 

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.user = decoded; // Store the decoded payload in req.user
    next();
  });
};

const checkRole = (allowedRoles) => (req, res, next) => {
  if (!Array.isArray(allowedRoles)) {
    allowedRoles = [allowedRoles];
  }

  verifyToken(req, res, () => {
    if (allowedRoles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ message: "You do not have permission to perform this action" });
    }
  });
};

const generateToken = (payload = {}) => {
 

  const token = jwt.sign(payload, secretKey);

  return token;
};

export { verifyToken, checkRole, generateToken };