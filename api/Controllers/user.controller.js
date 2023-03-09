import User from '../models/user.model.js'
import jwt  from 'jsonwebtoken';

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  if(req.userId !== user._id.toString()){
    return res.status(403).send("You can delete only your accout!")
  }
  await User.findByIdAndDelete(req.params.id)
  res.status(200).send("deleted")
};

export const allUsers = async (req, res, next) => {
  const users = await User.find({})

  res.status(200).send(users)
};