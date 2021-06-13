export default `
    type Question {
        key: String        
        label: String
    }

    type Answer {
        question: String
        answer: String
    }

    input AnswerInput {
        question: String
        answer: String
    }

    type ResultPassion {
        _id: String
        category: String
        label: String
        key: String
        question1: [String]
        question2: [String]
        question3: [String]
        question4: [String]
        question5: [String]
        question6: [String]
        question7: [String]
        subPassions: [Passion]
    }

    type TestAnswer {
        question1: String
        question2: String
        question3: String
        question4: String
        question5: String
        question6: String
        question7: String
    }

    input TestAnswerInput {
        answers: [AnswerInput]
    }
`;
