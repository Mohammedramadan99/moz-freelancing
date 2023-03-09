import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  // get the token
  const token = req.cookies.accessToken;
  // sending an error if there is no token 
  if (!token) return next(createError(401,"You are not authenticated!"))

  // verify the token 
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    // it will send the userId and isSeller status
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};
