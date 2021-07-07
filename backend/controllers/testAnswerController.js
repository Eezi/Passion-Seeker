import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        const { answers } = args;
        const results = await TestAnswer.find({ 
            $and: [
            {question1: { $in:  answers.filter(a => a.question === 'question1').map(a => a.answer) }},
            {question2: { $in:  answers.filter(a => a.question === 'question2').map(a => a.answer) }},
            {question3: { $in:  answers.filter(a => a.question === 'question3').map(a => a.answer) }},
            {question4: { $in:  answers.filter(a => a.question === 'question4').map(a => a.answer) }},
            {question5: { $in:  answers.filter(a => a.question === 'question5').map(a => a.answer) }},
            {question6: { $in:  answers.filter(a => a.question === 'question6').map(a => a.answer) }},
            {question7: { $in:  answers.filter(a => a.question === 'question7').map(a => a.answer) }},
            ]
         });
         if (answers.filter(a => a.question === 'question5').map(a => a.answer)?.includes('c')) {
            const resultsQ6 = await TestAnswer.find({
              question5: { $in: answers.filter(a => a.question === 'question5').map(a => a.answer) }
            });
            const animalPassions = resultsQ6.find(r => r.key === 'elainten-kanssa-toimiminen');
            results.push(animalPassions);
         }
         return results;
    }
}
