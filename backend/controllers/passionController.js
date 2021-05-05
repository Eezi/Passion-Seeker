import asyncHandler from "express-async-handler";
import Passion from "../models/passionModel.js";

export default {
 getAllPassions: asyncHandler(async (parent, args, context) => {
  const passions = await Passion.find({});
  console.log('passions', passions)
  if(passions){
    res.json(passions);
  } else {
    res.status(404);
    throw new Error('Passions not found');
  }
})
}