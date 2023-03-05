import User from "../models/user.model.js";

import bcrypt from "bcrypt";


export const register = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hashing the password 
    const hash = bcrypt.hashSync(req?.body?.password, 5);
    // Add a new user
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};