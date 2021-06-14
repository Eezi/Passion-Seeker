import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        console.log('answers', args)
        const { answers } = args;
        TestAnswer.find({ 
            $and: [
                {'question1': {'$elemMatch': {'name': 'A1', 'state': 'non_free'} } },
                {'question2': {'$elemMatch': {'name': 'B7', 'state': 'free'} } }
           ]
         })
        return 'testi'
    }
}
