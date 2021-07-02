import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        const { answers } = args;
        const allResults = [];
        console.log('ansewrs', answers)

        /*const results1 = await TestAnswer.find({
         });
         console.log('res1', results1)*/
        const results2 = await TestAnswer.find({
          $and: [
          {
          question1: answers[0].answer
          },
          {
          question2: answers[1].answer
          },
          {
          question3: answers[2].answer
          },
          {
          question4: answers[3].answer
          },
          {
          question5: answers[4].answer
          },
          {
          question6: answers[5].answer
          },
        {
          question7: answers[6].answer
        }
          ]
         });

      /*  const results3 = await TestAnswer.find({
          $and: [
          {
          question6: { $in: [ answers[5].answer ] },
          },
          {
          question7: { $in: [ answers[6].answer ] },
          },
          ]
         });*/
         if (answers[5].answer === 'c') {
            const resultsQ6 = await TestAnswer.find({
              question6: answers[5].answer
            });
            resultsQ6.forEach(r => allResults.push(r));
         }

         if (answers[3].answer === 'c' || answers[3].answer === 'd') {
            const resultsQ4 = await TestAnswer.find({
              question6: answers[3].answer
            });
            resultsQ4.forEach(r => allResults.push(r));
         }

         results2.forEach(r => allResults.push(r))
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
         /*answers.forEach( async({ question, answer }) => {
            let results = await TestAnswer.find({
               question: { $in: [ answer ] }
            });
            if (results.length > 0) {
                results.forEach(r => allResults.push(r))
            }
         })*/
         return results;
    }
}
