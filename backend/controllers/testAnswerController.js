import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        const { answers } = args;
        console.log('answers', answers[0].answer)
        console.log('answers', answers[1].answer)
        console.log('answers', answers[2].answer)
        console.log('answers', answers[3].answer)
        console.log('answers', answers[4].answer)
        console.log('answers', answers[5].answer)
        console.log('answers', answers[6].answer)
        const results = await TestAnswer.find({ 
            $and: [
            {question1: { $in: [ answers[0]?.answer ] }},
            {question2: { $in: [ answers[1]?.answer ] }},
            {question3: { $in: [ answers[2]?.answer ] }},
            {question4: { $in: [ answers[3]?.answer ] }}, 
            {question5: { $in: [ answers[4]?.answer ] }}, 
            {question6: { $in: [ answers[5]?.answer ] }}, 
            {question7: { $in: [ answers[6]?.answer ] }}, 
            ]
         });
         console.log('results', results)
        return results
    }
}
