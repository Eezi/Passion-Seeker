import { gql } from '@apollo/client/core'

export const QUERY_PASSIONS = gql`
    query passions($category: String) {
        passions(category: $category) {
            key
            label
            category
        }
    }
`;

export const QUERY_RESULT_PASSIONS = gql`
    query getTestResults($answers: [AnswerInput]) {
        getTestResults(answers: $answers) {
        _id
        category
        label
        key
        defaultValues
        question1
        question2
        question3
        question4
        question5
        question6
        question7
        subPassions {
            label 
            key
        }
        }
    }
`;
