import TestAnswer from "../models/testAnswerModel.js";

export default {
    getTestResults: async (parent, args, context) => {
        const { answers } = args;
        const andFilters = {};
        console.log('answers', answers);
        
        answers.forEach((answer, index) => {
         if (!andFilters[answer.question]) {
            andFilters[answer.question] = { $in: [] };
          }
          andFilters[answer.question]['$in'].push(answer.answer);
         });

         let results = await TestAnswer.find(andFilters);

         if (results.length <= 0) {
           delete andFilters.question6;
           results = await TestAnswer.find(andFilters);
         }
         if (results.length <= 0) {
           delete andFilters.question7;
           results = await TestAnswer.find(andFilters);
         }

         if (results.length <= 0) {
           delete andFilters.question2;
           results = await TestAnswer.find(andFilters);
         }

         if (results.length <= 0) {
           delete andFilters.question1;
           results = await TestAnswer.find(andFilters);
         }

        if (answers.filter(a => a.question === 'question6').map(a => a.answer)?.includes('c')) {
            const resultsQ6 = await TestAnswer.find({
              question5: { $in: answers.filter(a => a.question === 'question6').map(a => a.answer) }
            });
            const animalPassions = resultsQ6.find(r => r.key === 'elainten-kanssa-toimiminen');
            results.push(animalPassions);
         }

         if (results.length <= 0) {
          results = await TestAnswer.find({ key: { $in: [ 'ulkoliikunta', 'luova-tekeminen', 'vesilajit' ] } });
         }

         return results;
    }
}
