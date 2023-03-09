import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  // 1. Add the review
  // 2. check if the user reviewed this gig before
  // 3. update the Gig
  
  // check if the user is a seller
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));
  // create a new review
  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    // check if the user reviewed this gig before
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    //  send a message to the user 
    if (review)
      return next(
        createError(403, "You have already created a review for this gig!")
      );

    //TODO: check if the user purchased the gig.

    const savedReview = await newReview.save();
    // update the gig 
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};
