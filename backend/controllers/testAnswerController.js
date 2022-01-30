import TestAnswer from "../models/testAnswerModel.js";

const findResults = async (filter) => {
  let results = await TestAnswer.find(filter);

  if (results.length <= 0) {
    delete filter.question6;
    results = await TestAnswer.find(filter);
  }

  if (results.length <= 0) {
    delete filter.question7;
    results = await TestAnswer.find(filter);
  }

  if (results.length <= 0) {
    delete filter.question2;
    results = await TestAnswer.find(filter);
  }

  if (results.length <= 0) {
    delete filter.question1;
    results = await TestAnswer.find(filter);
  }
  return results;
};

const intializeFilter = (answers) => {
  const filter = {};

  answers.forEach((answer, index) => {
    if (!filter[answer.question]) {
      filter[answer.question] = { $in: [] };
    }
    filter[answer.question]["$in"].push(answer.answer);
  });
  console.log("INTIAL FILTER", filter);
  return filter;
};

const addPetHobbies = async (results) => {};

export default {
  getTestResults: async (parent, args, context) => {
    const { answers } = args;
    console.log("ans", answers);

    const filters = intializeFilter(answers);
    let results = await findResults(filters);

    const likePets = answers
      .filter((a) => a.question === "question6")
      .map((a) => a.answer)
      ?.includes("c");

    if (likePets) {
      // Include pet passions includes answer c in question 6
      const animalPassionsi = await TestAnswer.find({
        key: "elainten-kanssa-toimiminen",
      });
      results.push(animalPassions[0]);
    }

    if (results.length <= 0) {
      // Default passions if no results
      results = await TestAnswer.find({
        key: { $in: ["ulkoliikunta", "luova-tekeminen", "vesilajit"] },
      });
    }

    return results;
  },
};
