import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const allGigs = async (req, res, next) => {
  // check if the user is a Seller
  
  try {
    const gigs = await Gig.find({})
    
    res.status(201).json(gigs);
  } catch (err) {
    next(err);
  }
};

export const createGig = async (req, res, next) => {
  // check if the user is a Seller
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));
  // create a new gig
  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    // get the gig
    const gig = await Gig.findById(req.params.id);
    // check if this gig of the current user
    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gig!"));
    // delete the gig
    await Gig.findByIdAndDelete(req.params.id);

    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};