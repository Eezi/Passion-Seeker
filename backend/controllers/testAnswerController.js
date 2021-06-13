import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        console.log('answers', args)
        return 'testi'
    }
}
