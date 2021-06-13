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
    query getTestResults($answers: TestAnswerInput) {
        getTestResults(answers: $answers) {
           key
        }
    }
`;
