import Passion from "../models/passionModel.js";

export default {
    getAllGamePassions: async (parent, args, context) => {
        const passions = await Passion.find({category: 'games'});
        console.log('passions', passions)
        return passions
    }
}
