import Passion from "../models/passionModel.js";

export default {
 getAllPassions: async (parent, args, context) => {
  const passions = await Passion.find({});
  console.log('passions', passions)
  return passions
}
}