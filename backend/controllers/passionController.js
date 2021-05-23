import Passion from "../models/passionModel.js";

export default {
    getAllGamePassions: async (parent, args, context) => {
        const passions = await Passion.find({ category: args?.category });
        return passions
    }
}
